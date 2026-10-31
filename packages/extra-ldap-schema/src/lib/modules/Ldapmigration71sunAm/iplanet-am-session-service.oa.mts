/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_iplanet_am_session_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-session-service.va.mjs";


/**
 * @summary iplanet_am_session_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-session-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-session-max-session-time
 *                               | iplanet-am-session-max-idle-time
 *                               | iplanet-am-session-max-caching-time
 *                               | iplanet-am-session-quota-limit
 *                               | iplanet-am-session-get-valid-sessions
 *                               | iplanet-am-session-destroy-sessions
 *                               | iplanet-am-session-add-session-listener-on-all-sessions
 *                               | iplanet-am-session-service-status }
 *   LDAP-NAME                 {"iplanet-am-session-service"}
 *   LDAP-DESC                 "Session Service OC"
 *   ID                        id-oc-iplanet-am-session-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_session_service: OBJECT_CLASS = undefined;

/* eslint-enable */
