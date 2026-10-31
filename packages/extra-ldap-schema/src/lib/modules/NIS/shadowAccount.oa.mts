/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";


/**
 * @summary shadowAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {uid}
 *     MAY CONTAIN        {
 *         userPassword
 *         | shadowLastChange
 *         | shadowMin
 *         | shadowMax
 *         | shadowWarning
 *         | shadowInactive
 *         | shadowExpire
 *         | shadowFlag
 *         | description
 *     }
 *     LDAP-NAME        {"shadowAccount"}
 *     LDAP-DESC        "Additional attributes for shadow passwords"
 *     ID                { id-nis-oc 1 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const shadowAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
