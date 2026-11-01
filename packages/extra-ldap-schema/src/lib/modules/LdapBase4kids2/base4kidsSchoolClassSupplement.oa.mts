/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
// export { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
import { id_at_base4kidsSchoolClassSupplement } from "../LdapBase4kids2/id-at-base4kidsSchoolClassSupplement.va.mjs";
// export { id_at_base4kidsSchoolClassSupplement } from "../LdapBase4kids2/id-at-base4kidsSchoolClassSupplement.va.mjs";


/**
 * @summary base4kidsSchoolClassSupplement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolClassSupplement ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolClassName
 *   LDAP-NAME                 {"base4kidsSchoolClassSupplement"}
 *   LDAP-DESC                 "The school class supplement"
 *   ID                        id-at-base4kidsSchoolClassSupplement }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolClassSupplement: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsSchoolClassName /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsSchoolClassSupplement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The school class supplement" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSchoolClassSupplement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
