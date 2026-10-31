/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_usPlace } from "../LdapSchema2ldifNadf/id-oc-usPlace.va.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { fipsPlaceNumericCode } from "./fipsPlaceNumericCode.oa.mjs";
import { nadfObject } from "./nadfObject.oa.mjs";

/**
 * @summary usPlace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usPlace OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality
 *                               | nadfObject }
 *   MUST CONTAIN              { localityName
 *                               | fipsPlaceNumericCode }
 *   LDAP-NAME                 {"usPlace"}
 *   ID                        id-oc-usPlace }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usPlace: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [locality, nadfObject] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [localityName, fipsPlaceNumericCode] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["usPlace"],
    "&id": id_oc_usPlace /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
