import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../primitives/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width = "100%", ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
