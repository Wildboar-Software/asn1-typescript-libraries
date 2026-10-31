/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_infrastructureUpdate } from "../LdapSchema2ldifMicrosoft/id-oc-infrastructureUpdate.va.mjs";
import { dNReferenceUpdate } from "../MSUser/dNReferenceUpdate.oa.mjs";

/**
 * @summary infrastructureUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * infrastructureUpdate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { dNReferenceUpdate }
 *   LDAP-NAME                 {"infrastructureUpdate"}
 *   ID                        id-oc-infrastructureUpdate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const infrastructureUpdate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dNReferenceUpdate] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["infrastructureUpdate"],
    "&id": id_oc_infrastructureUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
