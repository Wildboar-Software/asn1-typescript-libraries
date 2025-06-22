/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { sha512_224WithRSAEncryption } from "../PKCS-1/sha512-224WithRSAEncryption.va.mjs";

/**
 * @summary PKCS1Algorithms_Union8_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1Algorithms-Union8-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<NULL>}
 * @implements {ALGORITHM_IDENTIFIER<NULL>}
 */
export const PKCS1Algorithms_Union8_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha512_224WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
