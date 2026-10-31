/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { person } from "../SelectedObjectClasses/person.oa.mjs";
// export { id_oc_pilotPerson } from "../LdapSchema2ldifCosine/id-oc-pilotPerson.va.mjs";


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
const pilotPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
