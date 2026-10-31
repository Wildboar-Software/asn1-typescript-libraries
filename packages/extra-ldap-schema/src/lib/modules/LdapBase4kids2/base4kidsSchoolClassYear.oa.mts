/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
import { id_at_base4kidsSchoolClassYear } from "../LdapBase4kids2/id-at-base4kidsSchoolClassYear.va.mjs";

/**
 * @summary base4kidsSchoolClassYear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolClassYear ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolClassName
 *   LDAP-NAME                 {"base4kidsSchoolClassYear"}
 *   LDAP-DESC                 "The school class year"
 *   ID                        id-at-base4kidsSchoolClassYear }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolClassYear: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": base4kidsSchoolClassName /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsSchoolClassYear"],
    "&ldapDesc": "The school class year" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSchoolClassYear /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
