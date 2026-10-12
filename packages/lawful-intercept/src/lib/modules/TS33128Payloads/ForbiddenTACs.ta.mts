/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary ForbiddenTACs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForbiddenTACs  ::=  SEQUENCE (SIZE(1..MAX)) OF TAC
 * ```
 */
export
type ForbiddenTACs = TAC[]; // SequenceOfType

let _cached_decoder_for_ForbiddenTACs: $.ASN1Decoder<ForbiddenTACs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForbiddenTACs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForbiddenTACs (el: _Element): ForbiddenTACs {
    if (!_cached_decoder_for_ForbiddenTACs) { _cached_decoder_for_ForbiddenTACs = $._decodeSequenceOf<TAC>(() => _decode_TAC); }
    return _cached_decoder_for_ForbiddenTACs(el);
}

let _cached_encoder_for_ForbiddenTACs: $.ASN1Encoder<ForbiddenTACs> | null = null;

/**
 * @summary Encodes a(n) ForbiddenTACs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForbiddenTACs, encoded as an ASN.1 Element.
 */
export
function _encode_ForbiddenTACs (value: ForbiddenTACs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForbiddenTACs) { _cached_encoder_for_ForbiddenTACs = $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER); }
    return _cached_encoder_for_ForbiddenTACs(value, elGetter);
}


/* eslint-enable */
