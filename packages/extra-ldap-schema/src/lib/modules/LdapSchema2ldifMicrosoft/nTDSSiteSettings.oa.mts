/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { applicationSiteSettings } from "../LdapSchema2ldifMicrosoft/applicationSiteSettings.oa.mjs";
import { id_oc_nTDSSiteSettings } from "../LdapSchema2ldifMicrosoft/id-oc-nTDSSiteSettings.va.mjs";
import { interSiteTopologyFailover } from "../MSUser/interSiteTopologyFailover.oa.mjs";
import { interSiteTopologyGenerator } from "../MSUser/interSiteTopologyGenerator.oa.mjs";
import { interSiteTopologyRenew } from "../MSUser/interSiteTopologyRenew.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { queryPolicyObject } from "../MSUser/queryPolicyObject.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";

/**
 * @summary nTDSSiteSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTDSSiteSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationSiteSettings }
 *   MAY CONTAIN               { schedule
 *                               | options
 *                               | queryPolicyObject
 *                               | managedBy
 *                               | interSiteTopologyGenerator
 *                               | interSiteTopologyRenew
 *                               | interSiteTopologyFailover }
 *   LDAP-NAME                 {"nTDSSiteSettings"}
 *   ID                        id-oc-nTDSSiteSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTDSSiteSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [applicationSiteSettings] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schedule, options, queryPolicyObject, managedBy, interSiteTopologyGenerator, interSiteTopologyRenew, interSiteTopologyFailover] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nTDSSiteSettings"],
    "&id": id_oc_nTDSSiteSettings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
