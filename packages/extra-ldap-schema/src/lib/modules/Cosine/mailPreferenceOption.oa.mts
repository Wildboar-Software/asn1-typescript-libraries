/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_MailPreferenceOptionSyntax, _encode_MailPreferenceOptionSyntax, MailPreferenceOptionSyntax } from "../Cosine/MailPreferenceOptionSyntax.ta.mjs";
// export { MailPreferenceOptionSyntax, _enum_for_MailPreferenceOptionSyntax, MailPreferenceOptionSyntax_no_list_inclusion /* IMPORTED_LONG_ENUMERATION_ITEM */, no_list_inclusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, MailPreferenceOptionSyntax_any_list_inclusion /* IMPORTED_LONG_ENUMERATION_ITEM */, any_list_inclusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, MailPreferenceOptionSyntax_professional_list_inclusion /* IMPORTED_LONG_ENUMERATION_ITEM */, professional_list_inclusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MailPreferenceOptionSyntax, _encode_MailPreferenceOptionSyntax } from "../Cosine/MailPreferenceOptionSyntax.ta.mjs";
import { id_at_mailPreferenceOption } from "../Cosine/id-at-mailPreferenceOption.va.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_mailPreferenceOption } from "../Cosine/id-at-mailPreferenceOption.va.mjs";


/**
 * @summary mailPreferenceOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailPreferenceOption ATTRIBUTE ::= {
 *     WITH SYNTAX                 MailPreferenceOptionSyntax
 *     EQUALITY MATCHING RULE      integerMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                   {"mailPreferenceOption"}
 *     ID                          id-at-mailPreferenceOption
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MailPreferenceOptionSyntax>}
 * @implements {ATTRIBUTE<MailPreferenceOptionSyntax>}
 */
export
const mailPreferenceOption: ATTRIBUTE<MailPreferenceOptionSyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MailPreferenceOptionSyntax,
    },
    encoderFor: {
        "&Type": _encode_MailPreferenceOptionSyntax,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailPreferenceOption" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mailPreferenceOption /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
