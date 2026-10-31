/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsAttributeEncryption } from "../LdapCommon389/id-oc-nsAttributeEncryption.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsEncryptionAlgorithm } from "./nsEncryptionAlgorithm.oa.mjs";

/**
 * @summary nsAttributeEncryption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsAttributeEncryption OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsEncryptionAlgorithm }
 *   LDAP-NAME                 {"nsAttributeEncryption"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsAttributeEncryption }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsAttributeEncryption: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, nsEncryptionAlgorithm] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsAttributeEncryption"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsAttributeEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
