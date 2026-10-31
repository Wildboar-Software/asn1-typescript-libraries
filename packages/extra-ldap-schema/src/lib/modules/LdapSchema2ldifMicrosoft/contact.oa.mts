/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { notes } from "../MSUser/notes.oa.mjs";
// export { id_oc_contact } from "../LdapSchema2ldifMicrosoft/id-oc-contact.va.mjs";


/**
 * @summary contact
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contact OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalPerson }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { notes }
 *   LDAP-NAME                 {"contact"}
 *   ID                        id-oc-contact }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const contact: OBJECT_CLASS = undefined;

/* eslint-enable */
