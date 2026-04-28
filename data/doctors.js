// Doctor records are persisted in `data/doctors.json` and managed via the
// admin UI at /admin/doctors. These re-exports keep existing imports working.
export { getDoctors, getDoctor } from '@/lib/doctors';
