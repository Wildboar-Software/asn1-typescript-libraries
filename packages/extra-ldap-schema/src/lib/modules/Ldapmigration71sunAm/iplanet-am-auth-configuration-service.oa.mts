/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_auth_configuration_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-auth-configuration-service.va.mjs";
import { iplanet_am_auth_configuration } from "./iplanet-am-auth-configuration.oa.mjs";
import { iplanet_am_auth_login_failure_url } from "./iplanet-am-auth-login-failure-url.oa.mjs";
import { iplanet_am_auth_login_success_url } from "./iplanet-am-auth-login-success-url.oa.mjs";
import { iplanet_am_auth_post_login_process_class } from "./iplanet-am-auth-post-login-process-class.oa.mjs";

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
const iplanet_am_auth_configuration_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iplanet_am_auth_configuration, iplanet_am_auth_login_success_url, iplanet_am_auth_login_failure_url, iplanet_am_auth_post_login_process_class] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanet-am-auth-configuration-service"],
    "&ldapDesc": "Authentication Configuration Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_auth_configuration_service /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
