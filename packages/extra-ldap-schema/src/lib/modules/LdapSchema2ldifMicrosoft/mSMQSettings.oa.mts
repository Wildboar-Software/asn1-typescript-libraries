/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mSMQSettings } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQSettings.va.mjs";


/**
 * @summary mSMQSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQOwnerID
 *                               | mSMQServices
 *                               | mSMQQMID
 *                               | mSMQMigrated
 *                               | mSMQNt4Flags
 *                               | mSMQSiteName
 *                               | mSMQRoutingService
 *                               | mSMQDsService
 *                               | mSMQDependentClientService }
 *   LDAP-NAME                 {"mSMQSettings"}
 *   ID                        id-oc-mSMQSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQSettings: OBJECT_CLASS = undefined;

/* eslint-enable */
