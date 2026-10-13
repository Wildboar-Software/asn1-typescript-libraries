/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Port_Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Port-Number  ::=  INTEGER (0..65535)
 * ```
 */
export
type Port_Number = INTEGER;
export const _decode_Port_Number: $.ASN1Decoder<Port_Number> = (el: _Element): Port_Number => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("Port_Number violates INTEGER range");
    }
    return value;
};
export const _encode_Port_Number: $.ASN1Encoder<Port_Number> = $._encodeInteger;


/* eslint-enable */
