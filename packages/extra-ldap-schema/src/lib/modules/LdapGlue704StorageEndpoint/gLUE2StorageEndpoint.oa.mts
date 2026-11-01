/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
import { gLUE2StorageEndpointStorageServiceForeignKey } from "../LdapGlue704StorageEndpoint/gLUE2StorageEndpointStorageServiceForeignKey.oa.mjs";
import { id_oc_gLUE2StorageEndpoint } from "../LdapGlue704StorageEndpoint/id-oc-gLUE2StorageEndpoint.va.mjs";

/**
 * @summary gLUE2StorageEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageEndpoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Endpoint }
 *   MAY CONTAIN               { gLUE2StorageEndpointStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageEndpoint"}
 *   LDAP-DESC                 "A network location having a well-defined interface and exposing the service functionalities"
 *   ID                        id-oc-gLUE2StorageEndpoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageEndpoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Endpoint, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2StorageEndpointStorageServiceForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2StorageEndpoint" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A network location having a well-defined interface and exposing the service functionalities" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2StorageEndpoint /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
