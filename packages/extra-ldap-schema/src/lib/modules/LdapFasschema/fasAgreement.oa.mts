/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
// export { member } from "../SelectedAttributeTypes/member.oa.mjs";
// export { id_oc_fasAgreement } from "../LdapFasschema/id-oc-fasAgreement.va.mjs";


/**
 * @summary fasAgreement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fasAgreement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MAY CONTAIN               { member }
 *   LDAP-NAME                 {"fasAgreement"}
 *   LDAP-DESC                 "FAS agreement objectclass"
 *   ID                        id-oc-fasAgreement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fasAgreement: OBJECT_CLASS = undefined;

/* eslint-enable */
