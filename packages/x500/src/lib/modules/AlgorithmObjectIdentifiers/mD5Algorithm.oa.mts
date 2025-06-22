/* eslint-disable */
import { NULL, ObjectIdentifier as _OID } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary mD5Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mD5Algorithm ALGORITHM ::= {
 *   PARMS          NULL
 *   IDENTIFIED BY {iso(1) member-body(2) us(840) rsadsi(113549) digestAlgorithm(2) md5(5)}}
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const mD5Algorithm: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": _OID.fromParts([
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* digestAlgorithm */ 2,
        /* md5 */ 5,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
