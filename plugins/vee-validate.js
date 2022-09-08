import { extend } from "vee-validate";
import { required, email, confirmed, alpha,  } from "vee-validate/dist/rules";
extend('min', {
    validate(value, args) {
      return value.length >= args.length;
    },
    params: ['length']
  });
extend("required", {
    validate(value) {
        return {
          required: true,
          valid: ['', null, undefined].indexOf(value) === -1
        };
        
      },
      message: 'This field is required',
      computesRequired: true
      
});
extend('email', email);
extend('confirmed', confirmed);
extend('alpha', alpha);


