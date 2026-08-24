/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
/**
 * @summary LocaleAttributeSet
 * @description
 *
 * Locale of an object, mainly for search. `streetAddress` is also in
 * `PostalAttributeSet`. For `locality`, X.521 additionally requires at
 * least one of `localityName` or `stateOrProvinceName` (not expressed in
 * that object class ASN.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocaleAttributeSet ATTRIBUTE ::= {localityName |
 *    stateOrProvinceName |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const LocaleAttributeSet: ATTRIBUTE[] = [
    localityName,
    stateOrProvinceName,
    streetAddress,
];

/* eslint-enable */
