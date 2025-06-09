/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.js";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.js";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.js";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.js";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.js";
export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.js";
export { postalCode } from "../SelectedAttributeTypes/postalCode.oa.js";
export { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.js";
export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.js";

/* START_OF_SYMBOL_DEFINITION PostalAttributeSet */
/**
 * @summary PostalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAttributeSet ATTRIBUTE ::= {physicalDeliveryOfficeName |
 *    postalAddress |
 *    postalCode |
 *    postOfficeBox |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PostalAttributeSet: ATTRIBUTE[] = [
    physicalDeliveryOfficeName,
    postalAddress,
    postalCode,
    postOfficeBox,
    streetAddress,
];
/* END_OF_SYMBOL_DEFINITION PostalAttributeSet */

/* eslint-enable */
