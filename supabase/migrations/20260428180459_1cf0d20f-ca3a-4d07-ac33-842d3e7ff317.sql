
-- Donors table (publicly readable so dashboard can show real counts; only edge functions write)
CREATE TABLE public.donors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  blood_group TEXT NOT NULL,
  last_donation_days INTEGER NOT NULL DEFAULT 0,
  phone TEXT,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Donors are viewable by everyone" ON public.donors FOR SELECT USING (true);

-- Blood requests
CREATE TABLE public.blood_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blood_group TEXT NOT NULL,
  units INTEGER NOT NULL DEFAULT 1,
  urgency TEXT NOT NULL DEFAULT 'critical',
  hospital TEXT,
  contact TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'open',
  notified_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.blood_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Requests are viewable by everyone" ON public.blood_requests FOR SELECT USING (true);
CREATE POLICY "Anyone can create requests" ON public.blood_requests FOR INSERT WITH CHECK (true);

-- Notifications log (one row per donor notified)
CREATE TABLE public.donor_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  request_id UUID NOT NULL REFERENCES public.blood_requests(id) ON DELETE CASCADE,
  donor_id UUID NOT NULL REFERENCES public.donors(id) ON DELETE CASCADE,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, sent, failed, confirmed, declined, selected
  sent_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.donor_notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Notifications viewable by everyone" ON public.donor_notifications FOR SELECT USING (true);

CREATE INDEX idx_donors_blood_group ON public.donors(blood_group);
CREATE INDEX idx_notifications_request ON public.donor_notifications(request_id);
