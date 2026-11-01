/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { aa } from "../LdapValias/aa.oa.mjs";
import { di } from "../LdapValias/di.oa.mjs";
import { id_oc_valias } from "../LdapValias/id-oc-valias.va.mjs";

/**
 * @summary valias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * valias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { aa }
 *   MAY CONTAIN               { di }
 *   LDAP-NAME                 {"valias"}
 *   LDAP-DESC                 "valias entry"
 *   ID                        id-oc-valias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const valias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ aa, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ di, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "valias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "valias entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_valias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
