/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_x_kmc_PhoneticGivenName } from "../LdapKmc/id-at-x-kmc-PhoneticGivenName.va.mjs";

/**
 * @summary x_kmc_PhoneticGivenName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-kmc-PhoneticGivenName ATTRIBUTE ::= {
 *   LDAP-NAME                 {"x-kmc-PhoneticGivenName", "SINGLE-VALUE"}
 *   LDAP-DESC                 "the phonetic given name of the associated person"
 *   ID                        id-at-x-kmc-PhoneticGivenName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const x_kmc_PhoneticGivenName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&ldapName": [ "x-kmc-PhoneticGivenName", "SINGLE-VALUE" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "the phonetic given name of the associated person" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_x_kmc_PhoneticGivenName /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
