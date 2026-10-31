/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dnaSharedConfig } from "../LdapDnaPlugin/id-oc-dnaSharedConfig.va.mjs";


/**
 * @summary dnaSharedConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnaSharedConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dnaHostname
 *                               | dnaPortNum
 *                               | dnaSecurePortNum
 *                               | dnaRemoteBindMethod
 *                               | dnaRemoteConnProtocol
 *                               | dnaRemainingValues }
 *   LDAP-NAME                 {"dnaSharedConfig"}
 *   LDAP-DESC                 "DNA Shared Configuration"
 *   ID                        id-oc-dnaSharedConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnaSharedConfig: OBJECT_CLASS = undefined;

/* eslint-enable */
