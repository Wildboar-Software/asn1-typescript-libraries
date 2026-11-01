/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { id_oc_caProvinceOrTerritory } from "../LdapSchema2ldifNadf/id-oc-caProvinceOrTerritory.va.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { nadfObject } from "../LdapSchema2ldifNadf/nadfObject.oa.mjs";


/**
 * @summary caProvinceOrTerritory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caProvinceOrTerritory OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality
 *                               | nadfObject }
 *   MUST CONTAIN              { stateOrProvinceName }
 *   LDAP-NAME                 {"caProvinceOrTerritory"}
 *   ID                        id-oc-caProvinceOrTerritory }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const caProvinceOrTerritory: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ locality, nadfObject, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ stateOrProvinceName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "caProvinceOrTerritory" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_caProvinceOrTerritory /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

