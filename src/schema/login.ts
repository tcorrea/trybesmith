import Joi from 'joi';

const loginSchema = {
  login: (body: { username: string, password: string }) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error(error.message);
      e.name = 'BAD_REQUEST';
      throw e;
    }
  },
};
export default loginSchema;
