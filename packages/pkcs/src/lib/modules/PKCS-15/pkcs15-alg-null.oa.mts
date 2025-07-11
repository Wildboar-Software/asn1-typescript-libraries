/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca.mjs";

/**
 * @summary pkcs15_alg_null
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-alg-null  PKCS15-ALGORITHM ::= { PARAMETERS NULL OPERATIONS {{generate-key}} ID -1}
 * ```
 *
 * @constant
 * @type {PKCS15_ALGORITHM<NULL>}
 * @implements {PKCS15_ALGORITHM<NULL>}
 */
export const pkcs15_alg_null: PKCS15_ALGORITHM<NULL> = {
    class: "PKCS15-ALGORITHM",
    decoderFor: {
        "&Parameters": $._decodeNull,
    },
    encoderFor: {
        "&Parameters": $._encodeNull,
    },
    "&id": -1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Parameters": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Operations": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
