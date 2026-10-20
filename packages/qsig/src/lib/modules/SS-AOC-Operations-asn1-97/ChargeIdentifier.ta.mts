/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeIdentifier  ::=  INTEGER (-32768..32767)
 * ```
 */
export
type ChargeIdentifier = INTEGER;

export
const _decode_ChargeIdentifier = (el: _Element): ChargeIdentifier => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -32768n || value > 32767n) : (value < -32768 || value > 32767))) {
        throw new ASN1OverflowError("ChargeIdentifier violates INTEGER constraint");
    }
    return value;
};

export
const _encode_ChargeIdentifier: $.ASN1Encoder<ChargeIdentifier> = $._encodeInteger;

/* eslint-enable */
