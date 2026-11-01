/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { domain } from "../Cosine/domain.oa.mjs";
import { id_oc_rFC822localPart } from "../Cosine/id-oc-rFC822localPart.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa.mjs";


/**
 * @summary rFC822localPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rFC822localPart OBJECT-CLASS ::= {
 *     SUBCLASS OF     {domain}
 *     KIND            structural
 *     MAY CONTAIN {
 *         commonName
 *         | description
 *         | destinationIndicator
 *         | facsimileTelephoneNumber
 *         | internationalISDNNumber
 *         | physicalDeliveryOfficeName
 *         | postalAddress
 *         | postalCode
 *         | postOfficeBox
 *         | preferredDeliveryMethod
 *         | registeredAddress
 *         | seeAlso
 *         | streetAddress
 *         | surname
 *         | telephoneNumber
 *         -- | teletexTerminalIdentifier
 *         | telexNumber
 *         | x121Address
 *     }
 *     LDAP-NAME       {"rFC822localPart"}
 *     ID              id-oc-rFC822localPart
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rFC822localPart: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ domain, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, destinationIndicator, facsimileTelephoneNumber, internationalISDNNumber, physicalDeliveryOfficeName, postalAddress, postalCode, postOfficeBox, preferredDeliveryMethod, registeredAddress, seeAlso, streetAddress, surname, telephoneNumber, telexNumber, x121Address, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rFC822localPart" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rFC822localPart /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

