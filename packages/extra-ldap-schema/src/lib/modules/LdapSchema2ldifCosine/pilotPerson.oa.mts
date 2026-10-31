/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_pilotPerson } from "../LdapSchema2ldifCosine/id-oc-pilotPerson.va.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { drink } from "./drink.oa.mjs";
import { homePhone } from "./homePhone.oa.mjs";
import { homePostalAddress } from "./homePostalAddress.oa.mjs";
import { janetMailbox } from "./janetMailbox.oa.mjs";
import { mailPreferenceOption } from "./mailPreferenceOption.oa.mjs";
import { mobile } from "./mobile.oa.mjs";
import { organizationalStatus } from "./organizationalStatus.oa.mjs";
import { otherMailbox } from "./otherMailbox.oa.mjs";
import { pager } from "./pager.oa.mjs";
import { personalSignature } from "./personalSignature.oa.mjs";
import { personalTitle } from "./personalTitle.oa.mjs";
import { roomNumber } from "./roomNumber.oa.mjs";
import { secretary } from "./secretary.oa.mjs";
import { textEncodedORAddress } from "./textEncodedORAddress.oa.mjs";
import { userClass } from "./userClass.oa.mjs";

/**
 * @summary pilotPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { person }
 *   MAY CONTAIN               { uid
 *                               | textEncodedORAddress
 *                               | mail
 *                               | drink
 *                               | roomNumber
 *                               | userClass
 *                               | homePhone
 *                               | homePostalAddress
 *                               | secretary
 *                               | personalTitle
 *                               | preferredDeliveryMethod
 *                               | businessCategory
 *                               | janetMailbox
 *                               | otherMailbox
 *                               | mobile
 *                               | pager
 *                               | organizationalStatus
 *                               | mailPreferenceOption
 *                               | personalSignature }
 *   LDAP-NAME                 {"pilotPerson", "newPilotPerson"}
 *   ID                        id-oc-pilotPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pilotPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [person] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [uid, textEncodedORAddress, mail, drink, roomNumber, userClass, homePhone, homePostalAddress, secretary, personalTitle, preferredDeliveryMethod, businessCategory, janetMailbox, otherMailbox, mobile, pager, organizationalStatus, mailPreferenceOption, personalSignature] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pilotPerson", "newPilotPerson"],
    "&id": id_oc_pilotPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
