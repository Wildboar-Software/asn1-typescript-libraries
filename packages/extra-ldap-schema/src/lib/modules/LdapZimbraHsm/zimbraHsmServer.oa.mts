/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { zimbraHsmGlobalConfig } from "../LdapZimbraHsm/zimbraHsmGlobalConfig.oa.mjs";
import { zimbraHsmAge } from "../LdapZimbraHsm/zimbraHsmAge.oa.mjs";
import { id_oc_zimbraHsmServer } from "../LdapZimbraHsm/id-oc-zimbraHsmServer.va.mjs";

/**
 * @summary zimbraHsmServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraHsmServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraHsmGlobalConfig }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { zimbraHsmAge }
 *   LDAP-NAME                 {"zimbraHsmServer"}
 *   LDAP-DESC                 "Server-specific configuration for HSM"
 *   ID                        id-oc-zimbraHsmServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraHsmServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraHsmGlobalConfig, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraHsmAge, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraHsmServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Server-specific configuration for HSM" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraHsmServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
