/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_requiresReligion } from "../OrganizationAndGroupSchema/id-at-requiresReligion.va.mjs";
// export { id_at_requiresReligion } from "../OrganizationAndGroupSchema/id-at-requiresReligion.va.mjs";


/**
 * @summary requiresReligion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requiresReligion ATTRIBUTE ::= {
 *     WITH SYNTAX                 Religions
 *     EQUALITY MATCHING RULE      objectIdentifierMatch
 *     LDAP-SYNTAX                 oid.&id
 *     LDAP-NAME                   {"requiresReligion"}
 *     LDAP-DESC                   "Religious belief required for membership"
 *     ID                          id-at-requiresReligion
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Religions>}
 * @implements {ATTRIBUTE<Religions>}
 */
export
const requiresReligion: ATTRIBUTE<Religions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Religions,
    },
    encoderFor: {
        "&Type": _encode_Religions,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "requiresReligion" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Religious belief required for membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_requiresReligion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
