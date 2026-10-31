/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_serversContainer } from "../LdapSchema2ldifMicrosoft/id-oc-serversContainer.va.mjs";

/**
 * @summary serversContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serversContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"serversContainer"}
 *   ID                        id-oc-serversContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serversContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["serversContainer"],
    "&id": id_oc_serversContainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
