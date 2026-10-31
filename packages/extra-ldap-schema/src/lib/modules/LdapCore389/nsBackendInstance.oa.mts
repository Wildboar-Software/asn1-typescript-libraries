/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsBackendInstance } from "../LdapCore389/id-oc-nsBackendInstance.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary nsBackendInstance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsBackendInstance OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   LDAP-NAME                 {"nsBackendInstance"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsBackendInstance }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsBackendInstance: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsBackendInstance"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsBackendInstance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
