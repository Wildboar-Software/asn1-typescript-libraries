/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../Common-Parameters/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../Common-Parameters/IMSI.ta.mjs";


/**
 * @summary SUPIIMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIIMSI  ::=  IMSI
 * ```
 */
export
type SUPIIMSI = IMSI; // DefinedType

let _cached_decoder_for_SUPIIMSI: $.ASN1Decoder<SUPIIMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIIMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPIIMSI (el: _Element): SUPIIMSI {
    if (!_cached_decoder_for_SUPIIMSI) { _cached_decoder_for_SUPIIMSI = _decode_IMSI; }
    return _cached_decoder_for_SUPIIMSI(el);
}

let _cached_encoder_for_SUPIIMSI: $.ASN1Encoder<SUPIIMSI> | null = null;

/**
 * @summary Encodes a(n) SUPIIMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIIMSI, encoded as an ASN.1 Element.
 */
export
function _encode_SUPIIMSI (value: SUPIIMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPIIMSI) { _cached_encoder_for_SUPIIMSI = _encode_IMSI; }
    return _cached_encoder_for_SUPIIMSI(value, elGetter);
}


/* eslint-enable */
