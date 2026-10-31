/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsChangelogConfig } from "../LdapCore389/id-oc-nsChangelogConfig.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsSymmetricKey } from "./nsSymmetricKey.oa.mjs";
import { nsslapd_changelogcompactdb_interval } from "./nsslapd-changelogcompactdb-interval.oa.mjs";
import { nsslapd_changelogdir } from "./nsslapd-changelogdir.oa.mjs";
import { nsslapd_changelogmaxage } from "./nsslapd-changelogmaxage.oa.mjs";
import { nsslapd_changelogmaxentries } from "./nsslapd-changelogmaxentries.oa.mjs";
import { nsslapd_changelogsuffix } from "./nsslapd-changelogsuffix.oa.mjs";
import { nsslapd_changelogtrim_interval } from "./nsslapd-changelogtrim-interval.oa.mjs";
import { nsslapd_encryptionalgorithm } from "./nsslapd-encryptionalgorithm.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, nsslapd_changelogdir] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsslapd_changelogmaxage, nsslapd_changelogtrim_interval, nsslapd_changelogmaxentries, nsslapd_changelogsuffix, nsslapd_changelogcompactdb_interval, nsslapd_encryptionalgorithm, nsSymmetricKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsChangelogConfig"],
    "&ldapDesc": "Configuration of the changelog5 object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsChangelogConfig /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
