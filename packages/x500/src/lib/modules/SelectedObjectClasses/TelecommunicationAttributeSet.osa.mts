/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa.mjs";
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

/* eslint-enable */
