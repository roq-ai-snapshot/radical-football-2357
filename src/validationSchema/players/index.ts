import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { performanceDataValidationSchema } from 'validationSchema/performance-data';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  parent: yup.array().of(parentValidationSchema),
  performance_data: yup.array().of(performanceDataValidationSchema),
});
