/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_donorDN } from "../OrganizationAndGroupSchema/id-at-donorDN.va.mjs";

/**
 * @summary donorDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * donorDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  distinguishedName
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"donorDN"}
 *     LDAP-DESC                   "DN of a donor to this person or organization"
 *     ID                          id-at-donorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const donorDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "donorDN" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DN of a donor to this person or organization" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_donorDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
