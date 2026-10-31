/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_ipaAssociation } from "../Ldap60basev2/id-oc-ipaAssociation.va.mjs";


/**
 * @summary ipaAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaAssociation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { ipaUniqueID
 *                               | commonName }
 *   MAY CONTAIN               { memberUser
 *                               | userCategory
 *                               | memberHost
 *                               | hostCategory
 *                               | ipaEnabledFlag
 *                               | description }
 *   LDAP-NAME                 {"ipaAssociation"}
 *   ID                        id-oc-ipaAssociation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaAssociation: OBJECT_CLASS = undefined;

/* eslint-enable */
