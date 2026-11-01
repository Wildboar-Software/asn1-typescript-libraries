/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsChangelogConfig } from "../LdapCore389/id-oc-nsChangelogConfig.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsslapd_changelogdir } from "../LdapCore389/nsslapd-changelogdir.oa.mjs";
import { nsslapd_changelogmaxage } from "../LdapCore389/nsslapd-changelogmaxage.oa.mjs";
import { nsslapd_changelogtrim_interval } from "../LdapCore389/nsslapd-changelogtrim-interval.oa.mjs";
import { nsslapd_changelogmaxentries } from "../LdapCore389/nsslapd-changelogmaxentries.oa.mjs";
import { nsslapd_changelogsuffix } from "../LdapCore389/nsslapd-changelogsuffix.oa.mjs";
import { nsslapd_changelogcompactdb_interval } from "../LdapCore389/nsslapd-changelogcompactdb-interval.oa.mjs";
import { nsslapd_encryptionalgorithm } from "../LdapCore389/nsslapd-encryptionalgorithm.oa.mjs";
import { nsSymmetricKey } from "../LdapCore389/nsSymmetricKey.oa.mjs";
// export { id_oc_nsChangelogConfig } from "../LdapCore389/id-oc-nsChangelogConfig.va.mjs";


/**
 * @summary nsChangelogConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsChangelogConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsslapd-changelogdir }
 *   MAY CONTAIN               { nsslapd-changelogmaxage
 *                               | nsslapd-changelogtrim-interval
 *                               | nsslapd-changelogmaxentries
 *                               | nsslapd-changelogsuffix
 *                               | nsslapd-changelogcompactdb-interval
 *                               | nsslapd-encryptionalgorithm
 *                               | nsSymmetricKey }
 *   LDAP-NAME                 {"nsChangelogConfig"}
 *   LDAP-DESC                 "Configuration of the changelog5 object"
 *   ID                        id-oc-nsChangelogConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsChangelogConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, nsslapd_changelogdir, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsslapd_changelogmaxage, nsslapd_changelogtrim_interval, nsslapd_changelogmaxentries, nsslapd_changelogsuffix, nsslapd_changelogcompactdb_interval, nsslapd_encryptionalgorithm, nsSymmetricKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsChangelogConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Configuration of the changelog5 object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsChangelogConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
