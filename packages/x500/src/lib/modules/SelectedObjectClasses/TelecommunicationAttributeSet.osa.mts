/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.mjs";
export { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
export { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.mjs";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
export { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
export { x121Address } from "../SelectedAttributeTypes/x121Address.oa.mjs";

/* START_OF_SYMBOL_DEFINITION TelecommunicationAttributeSet */
/**
 * @summary TelecommunicationAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelecommunicationAttributeSet ATTRIBUTE ::= {facsimileTelephoneNumber |
 *    internationalISDNNumber |
 *    telephoneNumber |
 *    telexNumber |
 *    preferredDeliveryMethod |
 *    destinationIndicator |
 *    registeredAddress |
 *    x121Address}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const TelecommunicationAttributeSet: ATTRIBUTE[] = [
    facsimileTelephoneNumber,
    internationalISDNNumber,
    telephoneNumber,
    telexNumber,
    preferredDeliveryMethod,
    destinationIndicator,
    registeredAddress,
    x121Address,
];
/* END_OF_SYMBOL_DEFINITION TelecommunicationAttributeSet */

/* eslint-enable */
