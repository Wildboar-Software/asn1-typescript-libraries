/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_web_agent_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-web-agent-service.va.mjs";

import { iplanet_am_web_agent_access_allow_list } from "../Ldapmigration71sunAm/iplanet-am-web-agent-access-allow-list.oa.mjs";
import { iplanet_am_web_agent_access_deny_list } from "../Ldapmigration71sunAm/iplanet-am-web-agent-access-deny-list.oa.mjs";
import { iplanet_am_web_agent_access_not_enforced_list } from "../Ldapmigration71sunAm/iplanet-am-web-agent-access-not-enforced-list.oa.mjs";
import { iplanet_am_web_agent_service_status } from "../Ldapmigration71sunAm/iplanet-am-web-agent-service-status.oa.mjs";
/**
 * @summary iplanet_am_web_agent_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-web-agent-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-web-agent-access-allow-list
 *                               | iplanet-am-web-agent-access-deny-list
 *                               | iplanet-am-web-agent-access-not-enforced-list
 *                               | iplanet-am-web-agent-service-status }
 *   LDAP-NAME                 {"iplanet-am-web-agent-service"}
 *   LDAP-DESC                 "Web Agent Service OC"
 *   ID                        id-oc-iplanet-am-web-agent-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_web_agent_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_web_agent_access_allow_list, iplanet_am_web_agent_access_deny_list, iplanet_am_web_agent_access_not_enforced_list, iplanet_am_web_agent_service_status, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-web-agent-service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Web Agent Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_web_agent_service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
