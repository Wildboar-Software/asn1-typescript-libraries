/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ansiOrgNumericCode } from "../LdapSchema2ldifNadf/ansiOrgNumericCode.oa.mjs";
import { id_oc_ansiOrgObject } from "../LdapSchema2ldifNadf/id-oc-ansiOrgObject.va.mjs";

/**
 * @summary ansiOrgObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansiOrgObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ansiOrgNumericCode }
 *   LDAP-NAME                 {"ansiOrgObject"}
 *   ID                        id-oc-ansiOrgObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansiOrgObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ansiOrgNumericCode] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ansiOrgObject"],
    "&id": id_oc_ansiOrgObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
