/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_samServer } from "../LdapSchema2ldifMicrosoft/id-oc-samServer.va.mjs";
import { securityObject } from "../LdapSchema2ldifMicrosoft/securityObject.oa.mjs";

/**
 * @summary samServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { securityObject }
 *   LDAP-NAME                 {"samServer"}
 *   ID                        id-oc-samServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [securityObject] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["samServer"],
    "&id": id_oc_samServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
