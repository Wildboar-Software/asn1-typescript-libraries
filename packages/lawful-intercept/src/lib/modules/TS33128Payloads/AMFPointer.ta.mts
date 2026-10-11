/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPointer  ::=  INTEGER (0..63)
 * ```
 */
export
type AMFPointer = INTEGER;

export function _decode_AMFPointer (el: _Element): AMFPointer {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 63n) {
        throw new ASN1OverflowError("AMFPointer violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_AMFPointer: $.ASN1Encoder<AMFPointer> = $._encodeInteger;


/* eslint-enable */
