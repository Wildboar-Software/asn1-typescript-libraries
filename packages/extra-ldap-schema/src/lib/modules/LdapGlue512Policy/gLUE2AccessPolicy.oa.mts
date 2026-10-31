/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gLUE2AccessPolicyEndpointForeignKey } from "../LdapGlue512Policy/gLUE2AccessPolicyEndpointForeignKey.oa.mjs";
import { id_oc_gLUE2AccessPolicy } from "../LdapGlue512Policy/id-oc-gLUE2AccessPolicy.va.mjs";

/**
 * @summary gLUE2AccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2AccessPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2AccessPolicyEndpointForeignKey }
 *   LDAP-NAME                 {"GLUE2AccessPolicy"}
 *   LDAP-DESC                 "Statements, rules or assertions that provide coarse-granularity information about the authorization of access by groups of actors to an Endpoint"
 *   ID                        id-oc-gLUE2AccessPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2AccessPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2AccessPolicyEndpointForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2AccessPolicy"],
    "&ldapDesc": "Statements, rules or assertions that provide coarse-granularity information about the authorization of access by groups of actors to an Endpoint" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2AccessPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
