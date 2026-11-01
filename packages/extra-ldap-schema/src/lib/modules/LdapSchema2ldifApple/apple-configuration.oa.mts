/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_configuration } from "../LdapSchema2ldifApple/id-oc-apple-configuration.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { apple_config_realname } from "../LdapSchema2ldifApple/apple-config-realname.oa.mjs";
import { apple_data_stamp } from "../LdapSchema2ldifApple/apple-data-stamp.oa.mjs";
import { apple_password_server_location } from "../LdapSchema2ldifApple/apple-password-server-location.oa.mjs";
import { apple_password_server_list } from "../LdapSchema2ldifApple/apple-password-server-list.oa.mjs";
import { apple_ldap_replica } from "../LdapSchema2ldifApple/apple-ldap-replica.oa.mjs";
import { apple_ldap_writable_replica } from "../LdapSchema2ldifApple/apple-ldap-writable-replica.oa.mjs";
import { apple_keyword } from "../LdapSchema2ldifApple/apple-keyword.oa.mjs";
import { apple_kdc_authkey } from "../LdapSchema2ldifApple/apple-kdc-authkey.oa.mjs";
import { apple_kdc_configdata } from "../LdapSchema2ldifApple/apple-kdc-configdata.oa.mjs";
import { apple_xmlplist } from "../LdapSchema2ldifApple/apple-xmlplist.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
// export { id_oc_apple_configuration } from "../LdapSchema2ldifApple/id-oc-apple-configuration.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, apple_config_realname, apple_data_stamp, apple_password_server_location, apple_password_server_list, apple_ldap_replica, apple_ldap_writable_replica, apple_keyword, apple_kdc_authkey, apple_kdc_configdata, apple_xmlplist, ttl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-configuration" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "configuration" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_configuration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
