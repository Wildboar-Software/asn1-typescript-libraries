/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { evolutionCalendarURI } from "../LdapEvoldap/evolutionCalendarURI.oa.mjs";
import { id_oc_evolutionCalendarSource } from "../LdapEvoldap/id-oc-evolutionCalendarSource.va.mjs";

/**
 * @summary evolutionCalendarSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionCalendarSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionCalendarURI }
 *   LDAP-NAME                 {"evolutionCalendarSource"}
 *   LDAP-DESC                 "Evolution calendar source"
 *   ID                        id-oc-evolutionCalendarSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionCalendarSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [evolutionCalendarURI] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["evolutionCalendarSource"],
    "&ldapDesc": "Evolution calendar source" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_evolutionCalendarSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
