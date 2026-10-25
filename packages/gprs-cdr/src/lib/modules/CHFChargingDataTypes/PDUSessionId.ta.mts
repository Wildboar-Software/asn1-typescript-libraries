/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionId  ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type PDUSessionId = INTEGER;

export const _decode_PDUSessionId = (el: _Element): PDUSessionId => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 255) {
        throw new ASN1OverflowError("PDUSessionId violates INTEGER range");
    }
    return value;
};

export
const _encode_PDUSessionId: $.ASN1Encoder<PDUSessionId> = $._encodeInteger;

/* eslint-enable */
