/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca.mjs";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/hMAC-SHA1.va.mjs";

/**
 * @summary maca_hMAC_SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maca-hMAC-SHA1 MAC-ALGORITHM ::= {
 * IDENTIFIER hMAC-SHA1
 * PARAMS TYPE NULL ARE preferredAbsent
 * IS-KEYED-MAC TRUE
 * SMIME-CAPS {IDENTIFIED BY hMAC-SHA1}
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
