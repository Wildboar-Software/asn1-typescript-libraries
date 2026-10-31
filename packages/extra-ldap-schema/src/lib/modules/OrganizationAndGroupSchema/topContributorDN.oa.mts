/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { contributorDN } from "../OrganizationAndGroupSchema/contributorDN.oa.mjs";
import { id_at_topContributorDN } from "../OrganizationAndGroupSchema/id-at-topContributorDN.va.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";

/**
 * @summary topContributorDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * topContributorDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  contributorDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"topContributorDN"}
 *     LDAP-DESC                   "DN of a top contributor (in terms of labor) to a project"
 *     ID                          id-at-topContributorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const topContributorDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {},
    encoderFor: {},
    "&derivation": contributorDN /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["topContributorDN"],
    "&ldapDesc": "DN of a top contributor (in terms of labor) to a project" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_topContributorDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
