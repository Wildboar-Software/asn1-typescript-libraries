import { type ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications,
} from "@wildboar/x500/InformationFramework";
import { id_timeStamped } from "./id-timeStamped.va.mjs";
import {
    TimeStamped,
    _decode_TimeStamped,
    _encode_TimeStamped,
} from "./TimeStamped.ta.mjs";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-timeStamped
 * @description
 *
 * ATTRIBUTE binding a time stamp (X9.95 token or local time) to signed
 * content (ITU-T X.894 | ISO/IEC 24824-4 clause 8.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-timeStamped ATTRIBUTE ::= {TYPE TimeStamped IDENTIFIED BY id-timeStamped}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TimeStamped>}
 * @implements {ATTRIBUTE<TimeStamped>}
 */
export const aa_timeStamped: ATTRIBUTE<TimeStamped> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TimeStamped,
    },
    encoderFor: {
        "&Type": _encode_TimeStamped,
    },
    "&id": id_timeStamped /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
