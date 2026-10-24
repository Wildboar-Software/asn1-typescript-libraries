/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Milliseconds
 * @description
 *
 * Milliseconds fraction, from 0 to 999, added to a CDR time stamp such as
 * the service request time or an SDP offer or answer time (clause
 * 6.1.3.3).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.3.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Milliseconds  ::=  INTEGER ( 0 .. 999 )
 * ```
 */
export
type Milliseconds = INTEGER;

export const _decode_Milliseconds = (el: _Element): Milliseconds => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 999) {
        throw new ASN1OverflowError("Milliseconds violates INTEGER range");
    }
    return value;
};

export
const _encode_Milliseconds: $.ASN1Encoder<Milliseconds> = $._encodeInteger;

/* eslint-enable */
