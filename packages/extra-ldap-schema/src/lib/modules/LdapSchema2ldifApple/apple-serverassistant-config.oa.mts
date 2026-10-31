/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { apple_xmlplist } from "../LdapSchema2ldifApple/apple-xmlplist.oa.mjs";
import { id_oc_apple_serverassistant_config } from "../LdapSchema2ldifApple/id-oc-apple-serverassistant-config.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary apple_serverassistant_config
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-serverassistant-config OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-xmlplist }
 *   LDAP-NAME                 {"apple-serverassistant-config"}
 *   ID                        id-oc-apple-serverassistant-config }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_serverassistant_config: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [apple_xmlplist] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-serverassistant-config"],
    "&id": id_oc_apple_serverassistant_config /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
