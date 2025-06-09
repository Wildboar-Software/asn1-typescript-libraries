/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.js";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.js";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.js";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.js";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.js";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.js";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.js";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.js";
export { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.js";
export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.js";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.js";
export { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.js";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.js";
export { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.js";
export { x121Address } from "../SelectedAttributeTypes/x121Address.oa.js";

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
