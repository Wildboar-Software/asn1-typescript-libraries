/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsSchoolDistrict } from "../LdapBase4kids2/base4kidsSchoolDistrict.oa.mjs";
import { id_at_base4kidsSchoolLocation } from "../LdapBase4kids2/id-at-base4kidsSchoolLocation.va.mjs";


/**
 * @summary base4kidsSchoolLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsSchoolLocation ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsSchoolDistrict
 *   LDAP-NAME                 {"base4kidsSchoolLocation"}
 *   LDAP-DESC                 "The name of the school location (Schulstandort)"
 *   ID                        id-at-base4kidsSchoolLocation }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsSchoolLocation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsSchoolDistrict /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsSchoolLocation" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The name of the school location (Schulstandort)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsSchoolLocation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

