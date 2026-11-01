/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dnaPluginConfig } from "../LdapDnaPlugin/id-oc-dnaPluginConfig.va.mjs";
import { dnaType } from "../LdapDnaPlugin/dnaType.oa.mjs";
import { dnaPrefix } from "../LdapDnaPlugin/dnaPrefix.oa.mjs";
import { dnaNextValue } from "../LdapDnaPlugin/dnaNextValue.oa.mjs";
import { dnaMaxValue } from "../LdapDnaPlugin/dnaMaxValue.oa.mjs";
import { dnaInterval } from "../LdapDnaPlugin/dnaInterval.oa.mjs";
import { dnaMagicRegen } from "../LdapDnaPlugin/dnaMagicRegen.oa.mjs";
import { dnaFilter } from "../LdapDnaPlugin/dnaFilter.oa.mjs";
import { dnaScope } from "../LdapDnaPlugin/dnaScope.oa.mjs";
import { dnaExcludeScope } from "../LdapDnaPlugin/dnaExcludeScope.oa.mjs";
import { dnaSharedCfgDN } from "../LdapDnaPlugin/dnaSharedCfgDN.oa.mjs";
import { dnaThreshold } from "../LdapDnaPlugin/dnaThreshold.oa.mjs";
import { dnaNextRange } from "../LdapDnaPlugin/dnaNextRange.oa.mjs";
import { dnaRangeRequestTimeout } from "../LdapDnaPlugin/dnaRangeRequestTimeout.oa.mjs";
import { dnaRemoteBindDN } from "../LdapDnaPlugin/dnaRemoteBindDN.oa.mjs";
import { dnaRemoteBindCred } from "../LdapDnaPlugin/dnaRemoteBindCred.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";


/**
 * @summary dnaPluginConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnaPluginConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dnaType
 *                               | dnaPrefix
 *                               | dnaNextValue
 *                               | dnaMaxValue
 *                               | dnaInterval
 *                               | dnaMagicRegen
 *                               | dnaFilter
 *                               | dnaScope
 *                               | dnaExcludeScope
 *                               | dnaSharedCfgDN
 *                               | dnaThreshold
 *                               | dnaNextRange
 *                               | dnaRangeRequestTimeout
 *                               | dnaRemoteBindDN
 *                               | dnaRemoteBindCred
 *                               | commonName }
 *   LDAP-NAME                 {"dnaPluginConfig"}
 *   LDAP-DESC                 "DNA plugin configuration"
 *   ID                        id-oc-dnaPluginConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnaPluginConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dnaType, dnaPrefix, dnaNextValue, dnaMaxValue, dnaInterval, dnaMagicRegen, dnaFilter, dnaScope, dnaExcludeScope, dnaSharedCfgDN, dnaThreshold, dnaNextRange, dnaRangeRequestTimeout, dnaRemoteBindDN, dnaRemoteBindCred, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dnaPluginConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DNA plugin configuration" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dnaPluginConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

