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
import { type GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "./GenericNumber.ta.mjs";

/**
 * @summary GenericNumbers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericNumbers {PARAMETERS-BOUND : bound} ::= SET SIZE(1..bound.&numOfGenericNumbers) OF GenericNumber {bound}
 * ```
 *
 */
export type GenericNumbers = GenericNumber[];
export const _decode_GenericNumbers = $._decodeSetOf<GenericNumber>(() => _decode_GenericNumber);
export const _encode_GenericNumbers = $._encodeSetOf<GenericNumber>(() => _encode_GenericNumber, $.BER);
