/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_samDomain } from "../LdapSchema2ldifMicrosoft/id-oc-samDomain.va.mjs";


/**
 * @summary samDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description
 *                               | cACertificate
 *                               | builtinCreationTime
 *                               | builtinModifiedCount
 *                               | creationTime
 *                               | domainPolicyObject
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lSACreationTime
 *                               | lSAModifiedCount
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | modifiedCountAtLastProm
 *                               | nETBIOSName
 *                               | nextRid
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | privateKey
 *                               | replicaSource
 *                               | controlAccessRights
 *                               | auditingPolicy
 *                               | eFSPolicy
 *                               | desktopProfile
 *                               | nTMixedDomain
 *                               | rIDManagerReference
 *                               | treeName
 *                               | pekList
 *                               | pekKeyChangeInterval
 *                               | gPLink
 *                               | gPOptions
 *                               | ms-DS-MachineAccountQuota }
 *   LDAP-NAME                 {"samDomain"}
 *   ID                        id-oc-samDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
