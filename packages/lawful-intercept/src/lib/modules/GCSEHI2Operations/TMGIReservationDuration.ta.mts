/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TMGIReservationDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMGIReservationDuration  ::=  OCTET STRING
 * ```
 */
export
type TMGIReservationDuration = OCTET_STRING; // OctetStringType

export const _decode_TMGIReservationDuration: $.ASN1Decoder<TMGIReservationDuration> = $._decodeOctetString;

export const _encode_TMGIReservationDuration: $.ASN1Encoder<TMGIReservationDuration> = $._encodeOctetString;

/* eslint-enable */
