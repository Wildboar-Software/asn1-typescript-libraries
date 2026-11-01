/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import { id_at_soniaLocalityMobile } from "../Ldapmigration97sonia/id-at-soniaLocalityMobile.va.mjs";


/**
 * @summary soniaLocalityMobile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaLocalityMobile ATTRIBUTE ::= {
 *   WITH SYNTAX               TelephoneNumber
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               telephoneNr.&id
 *   LDAP-NAME                 {"soniaLocalityMobile"}
 *   LDAP-DESC                 "mobile phone number"
 *   ID                        id-at-soniaLocalityMobile }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TelephoneNumber>}
 * @implements {ATTRIBUTE<TelephoneNumber>}
 */
export
const soniaLocalityMobile: ATTRIBUTE<TelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaLocalityMobile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "mobile phone number" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_soniaLocalityMobile /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

