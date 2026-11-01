/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
import { id_at_base4kidsSchoolClassLevel } from "../LdapBase4kids2/id-at-base4kidsSchoolClassLevel.va.mjs";

/**
 * @summary base4kidsSchoolClassLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolClassLevel ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolClassName
 *   LDAP-NAME                 {"base4kidsSchoolClassLevel"}
 *   LDAP-DESC                 "The level of a school class (Klassenstufe)"
 *   ID                        id-at-base4kidsSchoolClassLevel }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolClassLevel: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsSchoolClassName /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsSchoolClassLevel" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The level of a school class (Klassenstufe)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSchoolClassLevel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
