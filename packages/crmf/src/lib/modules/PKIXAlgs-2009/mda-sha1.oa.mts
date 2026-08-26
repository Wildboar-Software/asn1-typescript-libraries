/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { DIGEST_ALGORITHM } from "@wildboar/cms";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_sha1 } from "@wildboar/x500/AlgorithmObjectIdentifiers";


/**
 * @summary mda_sha1
 * @description
 *
 * `DIGEST-ALGORITHM` information object for SHA-1 in `PKIXAlgs-2009`
 * (ASN.1 for [RFC 3279](https://datatracker.ietf.org/doc/html/rfc3279) in [RFC 5912 §6](https://datatracker.ietf.org/doc/html/rfc5912#section-6)).
 * Identifier `id-sha1`; `NULL` parameters `preferredAbsent`.
 *
 * SHA-1 as a one-way hash is specified in [RFC 3279 §2.1](https://datatracker.ietf.org/doc/html/rfc3279#section-2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha1 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha1
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha1: DIGEST_ALGORITHM<NULL> = {
    class: "DIGEST-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
