/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { id_oc_rpcProfile } from "../LdapSchema2ldifMicrosoft/id-oc-rpcProfile.va.mjs";


/**
 * @summary rpcProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   LDAP-NAME                 {"rpcProfile"}
 *   ID                        id-oc-rpcProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcProfile: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ rpcEntry, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcProfile" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcProfile /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

