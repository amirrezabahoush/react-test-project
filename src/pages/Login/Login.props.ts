type LoginFormItems = 'phoneNumber' | 'password';

export type LoginValues = {
  [P in LoginFormItems]: string;
}