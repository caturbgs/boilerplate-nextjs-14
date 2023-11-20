'use server';

import { RequestQuery } from '@/types';
import { getTokenHeaders } from '@/utils/auth';
import { convertToQueryString } from '@/utils/http';
import { format, sub } from 'date-fns';

export async function getChartTotalDashboard() {
  const { headers } = getTokenHeaders();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/dashboard/recap-total`, {
    headers,
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to fetch dashboard chart total data');
  }

  return resp;
}

export async function getWeeklyReportAccessDashboard() {
  const { headers } = getTokenHeaders();
  const startDate = format(sub(new Date(), { days: 6 }), 'yyyy-MM-dd HH:mm:ss');
  const endDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  const queryString = convertToQueryString({
    dateStart: startDate,
    dateEnd: endDate,
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/dashboard/access-anjar${queryString}`, {
    headers,
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to fetch dashboard weekly report data');
  }

  return resp;
}

export async function getLastUpdatedCourseDashboard(query?: RequestQuery) {
  const { headers } = getTokenHeaders();
  const queryString = query ? convertToQueryString(query) : '';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/dashboard/last-updated-course${queryString}`, {
    headers,
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to fetch dashboard last updated course data');
  }

  return resp;
}
