/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { species } from "../LdapWildlife/species.oa.mjs";
import { id_oc_chondrichthyes } from "../LdapWildlife/id-oc-chondrichthyes.va.mjs";
import { populationCount } from "../LdapWildlife/populationCount.oa.mjs";
import { extinct } from "../LdapWildlife/extinct.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";


/**
 * @summary chondrichthyes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chondrichthyes OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { species }
 *   MAY CONTAIN               { populationCount
 *                               | extinct
 *                               | commonName }
 *   LDAP-NAME                 {"chondrichthyes"}
 *   LDAP-DESC                 "Cartilaginous fishes"
 *   ID                        id-oc-chondrichthyes }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const chondrichthyes: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ species, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ populationCount, extinct, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "chondrichthyes" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Cartilaginous fishes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_chondrichthyes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

