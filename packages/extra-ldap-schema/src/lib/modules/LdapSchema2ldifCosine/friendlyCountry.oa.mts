/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { country } from "../SelectedObjectClasses/country.oa.mjs";
import { co } from "../LdapSchema2ldifCosine/co.oa.mjs";
import { id_oc_friendlyCountry } from "../LdapSchema2ldifCosine/id-oc-friendlyCountry.va.mjs";


/**
 * @summary friendlyCountry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * friendlyCountry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { country }
 *   MUST CONTAIN              { co }
 *   LDAP-NAME                 {"friendlyCountry"}
 *   ID                        id-oc-friendlyCountry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const friendlyCountry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ country, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ co, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "friendlyCountry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_friendlyCountry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

