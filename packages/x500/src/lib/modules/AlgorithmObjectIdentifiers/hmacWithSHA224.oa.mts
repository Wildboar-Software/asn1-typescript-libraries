/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_hmacWithSHA224 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA224.va.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA224 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const hmacWithSHA224: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
