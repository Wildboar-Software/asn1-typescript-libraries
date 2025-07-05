/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_hmacWithSHA256 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA256.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA256 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const hmacWithSHA256: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
