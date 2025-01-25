import { TAB } from '$lib/utils/types';
import { writable } from 'svelte/store';

export const activeTab = writable(TAB.BOOKINGS);
