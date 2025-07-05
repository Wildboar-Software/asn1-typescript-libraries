/* eslint-disable */
import { UTCTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_utcTime } from "../SelectedAttributeTypes/id-lsx-utcTime.va.mjs";
/**
 * @summary utcTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utcTime SYNTAX-NAME ::= {
 *   LDAP-DESC         "UTC Time"
 *   DIRECTORY SYNTAX  UTCTime
 *   ID                id-lsx-utcTime }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UTCTime>}
 * @implements {SYNTAX_NAME<UTCTime>}
 */
export const utcTime: SYNTAX_NAME<UTCTime> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeUTCTime,
    },
    encoderFor: {
        "&Type": $._encodeUTCTime,
    },
    "&ldapDesc": "UTC Time" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_utcTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
