/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_session_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-session-service.va.mjs";
import { iplanet_am_session_max_session_time } from "../Ldapmigration71sunAm/iplanet-am-session-max-session-time.oa.mjs";
import { iplanet_am_session_max_idle_time } from "../Ldapmigration71sunAm/iplanet-am-session-max-idle-time.oa.mjs";
import { iplanet_am_session_max_caching_time } from "../Ldapmigration71sunAm/iplanet-am-session-max-caching-time.oa.mjs";
import { iplanet_am_session_quota_limit } from "../Ldapmigration71sunAm/iplanet-am-session-quota-limit.oa.mjs";
import { iplanet_am_session_get_valid_sessions } from "../Ldapmigration71sunAm/iplanet-am-session-get-valid-sessions.oa.mjs";
import { iplanet_am_session_destroy_sessions } from "../Ldapmigration71sunAm/iplanet-am-session-destroy-sessions.oa.mjs";
import { iplanet_am_session_add_session_listener_on_all_sessions } from "../Ldapmigration71sunAm/iplanet-am-session-add-session-listener-on-all-sessions.oa.mjs";
import { iplanet_am_session_service_status } from "../Ldapmigration71sunAm/iplanet-am-session-service-status.oa.mjs";
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
const iplanet_am_session_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_session_max_session_time, iplanet_am_session_max_idle_time, iplanet_am_session_max_caching_time, iplanet_am_session_quota_limit, iplanet_am_session_get_valid_sessions, iplanet_am_session_destroy_sessions, iplanet_am_session_add_session_listener_on_all_sessions, iplanet_am_session_service_status, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-session-service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Session Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_session_service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
