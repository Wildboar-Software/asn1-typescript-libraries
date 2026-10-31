/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_subnetContainer } from "../LdapSchema2ldifMicrosoft/id-oc-subnetContainer.va.mjs";

/**
 * @summary subnetContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subnetContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"subnetContainer"}
 *   ID                        id-oc-subnetContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const subnetContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["subnetContainer"],
    "&id": id_oc_subnetContainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
