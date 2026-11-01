/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { usPlace } from "../LdapSchema2ldifNadf/usPlace.oa.mjs";
import { fipsCountyNumericCode } from "../LdapSchema2ldifNadf/fipsCountyNumericCode.oa.mjs";
import { id_oc_usCountyOrEquivalent } from "../LdapSchema2ldifNadf/id-oc-usCountyOrEquivalent.va.mjs";

/**
 * @summary usCountyOrEquivalent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usCountyOrEquivalent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { usPlace }
 *   MUST CONTAIN              { fipsCountyNumericCode }
 *   LDAP-NAME                 {"usCountyOrEquivalent"}
 *   ID                        id-oc-usCountyOrEquivalent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usCountyOrEquivalent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ usPlace, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ fipsCountyNumericCode, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "usCountyOrEquivalent" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_usCountyOrEquivalent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
