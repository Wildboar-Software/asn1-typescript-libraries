/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { siteList } from "../MSUser/siteList.oa.mjs";
import { id_oc_siteLink } from "../LdapSchema2ldifMicrosoft/id-oc-siteLink.va.mjs";

import { cost } from "../MSUser/cost.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { replInterval } from "../MSUser/replInterval.oa.mjs";
/**
 * @summary siteLink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * siteLink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { siteList }
 *   MAY CONTAIN               { cost
 *                               | schedule
 *                               | options
 *                               | replInterval }
 *   LDAP-NAME                 {"siteLink"}
 *   ID                        id-oc-siteLink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const siteLink: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ siteList, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ cost, schedule, options, replInterval, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "siteLink" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_siteLink /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
