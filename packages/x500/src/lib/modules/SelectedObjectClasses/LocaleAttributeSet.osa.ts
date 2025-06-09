/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.js";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.js";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { localityName } from "../SelectedAttributeTypes/localityName.oa.js";
export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.js";
export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";

/* START_OF_SYMBOL_DEFINITION LocaleAttributeSet */
/**
 * @summary LocaleAttributeSet
 * @description
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
/* END_OF_SYMBOL_DEFINITION LocaleAttributeSet */

/* eslint-enable */
