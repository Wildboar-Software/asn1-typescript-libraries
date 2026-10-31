/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraUCService } from "../LdapZimbra/id-oc-zimbraUCService.va.mjs";


/**
 * @summary zimbraUCService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraUCService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId
 *                               | zimbraUCProvider }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraCreateTimestamp
 *                               | zimbraUCCallControlURL
 *                               | zimbraUCPresenceSessionId
 *                               | zimbraUCPresenceURL
 *                               | zimbraUCUserURL
 *                               | zimbraUCVoicemailURL }
 *   LDAP-NAME                 {"zimbraUCService"}
 *   LDAP-DESC                 "Unified Communication service in the cluster"
 *   ID                        id-oc-zimbraUCService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraUCService: OBJECT_CLASS = undefined;

/* eslint-enable */
