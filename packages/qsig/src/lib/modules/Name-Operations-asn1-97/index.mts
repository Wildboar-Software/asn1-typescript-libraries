/**
 * @module
 * @description
 *
 * QSIG name identification (ECMA-164, 4th edition, December 2001). Calling Name
 * Identification Presentation gives the called user the calling user's name.
 * Connected Name Identification Presentation gives the calling user the name of
 * the user who answers and, optionally, the alerting user's name and the name
 * of a busy called user (ECMA-163 §6.1.1, §7.1.1; ECMA-164 §7.1, §8.1). This
 * module is the X.680 (asn1-97) coding of those notifications.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-163/
 */
export * from "./CharacterSet.ta.mjs";
export * from "./Name-Operations.osa.mjs";
export * from "./Name.ta.mjs";
export * from "./NameArg-nameSequence.ta.mjs";
export * from "./NameArg.ta.mjs";
export * from "./NameData.ta.mjs";
export * from "./NameExtension.ta.mjs";
export * from "./NameExtensionSet.osa.mjs";
export * from "./NameNotAvailable.ta.mjs";
export * from "./NamePresentationAllowed.ta.mjs";
export * from "./NamePresentationRestricted.ta.mjs";
export * from "./NameSet.ta.mjs";
export * from "./busyName.oa.mjs";
export * from "./calledName.oa.mjs";
export * from "./callingName.oa.mjs";
export * from "./connectedName.oa.mjs";
