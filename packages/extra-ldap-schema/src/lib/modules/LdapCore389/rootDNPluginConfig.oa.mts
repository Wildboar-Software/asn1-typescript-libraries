/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_rootDNPluginConfig } from "../LdapCore389/id-oc-rootDNPluginConfig.va.mjs";
import { rootdn_open_time } from "../LdapCore389/rootdn-open-time.oa.mjs";
import { rootdn_close_time } from "../LdapCore389/rootdn-close-time.oa.mjs";
import { rootdn_days_allowed } from "../LdapCore389/rootdn-days-allowed.oa.mjs";
import { rootdn_allow_host } from "../LdapCore389/rootdn-allow-host.oa.mjs";
import { rootdn_deny_host } from "../LdapCore389/rootdn-deny-host.oa.mjs";
import { rootdn_allow_ip } from "../LdapCore389/rootdn-allow-ip.oa.mjs";
import { rootdn_deny_ip } from "../LdapCore389/rootdn-deny-ip.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rootdn_open_time, rootdn_close_time, rootdn_days_allowed, rootdn_allow_host, rootdn_deny_host, rootdn_allow_ip, rootdn_deny_ip, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rootDNPluginConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rootDNPluginConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

