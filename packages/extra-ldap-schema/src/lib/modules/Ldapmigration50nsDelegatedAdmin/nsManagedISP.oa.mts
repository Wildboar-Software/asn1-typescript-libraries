/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { nsNumDomains } from "../Ldapmigration50nsDelegatedAdmin/nsNumDomains.oa.mjs";
// export { id_oc_nsManagedISP } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedISP.va.mjs";


/**
 * @summary nsManagedISP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedISP OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumDomains }
 *   LDAP-NAME                 {"nsManagedISP"}
 *   LDAP-DESC                 "Delegated Admin marker for hosted root"
 *   ID                        id-oc-nsManagedISP }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedISP: OBJECT_CLASS = undefined;

/* eslint-enable */
