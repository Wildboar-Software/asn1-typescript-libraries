/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dnaPluginConfig } from "../LdapDnaPlugin/id-oc-dnaPluginConfig.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dnaExcludeScope } from "./dnaExcludeScope.oa.mjs";
import { dnaFilter } from "./dnaFilter.oa.mjs";
import { dnaInterval } from "./dnaInterval.oa.mjs";
import { dnaMagicRegen } from "./dnaMagicRegen.oa.mjs";
import { dnaMaxValue } from "./dnaMaxValue.oa.mjs";
import { dnaNextRange } from "./dnaNextRange.oa.mjs";
import { dnaNextValue } from "./dnaNextValue.oa.mjs";
import { dnaPrefix } from "./dnaPrefix.oa.mjs";
import { dnaRangeRequestTimeout } from "./dnaRangeRequestTimeout.oa.mjs";
import { dnaRemoteBindCred } from "./dnaRemoteBindCred.oa.mjs";
import { dnaRemoteBindDN } from "./dnaRemoteBindDN.oa.mjs";
import { dnaScope } from "./dnaScope.oa.mjs";
import { dnaSharedCfgDN } from "./dnaSharedCfgDN.oa.mjs";
import { dnaThreshold } from "./dnaThreshold.oa.mjs";
import { dnaType } from "./dnaType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dnaType, dnaPrefix, dnaNextValue, dnaMaxValue, dnaInterval, dnaMagicRegen, dnaFilter, dnaScope, dnaExcludeScope, dnaSharedCfgDN, dnaThreshold, dnaNextRange, dnaRangeRequestTimeout, dnaRemoteBindDN, dnaRemoteBindCred, commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dnaPluginConfig"],
    "&ldapDesc": "DNA plugin configuration" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dnaPluginConfig /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
