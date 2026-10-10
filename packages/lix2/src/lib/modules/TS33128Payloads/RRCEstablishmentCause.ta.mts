/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EstablishmentCause, _encode_EstablishmentCause, EstablishmentCause } from "../TS33128Payloads/EstablishmentCause.ta.mjs";


/**
 * @summary RRCEstablishmentCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RRCEstablishmentCause  ::=  CHOICE
 * {
 *     ePCEstablishmentCause    [1] EstablishmentCause,
 *     fiveGCEstablishmentCause [2] EstablishmentCause
 * }
 * ```
 */
export
type RRCEstablishmentCause =
    { ePCEstablishmentCause: EstablishmentCause } /* CHOICE_ALT_ROOT */
    | { fiveGCEstablishmentCause: EstablishmentCause } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RRCEstablishmentCause: $.ASN1Decoder<RRCEstablishmentCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RRCEstablishmentCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RRCEstablishmentCause (el: _Element): RRCEstablishmentCause {
    if (!_cached_decoder_for_RRCEstablishmentCause) { _cached_decoder_for_RRCEstablishmentCause = $._decode_inextensible_choice<RRCEstablishmentCause>({
    "CONTEXT 1": [ "ePCEstablishmentCause", $._decode_implicit<EstablishmentCause>(() => _decode_EstablishmentCause) ],
    "CONTEXT 2": [ "fiveGCEstablishmentCause", $._decode_implicit<EstablishmentCause>(() => _decode_EstablishmentCause) ]
}); }
    return _cached_decoder_for_RRCEstablishmentCause(el);
}

let _cached_encoder_for_RRCEstablishmentCause: $.ASN1Encoder<RRCEstablishmentCause> | null = null;

/**
 * @summary Encodes a(n) RRCEstablishmentCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RRCEstablishmentCause, encoded as an ASN.1 Element.
 */
export
function _encode_RRCEstablishmentCause (value: RRCEstablishmentCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RRCEstablishmentCause) { _cached_encoder_for_RRCEstablishmentCause = $._encode_choice<RRCEstablishmentCause>({
    "ePCEstablishmentCause": $._encode_implicit(_TagClass.context, 1, () => _encode_EstablishmentCause, $.BER),
    "fiveGCEstablishmentCause": $._encode_implicit(_TagClass.context, 2, () => _encode_EstablishmentCause, $.BER),
}, $.BER); }
    return _cached_encoder_for_RRCEstablishmentCause(value, elGetter);
}


/* eslint-enable */
