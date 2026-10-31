/* eslint-disable */
import { type UTCTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_lastModifiedTime } from "../LdapSchema2ldifCosine/id-at-lastModifiedTime.va.mjs";
import { utcTime } from "../SelectedAttributeTypes/utcTime.oa.mjs";

/**
 * @summary lastModifiedTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lastModifiedTime ATTRIBUTE ::= {
 *   WITH SYNTAX               UTCTime
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               utcTime.&id
 *   LDAP-NAME                 {"lastModifiedTime"}
 *   LDAP-DESC                 "RFC1274: time of last modify, replaced by modifyTimestamp"
 *   OBSOLETE                  TRUE
 *   ID                        id-at-lastModifiedTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UTCTime>}
 * @implements {ATTRIBUTE<UTCTime>}
 */
export
const lastModifiedTime: ATTRIBUTE<UTCTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTCTime,
    },
    encoderFor: {
        "&Type": $._encodeUTCTime,
    },
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utcTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["lastModifiedTime"],
    "&ldapDesc": "RFC1274: time of last modify, replaced by modifyTimestamp" /* OBJECT_FIELD_SETTING */,
    "&obsolete": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_lastModifiedTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
