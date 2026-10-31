/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rIDManager } from "../LdapSchema2ldifMicrosoft/id-oc-rIDManager.va.mjs";
import { rIDAvailablePool } from "../MSUser/rIDAvailablePool.oa.mjs";

/**
 * @summary rIDManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rIDManager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { rIDAvailablePool }
 *   LDAP-NAME                 {"rIDManager"}
 *   ID                        id-oc-rIDManager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rIDManager: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [rIDAvailablePool] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rIDManager"],
    "&id": id_oc_rIDManager /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
