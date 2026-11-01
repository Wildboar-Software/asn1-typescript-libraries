/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { evolutionAddressbookURI } from "../LdapEvoldap/evolutionAddressbookURI.oa.mjs";
import { id_oc_evolutionAddressbookSource } from "../LdapEvoldap/id-oc-evolutionAddressbookSource.va.mjs";

/**
 * @summary evolutionAddressbookSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionAddressbookSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionAddressbookURI }
 *   LDAP-NAME                 {"evolutionAddressbookSource"}
 *   LDAP-DESC                 "Evolution addressbook source"
 *   ID                        id-oc-evolutionAddressbookSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionAddressbookSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ evolutionAddressbookURI, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "evolutionAddressbookSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Evolution addressbook source" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_evolutionAddressbookSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
