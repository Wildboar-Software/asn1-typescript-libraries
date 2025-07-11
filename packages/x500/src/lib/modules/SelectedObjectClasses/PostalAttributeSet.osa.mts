/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
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

/* eslint-enable */
