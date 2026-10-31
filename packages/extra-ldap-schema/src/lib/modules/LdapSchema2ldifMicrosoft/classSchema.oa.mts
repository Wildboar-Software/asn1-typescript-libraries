/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_classSchema } from "../LdapSchema2ldifMicrosoft/id-oc-classSchema.va.mjs";


/**
 * @summary classSchema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classSchema OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | subClassOf
 *                               | governsID
 *                               | objectClassCategory
 *                               | schemaIDGUID
 *                               | defaultObjectCategory }
 *   MAY CONTAIN               { possSuperiors
 *                               | mustContain
 *                               | mayContain
 *                               | rDNAttID
 *                               | auxiliaryClass
 *                               | lDAPDisplayName
 *                               | schemaFlagsEx
 *                               | systemOnly
 *                               | systemPossSuperiors
 *                               | systemMayContain
 *                               | systemMustContain
 *                               | systemAuxiliaryClass
 *                               | defaultSecurityDescriptor
 *                               | defaultHidingValue
 *                               | classDisplayName
 *                               | isDefunct }
 *   LDAP-NAME                 {"classSchema"}
 *   ID                        id-oc-classSchema }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classSchema: OBJECT_CLASS = undefined;

/* eslint-enable */
