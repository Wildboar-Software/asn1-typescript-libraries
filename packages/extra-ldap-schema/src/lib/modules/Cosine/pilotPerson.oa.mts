/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { id_oc_pilotPerson } from "../Cosine/id-oc-pilotPerson.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { textEncodedORAddress } from "../Cosine/textEncodedORAddress.oa.mjs";
import { rfc822Mailbox } from "../Cosine/rfc822Mailbox.oa.mjs";
import { favouriteDrink } from "../Cosine/favouriteDrink.oa.mjs";
import { roomNumber } from "../Cosine/roomNumber.oa.mjs";
import { userClass } from "../Cosine/userClass.oa.mjs";
import { homeTelephoneNumber } from "../Cosine/homeTelephoneNumber.oa.mjs";
import { homePostalAddress } from "../Cosine/homePostalAddress.oa.mjs";
import { secretary } from "../Cosine/secretary.oa.mjs";
import { personalTitle } from "../Cosine/personalTitle.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { janetMailbox } from "../Cosine/janetMailbox.oa.mjs";
import { mobileTelephoneNumber } from "../Cosine/mobileTelephoneNumber.oa.mjs";
import { pagerTelephoneNumber } from "../Cosine/pagerTelephoneNumber.oa.mjs";
import { organizationalStatus } from "../Cosine/organizationalStatus.oa.mjs";
import { mailPreferenceOption } from "../Cosine/mailPreferenceOption.oa.mjs";


/**
 * @summary pilotPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotPerson OBJECT-CLASS ::= {
 *     SUBCLASS OF     {person}
 *     KIND            structural
 *     MAY CONTAIN {
 *         uid
 *         | textEncodedORAddress
 *         | rfc822Mailbox
 *         | favouriteDrink
 *         | roomNumber
 *         | userClass
 *         | homeTelephoneNumber
 *         | homePostalAddress
 *         | secretary
 *         | personalTitle
 *         | preferredDeliveryMethod
 *         | businessCategory
 *         | janetMailbox
 *         -- | otherMailbox
 *         | mobileTelephoneNumber
 *         | pagerTelephoneNumber
 *         | organizationalStatus
 *         | mailPreferenceOption
 *         -- | personalSignature
 *     }
 *     LDAP-NAME       {"pilotPerson", "newPilotPerson"}
 *     ID              id-oc-pilotPerson
 * }
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
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uid, textEncodedORAddress, rfc822Mailbox, favouriteDrink, roomNumber, userClass, homeTelephoneNumber, homePostalAddress, secretary, personalTitle, preferredDeliveryMethod, businessCategory, janetMailbox, mobileTelephoneNumber, pagerTelephoneNumber, organizationalStatus, mailPreferenceOption, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotPerson", "newPilotPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pilotPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

