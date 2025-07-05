/* eslint-disable */
import { type MATCHING_RULE } from "@wildboar/x500/InformationFramework";
import { pkcs_9_mr_signingTimeMatch } from "../PKCS-9/pkcs-9-mr-signingTimeMatch.va.mjs";
import {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../PKCS-9/SigningTime.ta.mjs";


/**
 * @summary signingTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signingTimeMatch MATCHING-RULE ::= {
 *         SYNTAX SigningTime
 *         ID pkcs-9-mr-signingTimeMatch
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SigningTime>}
 * @implements {MATCHING_RULE<SigningTime>}
 */
export const signingTimeMatch: MATCHING_RULE<SigningTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SigningTime,
    },
    encoderFor: {
        "&AssertionType": _encode_SigningTime,
    },
    "&id": pkcs_9_mr_signingTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
