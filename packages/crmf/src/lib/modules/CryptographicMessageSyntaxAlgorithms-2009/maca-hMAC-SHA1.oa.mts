/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { MAC_ALGORITHM } from "@wildboar/cms";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { hMAC_SHA1 } from "@wildboar/cms";


/**
 * @summary maca_hMAC_SHA1
 * @description
 *
 * `MAC-ALGORITHM` information object for HMAC-SHA-1 in
 * `CryptographicMessageSyntaxAlgorithms-2009` (ASN.1 update of
 * [RFC 3370](https://datatracker.ietf.org/doc/html/rfc3370) in [RFC 5911 §3](https://datatracker.ietf.org/doc/html/rfc5911#section-3)).
 * Identifier `hMAC-SHA1`; `NULL` parameters `preferredAbsent`;
 * keyed MAC; listed in `MessageAuthAlgs` and `SMimeCaps`.
 *
 * HMAC-SHA-1 itself is defined in [RFC 3370 §3.1](https://datatracker.ietf.org/doc/html/rfc3370#section-3.1)
 * / [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maca-hMAC-SHA1 MAC-ALGORITHM ::= {
 *     IDENTIFIER hMAC-SHA1
 *     PARAMS TYPE NULL ARE preferredAbsent
 *     IS-KEYED-MAC TRUE
 *     SMIME-CAPS {IDENTIFIED BY hMAC-SHA1}
 * }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM<NULL>}
 * @implements {MAC_ALGORITHM<NULL>}
 */
export const maca_hMAC_SHA1: MAC_ALGORITHM<NULL> = {
    class: "MAC-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": hMAC_SHA1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&keyed": false /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
