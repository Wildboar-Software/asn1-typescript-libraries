import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary CorrelationID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelationID {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type CorrelationID = Digits;
export const _decode_CorrelationID = _decode_Digits;
export const _encode_CorrelationID = _encode_Digits;
