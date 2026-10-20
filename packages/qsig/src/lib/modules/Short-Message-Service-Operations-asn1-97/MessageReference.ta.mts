/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type MessageReference = INTEGER;

export
const _decode_MessageReference = (el: _Element): MessageReference => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("MessageReference violates INTEGER constraint");
    }
    return value;
};

export
const _encode_MessageReference: $.ASN1Encoder<MessageReference> = $._encodeInteger;

/* eslint-enable */
