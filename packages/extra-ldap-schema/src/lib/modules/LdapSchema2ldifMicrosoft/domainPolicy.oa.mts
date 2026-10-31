/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { id_oc_domainPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-domainPolicy.va.mjs";


/**
 * @summary domainPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { authenticationOptions
 *                               | forceLogoff
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | maxRenewAge
 *                               | maxTicketAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | minTicketAge
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | proxyLifetime
 *                               | eFSPolicy
 *                               | publicKeyPolicy
 *                               | domainWidePolicy
 *                               | domainPolicyReference
 *                               | qualityOfService
 *                               | ipsecPolicyReference
 *                               | managedBy
 *                               | domainCAs }
 *   LDAP-NAME                 {"domainPolicy"}
 *   ID                        id-oc-domainPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainPolicy: OBJECT_CLASS = undefined;

/* eslint-enable */
