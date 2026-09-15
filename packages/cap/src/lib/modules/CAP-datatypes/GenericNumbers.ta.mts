import {
    ASN1Element as _Element,
    ASN1SizeError,
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
export const _decode_GenericNumbers = (el: _Element): GenericNumbers => {
    const value = $._decodeSetOf<GenericNumber>(() => _decode_GenericNumber)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("GenericNumbers violates SIZE constraint");
    }
    return value;
};
export const _encode_GenericNumbers = $._encodeSetOf<GenericNumber>(() => _encode_GenericNumber, $.BER);
