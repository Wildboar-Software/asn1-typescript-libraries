/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rootDNPluginConfig } from "../LdapCore389/id-oc-rootDNPluginConfig.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { rootdn_allow_host } from "./rootdn-allow-host.oa.mjs";
import { rootdn_allow_ip } from "./rootdn-allow-ip.oa.mjs";
import { rootdn_close_time } from "./rootdn-close-time.oa.mjs";
import { rootdn_days_allowed } from "./rootdn-days-allowed.oa.mjs";
import { rootdn_deny_host } from "./rootdn-deny-host.oa.mjs";
import { rootdn_deny_ip } from "./rootdn-deny-ip.oa.mjs";
import { rootdn_open_time } from "./rootdn-open-time.oa.mjs";

/**
 * @summary rootDNPluginConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rootDNPluginConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { rootdn-open-time
 *                               | rootdn-close-time
 *                               | rootdn-days-allowed
 *                               | rootdn-allow-host
 *                               | rootdn-deny-host
 *                               | rootdn-allow-ip
 *                               | rootdn-deny-ip }
 *   LDAP-NAME                 {"rootDNPluginConfig"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-rootDNPluginConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rootDNPluginConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rootdn_open_time, rootdn_close_time, rootdn_days_allowed, rootdn_allow_host, rootdn_deny_host, rootdn_allow_ip, rootdn_deny_ip] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rootDNPluginConfig"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rootDNPluginConfig /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
