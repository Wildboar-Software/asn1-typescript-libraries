/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationIndicator  ::=  INTEGER((-128..127))
 * ```
 */
export
type ReservationIndicator = INTEGER;
export const _decode_ReservationIndicator: $.ASN1Decoder<ReservationIndicator> = $._decodeInteger;
export const _encode_ReservationIndicator: $.ASN1Encoder<ReservationIndicator> = $._encodeInteger;


/* eslint-enable */
