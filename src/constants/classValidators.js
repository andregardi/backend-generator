//https://github.com/typestack/class-validator#validation-decorators
const commonValidations = [
  { name: "@IsDefined", param: "value: any" },
  { name: "@IsOptional", param: "" },
  { name: "@Equals", param: "comparison: any" },
  { name: "@NotEquals", param: "comparison: any" },
  { name: "@IsEmpty", param: "" },
  { name: "@IsNotEmpty", param: "" },
  { name: "@IsIn", param: "values: any[]" },
  { name: "@IsNotIn", param: "values: any[]" }
];

const typeValidations = [
  { name: "@IsBoolean", param: "" },
  { name: "@IsDate", param: "" },
  { name: "@IsString", param: "" },
  { name: "@IsNumber", param: "options: IsNumberOptions" },
  { name: "@IsInt", param: "" },
  { name: "@IsArray", param: "" },
  { name: "@IsEnum", param: "entity: object" }
];

const numbeValidations = [
  { name: "@IsDivisibleBy", param: "num: number" },
  { name: "@IsPositive", param: "" },
  { name: "@IsNegative", param: "" },
  { name: "@Min", param: "min: number" },
  { name: "@Max", param: "max: number" }
];

const dateValidations = [
  { name: "@MinDate", param: "date: Date" },
  { name: "@MaxDate", param: "date: Date" }
];

const stringTypeValidations = [
  { name: "@IsBooleanString", param: "" },
  { name: "@IsDateString", param: "" },
  { name: "@IsNumberString", param: "" }
];

const stringValidations = [
  { name: "@Contains", param: "seed: string" },
  { name: "@NotContains", param: "seed: string" },
  { name: "@IsAlpha", param: "" },
  { name: "@IsAlphanumeric", param: "" },
  { name: "@IsAscii", param: "" },
  { name: "@IsBase64", param: "" },
  { name: "@IsByteLength", param: "min: number, max?: number" },
  { name: "@IsCreditCard", param: "" },
  { name: "@IsCurrency", param: "options?: IsCurrencyOptions" },
  { name: "@IsEmail", param: "options?: IsEmailOptions" },
  { name: "@IsFQDN", param: "options?: IsFQDNOptions" },
  { name: "@IsFullWidth", param: "" },
  { name: "@IsHalfWidth", param: "" },
  { name: "@IsVariableWidth", param: "" },
  { name: "@IsHexColor", param: "" },
  { name: "@IsHexadecimal", param: "" },
  { name: "@IsIP", param: 'version?: "4"|"6"' },
  { name: "@IsISBN", param: 'version?: "10"|"13"' },
  { name: "@IsISIN", param: "" },
  { name: "@IsISO8601", param: "" },
  { name: "@IsJSON", param: "" },
  { name: "@IsLowercase", param: "" },
  { name: "@IsMobilePhone", param: "locale: string" },
  { name: "@IsPhoneNumber", param: "region: string" },
  { name: "@IsMongoId", param: "" },
  { name: "@IsMultibyte", param: "" },
  { name: "@IsNumberString", param: "" },
  { name: "@IsSurrogatePair", param: "" },
  { name: "@IsUrl", param: "options?: IsURLOptions" },
  { name: "@IsUUID", param: 'version?: : "3"|"4"|"5"' },
  { name: "@IsUppercase", param: "" },
  { name: "@Length", param: "min: number, max?: number" },
  { name: "@MinLength", param: "min: number" },
  { name: "@MaxLength", param: "max: number" },
  { name: "@Matches", param: "pattern: RegExp, modifiers?: string" },
  { name: "@IsMilitaryTime", param: "" }
];

const arrayValidations = [
  { name: "@ArrayContains", param: "values: any[]" },
  { name: "@ArrayNotContains", param: "values: any[]" },
  { name: "@ArrayNotEmpty", param: "" },
  { name: "@ArrayMinSize", param: "min: number" },
  { name: "@ArrayMaxSize", param: "max: number" },
  { name: "@ArrayUnique", param: "" }
];

const objectValidations = [{ name: "@IsInstance", param: "value: any" }];

export const validationTypesGroups = [
  { label: "Common validation", validationTypes: commonValidations },
  { label: "Type validation", validationTypes: typeValidations },
  { label: "Number validation", validationTypes: numbeValidations },
  { label: "Date validation", validationTypes: dateValidations },
  { label: "String-type validation", validationTypes: stringTypeValidations },
  { label: "String validation", validationTypes: stringValidations },
  { label: "Array validation", validationTypes: arrayValidations },
  { label: "Object validation", validationTypes: objectValidations }
];