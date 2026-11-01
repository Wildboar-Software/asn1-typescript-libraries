/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_evolutionMailAccount } from "../LdapEvoldap/id-oc-evolutionMailAccount.va.mjs";
import { evolutionMailSourceURI } from "../LdapEvoldap/evolutionMailSourceURI.oa.mjs";
import { evolutionMailTransportURI } from "../LdapEvoldap/evolutionMailTransportURI.oa.mjs";


/**
 * @summary evolutionMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionMailSourceURI
 *                               | evolutionMailTransportURI }
 *   LDAP-NAME                 {"evolutionMailAccount"}
 *   LDAP-DESC                 "Evolution mail account"
 *   ID                        id-oc-evolutionMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ evolutionMailSourceURI, evolutionMailTransportURI, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "evolutionMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Evolution mail account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_evolutionMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

