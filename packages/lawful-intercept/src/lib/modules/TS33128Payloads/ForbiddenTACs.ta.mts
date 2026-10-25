/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary ForbiddenTACs
 * @description
 * 
 * Contains the list of forbidden TACs.
 *
 * 3GPP TS 33.128, clause 8.4.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    const _value = _cached_decoder_for_ForbiddenTACs(el);
    if (_value.length < 1) {
        throw new ASN1SizeError("ForbiddenTACs violates SIZE constraint");
    }
    return _value;
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
