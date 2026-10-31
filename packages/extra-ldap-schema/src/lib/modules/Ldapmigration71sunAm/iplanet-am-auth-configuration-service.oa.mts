/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_iplanet_am_auth_configuration_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-auth-configuration-service.va.mjs";


/**
 * @summary iplanet_am_auth_configuration_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-auth-configuration-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-auth-configuration
 *                               | iplanet-am-auth-login-success-url
 *                               | iplanet-am-auth-login-failure-url
 *                               | iplanet-am-auth-post-login-process-class }
 *   LDAP-NAME                 {"iplanet-am-auth-configuration-service"}
 *   LDAP-DESC                 "Authentication Configuration Service OC"
 *   ID                        id-oc-iplanet-am-auth-configuration-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_auth_configuration_service: OBJECT_CLASS = undefined;

/* eslint-enable */
