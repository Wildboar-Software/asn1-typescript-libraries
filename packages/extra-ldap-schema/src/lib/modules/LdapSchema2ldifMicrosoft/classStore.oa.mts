/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_classStore } from "../LdapSchema2ldifMicrosoft/id-oc-classStore.va.mjs";


/**
 * @summary classStore
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classStore OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { versionNumber
 *                               | nextLevelStore
 *                               | lastUpdateSequence
 *                               | appSchemaVersion }
 *   LDAP-NAME                 {"classStore"}
 *   ID                        id-oc-classStore }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classStore: OBJECT_CLASS = undefined;

/* eslint-enable */
