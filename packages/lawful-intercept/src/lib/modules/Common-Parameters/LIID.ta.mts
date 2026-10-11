/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LIID
 * @description
 *
 * Lawful Interception Identifier from ETSI TS 103 280. Only this symbol is
 * imported by LI-PS-PDU.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LIID ::= OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LIID = OCTET_STRING;

let _cached_decoder_for_LIID: $.ASN1Decoder<LIID> | null = null;

export
function _decode_LIID (el: _Element): LIID {
    if (!_cached_decoder_for_LIID) { _cached_decoder_for_LIID = $._decodeOctetString; }
    const value = _cached_decoder_for_LIID(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("LIID violates the SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_LIID: $.ASN1Encoder<LIID> | null = null;

export
function _encode_LIID (value: LIID, elGetter: $.ASN1Encoder<LIID>): _Element {
    if (!_cached_encoder_for_LIID) { _cached_encoder_for_LIID = $._encodeOctetString; }
    return _cached_encoder_for_LIID(value, elGetter);
}

/* eslint-enable */
