/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_builtinDomain } from "../LdapSchema2ldifMicrosoft/id-oc-builtinDomain.va.mjs";

/**
 * @summary builtinDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * builtinDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"builtinDomain"}
 *   ID                        id-oc-builtinDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const builtinDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["builtinDomain"],
    "&id": id_oc_builtinDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
