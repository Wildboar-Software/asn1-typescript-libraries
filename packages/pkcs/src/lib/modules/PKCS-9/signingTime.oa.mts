/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { pkcs_9_at_signingTime } from "../PKCS-9/pkcs-9-at-signingTime.va.mjs";
import {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../PKCS-9/SigningTime.ta.mjs";
import { signingTimeMatch } from "../PKCS-9/signingTimeMatch.oa.mjs";


/**
 * @summary signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signingTime ATTRIBUTE ::= {
 *         WITH SYNTAX SigningTime
 *         EQUALITY MATCHING RULE signingTimeMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-signingTime
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SigningTime>}
 * @implements {ATTRIBUTE<SigningTime>}
 */
export const signingTime: ATTRIBUTE<SigningTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SigningTime,
    },
    encoderFor: {
        "&Type": _encode_SigningTime,
    },
    "&equality-match": signingTimeMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_signingTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
