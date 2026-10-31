/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_base4kidsBusinessTelephoneNumber } from "../LdapBase4kids2/id-at-base4kidsBusinessTelephoneNumber.va.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";

/**
 * @summary base4kidsBusinessTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsBusinessTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF                telephoneNumber
 *   LDAP-NAME                 {"base4kidsBusinessTelephoneNumber"}
 *   LDAP-DESC                 "Business telephone number"
 *   ID                        id-at-base4kidsBusinessTelephoneNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsBusinessTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": telephoneNumber /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsBusinessTelephoneNumber"],
    "&ldapDesc": "Business telephone number" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsBusinessTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
