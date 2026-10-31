/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mammalia } from "../LdapWildlife/id-oc-mammalia.va.mjs";
import { species } from "../LdapWildlife/species.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { extinct } from "./extinct.oa.mjs";
import { populationCount } from "./populationCount.oa.mjs";

/**
 * @summary mammalia
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mammalia OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { species }
 *   MAY CONTAIN               { populationCount
 *                               | extinct
 *                               | commonName }
 *   LDAP-NAME                 {"mammalia"}
 *   LDAP-DESC                 "Mammals"
 *   ID                        id-oc-mammalia }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mammalia: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [species] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [populationCount, extinct, commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mammalia"],
    "&ldapDesc": "Mammals" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mammalia /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
