/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import { hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/hMAC-SHA1.va.mjs";

/**
 * @summary alg_hMAC_SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alg-hMAC-SHA1 ALGORITHM ::= { IDENTIFIER hMAC-SHA1 PARAMS TYPE NULL ARE required }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const alg_hMAC_SHA1: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": hMAC_SHA1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
