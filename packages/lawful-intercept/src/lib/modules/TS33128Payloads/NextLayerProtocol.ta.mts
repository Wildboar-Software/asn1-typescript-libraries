/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NextLayerProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NextLayerProtocol  ::=  INTEGER(0..255)
 * ```
 */
export
type NextLayerProtocol = INTEGER;

export function _decode_NextLayerProtocol (el: _Element): NextLayerProtocol {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("NextLayerProtocol violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_NextLayerProtocol: $.ASN1Encoder<NextLayerProtocol> = $._encodeInteger;


/* eslint-enable */
