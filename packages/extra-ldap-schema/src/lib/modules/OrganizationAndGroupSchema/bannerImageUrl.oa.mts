/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_bannerImageUrl } from "../OrganizationAndGroupSchema/id-at-bannerImageUrl.va.mjs";

/**
 * @summary bannerImageUrl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bannerImageUrl ATTRIBUTE ::= {
 *     SUBTYPE OF                  url
 *     LDAP-NAME                   {"bannerImageUrl"}
 *     LDAP-DESC                   "URL to the banner image"
 *     ID                          id-at-bannerImageUrl
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const bannerImageUrl: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": url /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "bannerImageUrl" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "URL to the banner image" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_bannerImageUrl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
