/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa.mjs";
// export { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa.mjs";
import { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa.mjs";
// export { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
// export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import { id_at_mobileTelephoneNumber } from "../Cosine/id-at-mobileTelephoneNumber.va.mjs";
// export { id_at_mobileTelephoneNumber } from "../Cosine/id-at-mobileTelephoneNumber.va.mjs";


/**
 * @summary mobileTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mobileTelephoneNumber ATTRIBUTE ::= {
 *     WITH SYNTAX                 TelephoneNumber
 *     EQUALITY MATCHING RULE         telephoneNumberMatch
 *     SUBSTRINGS MATCHING RULE     telephoneNumberSubstringsMatch
 *     LDAP-SYNTAX                 telephoneNr.&id
 *     LDAP-NAME                     {"mobileTelephoneNumber", "mobile"}
 *     LDAP-DESC                    "RFC1274: mobile telephone number"
 *     ID                          id-at-mobileTelephoneNumber
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TelephoneNumber>}
 * @implements {ATTRIBUTE<TelephoneNumber>}
 */
export
const mobileTelephoneNumber: ATTRIBUTE<TelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&equality-match": telephoneNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mobileTelephoneNumber", "mobile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: mobile telephone number" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mobileTelephoneNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
