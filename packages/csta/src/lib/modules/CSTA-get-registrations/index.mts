/**
 * @description
 *
 * Get Registrations (ECMA-269 §14.2.5 / ECMA-285 §12.2.5).
 * CF obtains System, Routeing, I/O, and Escape registrations on
 * this association. The SF returns either `registrationList` in
 * the ack or segmented Registration Info (`serviceCrossRefID`);
 * both mechanisms cannot be used at once.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getRegistrations.oa.mjs";
export * from "./GetRegistrationsArg.ta.mjs";
export * from "./GetRegistrationsRes-crossRefIDorRegistrationData.ta.mjs";
export * from "./GetRegistrationsRes.ta.mjs";
