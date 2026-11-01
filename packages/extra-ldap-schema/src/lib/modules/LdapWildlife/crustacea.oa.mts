/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { species } from "../LdapWildlife/species.oa.mjs";
import { id_oc_crustacea } from "../LdapWildlife/id-oc-crustacea.va.mjs";
import { populationCount } from "../LdapWildlife/populationCount.oa.mjs";
import { extinct } from "../LdapWildlife/extinct.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";


/**
 * @summary crustacea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * crustacea OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { species }
 *   MAY CONTAIN               { populationCount
 *                               | extinct
 *                               | commonName }
 *   LDAP-NAME                 {"crustacea"}
 *   LDAP-DESC                 "Crustaceans"
 *   ID                        id-oc-crustacea }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const crustacea: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ species, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ populationCount, extinct, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "crustacea" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Crustaceans" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_crustacea /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

