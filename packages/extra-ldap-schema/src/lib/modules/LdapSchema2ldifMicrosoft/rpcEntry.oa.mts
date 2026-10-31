/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { id_oc_rpcEntry } from "../LdapSchema2ldifMicrosoft/id-oc-rpcEntry.va.mjs";

/**
 * @summary rpcEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   KIND                      abstract
 *   LDAP-NAME                 {"rpcEntry"}
 *   ID                        id-oc-rpcEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [connectionPoint] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rpcEntry"],
    "&id": id_oc_rpcEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
