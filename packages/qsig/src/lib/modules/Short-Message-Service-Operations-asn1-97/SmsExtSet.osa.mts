/* eslint-disable */
import { EXTENSION } from "../Manufacturer-specific-service-extension-class-asn1-97/EXTENSION.oca.mjs";

/**
 * @summary SmsExtSet
 * @description
 *
 * Extension set for SMS manufacturer data (ECMA-325 §6.3.1). The 1st edition
 * assigns no extensions. Context tags [1] and [2] on `SmsExtension` are why
 * other optional elements in this module use different tags (errata of 25
 * September 2001).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsExtSet EXTENSION ::= {...}
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SmsExtSet: (EXTENSION)[] = [];

/* eslint-enable */
