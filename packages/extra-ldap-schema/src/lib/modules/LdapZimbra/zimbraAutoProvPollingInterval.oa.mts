/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_zimbraAutoProvPollingInterval } from "../LdapZimbra/id-at-zimbraAutoProvPollingInterval.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraAutoProvPollingInterval: ATTRIBUTE = undefined;

/* eslint-enable */
