/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_usStateOrEquivalent } from "../LdapSchema2ldifNadf/id-oc-usStateOrEquivalent.va.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { nadfObject } from "../LdapSchema2ldifNadf/nadfObject.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { fipsStateNumericCode } from "../LdapSchema2ldifNadf/fipsStateNumericCode.oa.mjs";
import { fipsStateAlphaCode } from "../LdapSchema2ldifNadf/fipsStateAlphaCode.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";


/**
 * @summary usStateOrEquivalent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usStateOrEquivalent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality
 *                               | nadfObject }
 *   MUST CONTAIN              { localityName
 *                               | fipsStateNumericCode
 *                               | fipsStateAlphaCode
 *                               | stateOrProvinceName }
 *   LDAP-NAME                 {"usStateOrEquivalent"}
 *   ID                        id-oc-usStateOrEquivalent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usStateOrEquivalent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ locality, nadfObject, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ localityName, fipsStateNumericCode, fipsStateAlphaCode, stateOrProvinceName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "usStateOrEquivalent" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_usStateOrEquivalent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

