/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
import { id_oc_apple_configuration } from "../LdapSchema2ldifApple/id-oc-apple-configuration.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { apple_config_realname } from "./apple-config-realname.oa.mjs";
import { apple_data_stamp } from "./apple-data-stamp.oa.mjs";
import { apple_kdc_authkey } from "./apple-kdc-authkey.oa.mjs";
import { apple_kdc_configdata } from "./apple-kdc-configdata.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_ldap_replica } from "./apple-ldap-replica.oa.mjs";
import { apple_ldap_writable_replica } from "./apple-ldap-writable-replica.oa.mjs";
import { apple_password_server_list } from "./apple-password-server-list.oa.mjs";
import { apple_password_server_location } from "./apple-password-server-location.oa.mjs";
import { apple_xmlplist } from "./apple-xmlplist.oa.mjs";

/**
 * @summary apple_configuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-configuration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName
 *                               | apple-config-realname
 *                               | apple-data-stamp
 *                               | apple-password-server-location
 *                               | apple-password-server-list
 *                               | apple-ldap-replica
 *                               | apple-ldap-writable-replica
 *                               | apple-keyword
 *                               | apple-kdc-authkey
 *                               | apple-kdc-configdata
 *                               | apple-xmlplist
 *                               | ttl }
 *   LDAP-NAME                 {"apple-configuration"}
 *   LDAP-DESC                 "configuration"
 *   ID                        id-oc-apple-configuration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_configuration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, apple_config_realname, apple_data_stamp, apple_password_server_location, apple_password_server_list, apple_ldap_replica, apple_ldap_writable_replica, apple_keyword, apple_kdc_authkey, apple_kdc_configdata, apple_xmlplist, ttl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-configuration"],
    "&ldapDesc": "configuration" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_configuration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
