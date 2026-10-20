/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessAvailabilityChangeReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessAvailabilityChangeReason  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type AccessAvailabilityChangeReason = INTEGER;

export
const _decode_AccessAvailabilityChangeReason: $.ASN1Decoder<AccessAvailabilityChangeReason> = $._decodeInteger;

export
const _encode_AccessAvailabilityChangeReason: $.ASN1Encoder<AccessAvailabilityChangeReason> = $._encodeInteger;

/* eslint-enable */
