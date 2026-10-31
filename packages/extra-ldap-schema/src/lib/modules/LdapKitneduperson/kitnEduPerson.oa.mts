/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { kitnEduPersonRegId } from "../LdapKitneduperson/kitnEduPersonRegId.oa.mjs";
// export { id_oc_kitnEduPerson } from "../LdapKitneduperson/id-oc-kitnEduPerson.va.mjs";


/**
 * @summary kitnEduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kitnEduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { kitnEduPersonRegId }
 *   LDAP-NAME                 {"kitnEduPerson"}
 *   LDAP-DESC                 "KITN Edu Person objectclass"
 *   ID                        id-oc-kitnEduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kitnEduPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
