/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
// export { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa.mjs";
// export { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa.mjs";
import { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
// export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
import { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va.mjs";
// export { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va.mjs";


/**
 * @summary uniqueMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uniqueMember ATTRIBUTE ::= {
 *   WITH SYNTAX              NameAndOptionalUID
 *   EQUALITY MATCHING RULE   uniqueMemberMatch
 *   LDAP-SYNTAX              nameAndOptionalUID.&id
 *   LDAP-NAME                {"uniqueMember"}
 *   ID                       id-at-uniqueMember }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NameAndOptionalUID>}
 * @implements {ATTRIBUTE<NameAndOptionalUID>}
 */
export
const uniqueMember: ATTRIBUTE<NameAndOptionalUID> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&equality-match": uniqueMemberMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameAndOptionalUID["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "uniqueMember" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_uniqueMember /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
