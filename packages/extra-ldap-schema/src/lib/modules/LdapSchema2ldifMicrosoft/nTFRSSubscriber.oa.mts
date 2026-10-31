/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nTFRSSubscriber } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriber.va.mjs";


/**
 * @summary nTFRSSubscriber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSubscriber OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { fRSRootPath
 *                               | fRSStagingPath }
 *   MAY CONTAIN               { schedule
 *                               | fRSUpdateTimeout
 *                               | fRSFaultCondition
 *                               | fRSServiceCommand
 *                               | fRSExtensions
 *                               | fRSFlags
 *                               | fRSMemberReference
 *                               | fRSServiceCommandStatus
 *                               | fRSTimeLastCommand
 *                               | fRSTimeLastConfigChange }
 *   LDAP-NAME                 {"nTFRSSubscriber"}
 *   ID                        id-oc-nTFRSSubscriber }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSubscriber: OBJECT_CLASS = undefined;

/* eslint-enable */
