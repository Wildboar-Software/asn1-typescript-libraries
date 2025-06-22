/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { id_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha384.va.mjs";

/**
 * @summary mda_sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha384 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha384
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha384: DIGEST_ALGORITHM<NULL> = {
    class: "DIGEST-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_sha384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
