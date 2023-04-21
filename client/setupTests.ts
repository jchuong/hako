import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('$app/environment', () => ({
	browser: false,
	dev: true,
	building: false,
	version: 'any'
}));
