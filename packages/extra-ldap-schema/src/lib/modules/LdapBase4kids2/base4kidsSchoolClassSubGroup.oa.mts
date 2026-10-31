/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
import { id_at_base4kidsSchoolClassSubGroup } from "../LdapBase4kids2/id-at-base4kidsSchoolClassSubGroup.va.mjs";

/**
 * @summary base4kidsSchoolClassSubGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolClassSubGroup ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolClassName
 *   LDAP-NAME                 {"base4kidsSchoolClassSubGroup"}
 *   LDAP-DESC                 "The school class sub group"
 *   ID                        id-at-base4kidsSchoolClassSubGroup }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolClassSubGroup: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": base4kidsSchoolClassName /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsSchoolClassSubGroup"],
    "&ldapDesc": "The school class sub group" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSchoolClassSubGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
