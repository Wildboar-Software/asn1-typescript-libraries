/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_groupOfMailEnhancedUniqueNames } from "../Ldapmigration50nsMail/id-oc-groupOfMailEnhancedUniqueNames.va.mjs";


/**
 * @summary groupOfMailEnhancedUniqueNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfMailEnhancedUniqueNames OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass
 *                               | commonName }
 *   MAY CONTAIN               { businessCategory
 *                               | description
 *                               | mailEnhancedUniqueMember
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | owner
 *                               | seeAlso }
 *   LDAP-NAME                 {"groupOfMailEnhancedUniqueNames"}
 *   ID                        id-oc-groupOfMailEnhancedUniqueNames }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfMailEnhancedUniqueNames: OBJECT_CLASS = undefined;

/* eslint-enable */
