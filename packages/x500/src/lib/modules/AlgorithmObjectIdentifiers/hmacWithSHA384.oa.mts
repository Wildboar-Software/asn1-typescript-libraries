/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { id_hmacWithSHA384 } from "../AlgorithmObjectIdentifiers/id-hmacWithSHA384.va.mjs";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA384 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const hmacWithSHA384: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
