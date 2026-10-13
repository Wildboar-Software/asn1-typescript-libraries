/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingCycle           ::=    INTEGER (2 .. 600)
 * ```
 */
export
type ReportingCycle = INTEGER;

let _cached_decoder_for_ReportingCycle: $.ASN1Decoder<ReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingCycle (el: _Element): ReportingCycle {
    if (!_cached_decoder_for_ReportingCycle) { _cached_decoder_for_ReportingCycle = $._decodeInteger; }
    return _cached_decoder_for_ReportingCycle(el);
}

let _cached_encoder_for_ReportingCycle: $.ASN1Encoder<ReportingCycle> | null = null;

/**
 * @summary Encodes a(n) ReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingCycle (value: ReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingCycle) { _cached_encoder_for_ReportingCycle = $._encodeInteger; }
    return _cached_encoder_for_ReportingCycle(value, elGetter);
}


/* eslint-enable */
