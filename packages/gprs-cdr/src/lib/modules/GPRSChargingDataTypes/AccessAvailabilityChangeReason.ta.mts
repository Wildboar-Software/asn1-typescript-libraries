/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessAvailabilityChangeReason
 * @description
 *
 * This field indicates the reason why the availability of an access is
 * changed by the PCEF, i.e. RAN rule indication or Access usable/unusable as
 * defined in TS 29.212 [220].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.0aA.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessAvailabilityChangeReason  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type AccessAvailabilityChangeReason = INTEGER;

export const _decode_AccessAvailabilityChangeReason = (el: _Element): AccessAvailabilityChangeReason => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 4294967295) {
        throw new ASN1OverflowError("AccessAvailabilityChangeReason violates INTEGER range");
    }
    return value;
};

export
const _encode_AccessAvailabilityChangeReason: $.ASN1Encoder<AccessAvailabilityChangeReason> = $._encodeInteger;

/* eslint-enable */
