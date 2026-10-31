/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_samDomainBase } from "../LdapSchema2ldifMicrosoft/id-oc-samDomainBase.va.mjs";


/**
 * @summary samDomainBase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomainBase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nTSecurityDescriptor
 *                               | creationTime
 *                               | forceLogoff
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | modifiedCountAtLastProm
 *                               | nextRid
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | revision
 *                               | objectSid
 *                               | oEMInformation
 *                               | serverState
 *                               | uASCompat
 *                               | serverRole
 *                               | domainReplica
 *                               | modifiedCount }
 *   LDAP-NAME                 {"samDomainBase"}
 *   ID                        id-oc-samDomainBase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samDomainBase: OBJECT_CLASS = undefined;

/* eslint-enable */
