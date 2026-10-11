/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI_WithLMSI, _decode_IMSI_WithLMSI, _encode_IMSI_WithLMSI } from "../MAP-CommonDataTypes/IMSI-WithLMSI.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";


/**
 * @summary Identity
 * @description
 *
 * Subscriber identity as either IMSI alone or IMSI together with LMSI.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identity  ::=  CHOICE {
 *     imsi    IMSI,
 *     imsi-WithLMSI    IMSI-WithLMSI}
 * ```
 */
export
type Identity =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { imsi_WithLMSI: IMSI_WithLMSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Identity: $.ASN1Decoder<Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identity (el: _Element): Identity {
    if (!_cached_decoder_for_Identity) { _cached_decoder_for_Identity = $._decode_inextensible_choice<Identity>({
    "UNIVERSAL 4": [ "imsi", _decode_IMSI ],
    "UNIVERSAL 16": [ "imsi_WithLMSI", _decode_IMSI_WithLMSI ]
}); }
    return _cached_decoder_for_Identity(el);
}

let _cached_encoder_for_Identity: $.ASN1Encoder<Identity> | null = null;

/**
 * @summary Encodes a(n) Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identity, encoded as an ASN.1 Element.
 */
export
function _encode_Identity (value: Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identity) { _cached_encoder_for_Identity = $._encode_choice<Identity>({
    "imsi": _encode_IMSI,
    "imsi_WithLMSI": _encode_IMSI_WithLMSI,
}, $.BER); }
    return _cached_encoder_for_Identity(value, elGetter);
}


/* eslint-enable */
