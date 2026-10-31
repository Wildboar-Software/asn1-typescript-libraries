/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { donorDN } from "../OrganizationAndGroupSchema/donorDN.oa.mjs";
import { id_at_topDonorDN } from "../OrganizationAndGroupSchema/id-at-topDonorDN.va.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";

/**
 * @summary topDonorDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * topDonorDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  donorDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"topDonorDN"}
 *     LDAP-DESC                   "DN of a top donor to this person or organization"
 *     ID                          id-at-topDonorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const topDonorDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": donorDN /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["topDonorDN"],
    "&ldapDesc": "DN of a top donor to this person or organization" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_topDonorDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
