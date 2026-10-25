/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMGIReservationDuration
 * @description
 * 
 * Stage 2 identifies the duration of the TMGI reservation from the BM-SC (3GPP
 * TS 33.108, table 14.2). Annex B.14.1 instead says to code the TMGI attribute
 * of 3GPP TS 29.468. Those two statements conflict, and the specification does
 * not resolve them.
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
