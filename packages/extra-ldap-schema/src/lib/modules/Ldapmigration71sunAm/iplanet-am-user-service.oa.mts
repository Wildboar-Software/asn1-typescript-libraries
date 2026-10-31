/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_iplanet_am_user_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-user-service.va.mjs";


/**
 * @summary iplanet_am_user_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-user-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-user-auth-modules
 *                               | iplanet-am-user-login-status
 *                               | iplanet-am-user-admin-start-dn
 *                               | iplanet-am-user-auth-config
 *                               | iplanet-am-user-alias-list
 *                               | iplanet-am-user-success-url
 *                               | iplanet-am-user-failure-url
 *                               | iplanet-am-user-federation-info-key
 *                               | iplanet-am-user-federation-info
 *                               | iplanet-am-user-password-reset-options
 *                               | iplanet-am-user-password-reset-question-answer
 *                               | iplanet-am-user-password-reset-force-reset
 *                               | sunIdentityServerDiscoEntries
 *                               | sunIdentityMSISDNNumber }
 *   LDAP-NAME                 {"iplanet-am-user-service"}
 *   LDAP-DESC                 "User Service OC"
 *   ID                        id-oc-iplanet-am-user-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_user_service: OBJECT_CLASS = undefined;

/* eslint-enable */
