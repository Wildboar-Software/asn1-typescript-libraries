/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { id_oc_pilotPerson } from "../LdapSchema2ldifCosine/id-oc-pilotPerson.va.mjs";

import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { textEncodedORAddress } from "../LdapSchema2ldifCosine/textEncodedORAddress.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { drink } from "../LdapSchema2ldifCosine/drink.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { userClass } from "../LdapSchema2ldifCosine/userClass.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { homePostalAddress } from "../LdapSchema2ldifCosine/homePostalAddress.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { personalTitle } from "../LdapSchema2ldifCosine/personalTitle.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { janetMailbox } from "../LdapSchema2ldifCosine/janetMailbox.oa.mjs";
import { otherMailbox } from "../LdapSchema2ldifCosine/otherMailbox.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { organizationalStatus } from "../LdapSchema2ldifCosine/organizationalStatus.oa.mjs";
import { mailPreferenceOption } from "../LdapSchema2ldifCosine/mailPreferenceOption.oa.mjs";
import { personalSignature } from "../LdapSchema2ldifCosine/personalSignature.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ person, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uid, textEncodedORAddress, mail, drink, roomNumber, userClass, homePhone, homePostalAddress, secretary, personalTitle, preferredDeliveryMethod, businessCategory, janetMailbox, otherMailbox, mobile, pager, organizationalStatus, mailPreferenceOption, personalSignature, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotPerson", "newPilotPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pilotPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
