/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa.mjs";
import { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import { id_at_zimbraCalResContactPhone } from "../LdapZimbra/id-at-zimbraCalResContactPhone.va.mjs";


/**
 * @summary zimbraCalResContactPhone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalResContactPhone ATTRIBUTE ::= {
 *   WITH SYNTAX               TelephoneNumber
 *   EQUALITY MATCHING RULE    telephoneNumberMatch
 *   SUBSTRINGS MATCHING RULE  telephoneNumberSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               telephoneNr.&id
 *   LDAP-NAME                 {"zimbraCalResContactPhone"}
 *   LDAP-DESC                 "phone number of contact in charge of resource"
 *   ID                        id-at-zimbraCalResContactPhone }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TelephoneNumber>}
 * @implements {ATTRIBUTE<TelephoneNumber>}
 */
export
const zimbraCalResContactPhone: ATTRIBUTE<TelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&equality-match": telephoneNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraCalResContactPhone" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "phone number of contact in charge of resource" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCalResContactPhone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

