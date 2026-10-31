/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nationalObject } from "../LdapSchema2ldifNadf/id-oc-nationalObject.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";

/**
 * @summary nationalObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nationalObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { countryName }
 *   LDAP-NAME                 {"nationalObject"}
 *   ID                        id-oc-nationalObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nationalObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [countryName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nationalObject"],
    "&id": id_oc_nationalObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
