/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsSchemaPolicy } from "../LdapCore389/id-oc-nsSchemaPolicy.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { schemaUpdateAttributeAccept } from "./schemaUpdateAttributeAccept.oa.mjs";
import { schemaUpdateAttributeReject } from "./schemaUpdateAttributeReject.oa.mjs";
import { schemaUpdateObjectclassAccept } from "./schemaUpdateObjectclassAccept.oa.mjs";
import { schemaUpdateObjectclassReject } from "./schemaUpdateObjectclassReject.oa.mjs";

/**
 * @summary nsSchemaPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsSchemaPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName
 *                               | schemaUpdateObjectclassAccept
 *                               | schemaUpdateObjectclassReject
 *                               | schemaUpdateAttributeAccept
 *                               | schemaUpdateAttributeReject }
 *   LDAP-NAME                 {"nsSchemaPolicy"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsSchemaPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsSchemaPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, schemaUpdateObjectclassAccept, schemaUpdateObjectclassReject, schemaUpdateAttributeAccept, schemaUpdateAttributeReject] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsSchemaPolicy"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSchemaPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
