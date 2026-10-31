/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraAutoProvPollingInterval } from "../LdapZimbra/id-at-zimbraAutoProvPollingInterval.va.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary zimbraAutoProvPollingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvPollingInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..32))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraAutoProvPollingInterval"}
 *   LDAP-DESC                 "EAGER mode: required LAZY mode: N/A MANUAL mode: N/A Interval between successive polling and provisioning accounts in EAGER mode. The actual interval may take longer since it can be affected by two other factors: zimbraAutoProvBatchSize and number of domains configured in zimbraAutoProvScheduledDomains. At each interval, the auto provision thread iterates through all domains in zimbraAutoProvScheduledDomains and auto creates up to domain.zimbraAutoProvBatchSize accounts. If that process takes longer than zimbraAutoProvPollingInterval then the next iteration will start immediately instead of waiting for zimbraAutoProvPollingInterval amount of time. If set to 0 when server starts up, the auto provision thread will not start. If changed from a non-0 value to 0 while server is running, the auto provision thread will be shutdown. If changed from 0 to a non-0 value while server is running, the auto provision thread will be started. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)."
 *   ID                        id-at-zimbraAutoProvPollingInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const zimbraAutoProvPollingInterval: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAutoProvPollingInterval"],
    "&ldapDesc": "EAGER mode: required LAZY mode: N/A MANUAL mode: N/A Interval between successive polling and provisioning accounts in EAGER mode. The actual interval may take longer since it can be affected by two other factors: zimbraAutoProvBatchSize and number of domains configured in zimbraAutoProvScheduledDomains. At each interval, the auto provision thread iterates through all domains in zimbraAutoProvScheduledDomains and auto creates up to domain.zimbraAutoProvBatchSize accounts. If that process takes longer than zimbraAutoProvPollingInterval then the next iteration will start immediately instead of waiting for zimbraAutoProvPollingInterval amount of time. If set to 0 when server starts up, the auto provision thread will not start. If changed from a non-0 value to 0 while server is running, the auto provision thread will be shutdown. If changed from 0 to a non-0 value while server is running, the auto provision thread will be started. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvPollingInterval /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
