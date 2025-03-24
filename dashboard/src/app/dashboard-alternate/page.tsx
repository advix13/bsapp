import React from 'react';
import { redirect } from 'next/navigation';

export default function DashboardAlternatePage() {
  // This is a fallback page that redirects to the main dashboard
  redirect('/');
} 