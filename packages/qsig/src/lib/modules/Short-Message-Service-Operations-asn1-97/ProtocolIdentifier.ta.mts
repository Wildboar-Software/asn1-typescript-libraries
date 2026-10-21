/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProtocolIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolIdentifier  ::=  INTEGER (0..127)
 * ```
 */
export
type ProtocolIdentifier = INTEGER;

export
const _decode_ProtocolIdentifier = (el: _Element): ProtocolIdentifier => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 127n) : (value < 0 || value > 127))) {
        throw new ASN1OverflowError("ProtocolIdentifier violates INTEGER constraint");
    }
    return value;
};

export
const _encode_ProtocolIdentifier: $.ASN1Encoder<ProtocolIdentifier> = $._encodeInteger;

/* eslint-enable */
