/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { schacYearOfBirth } from "../LdapSchac/schacYearOfBirth.oa.mjs";
import { id_oc_schacExperimentalOC } from "../LdapSchac/id-oc-schacExperimentalOC.va.mjs";


/**
 * @summary schacExperimentalOC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacExperimentalOC OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacYearOfBirth }
 *   LDAP-NAME                 {"schacExperimentalOC"}
 *   LDAP-DESC                 "Experimental Object Class"
 *   ID                        id-oc-schacExperimentalOC }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacExperimentalOC: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ schacYearOfBirth, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "schacExperimentalOC" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Experimental Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacExperimentalOC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

