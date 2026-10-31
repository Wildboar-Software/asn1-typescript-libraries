/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mSMQConfiguration } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQConfiguration.va.mjs";


/**
 * @summary mSMQConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQQuota
 *                               | mSMQJournalQuota
 *                               | mSMQOwnerID
 *                               | mSMQSites
 *                               | mSMQOutRoutingServers
 *                               | mSMQInRoutingServers
 *                               | mSMQServiceType
 *                               | mSMQComputerType
 *                               | mSMQForeign
 *                               | mSMQOSType
 *                               | mSMQEncryptKey
 *                               | mSMQSignKey
 *                               | mSMQDependentClientServices
 *                               | mSMQRoutingServices
 *                               | mSMQDsServices }
 *   LDAP-NAME                 {"mSMQConfiguration"}
 *   ID                        id-oc-mSMQConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQConfiguration: OBJECT_CLASS = undefined;

/* eslint-enable */
