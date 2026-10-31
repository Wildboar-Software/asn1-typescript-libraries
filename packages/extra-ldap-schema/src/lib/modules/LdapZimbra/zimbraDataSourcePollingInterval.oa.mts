/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraDataSourcePollingInterval } from "../LdapZimbra/id-at-zimbraDataSourcePollingInterval.va.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary zimbraDataSourcePollingInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDataSourcePollingInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..32))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraDataSourcePollingInterval"}
 *   LDAP-DESC                 "Prior to 6.0.0: The time interval between automated data imports for a data source, or all data sources owned by an account. If unset or 0, the data source will not be scheduled for automated polling. Since 6.0.0: Deprecated on account/cos since 6.0.0. Values on account/cos are migrated to protocol specific zimbraDataSource{proto}PollingInterval attributes. 1. if zimbraDataSourcePollingInterval is set on data source, use it 2. otherwise use the zimbraDataSource{Proto}PollingInterval on account/cos 3. if zimbraDataSource{Proto}PollingInterval is not set on account/cos, use the attribute's default if one is specified. See individual attribute descriptions for defaults. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)."
 *   ID                        id-at-zimbraDataSourcePollingInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const zimbraDataSourcePollingInterval: ATTRIBUTE<IA5String> = {
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
    "&ldapName": ["zimbraDataSourcePollingInterval"],
    "&ldapDesc": "Prior to 6.0.0: The time interval between automated data imports for a data source, or all data sources owned by an account. If unset or 0, the data source will not be scheduled for automated polling. Since 6.0.0: Deprecated on account/cos since 6.0.0. Values on account/cos are migrated to protocol specific zimbraDataSource{proto}PollingInterval attributes. 1. if zimbraDataSourcePollingInterval is set on data source, use it 2. otherwise use the zimbraDataSource{Proto}PollingInterval on account/cos 3. if zimbraDataSource{Proto}PollingInterval is not set on account/cos, use the attribute's default if one is specified. See individual attribute descriptions for defaults. . Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDataSourcePollingInterval /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
