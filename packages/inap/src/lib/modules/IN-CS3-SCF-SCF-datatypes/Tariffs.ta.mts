/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Tariff, _decode_Tariff, _encode_Tariff } from "../IN-CS3-SCF-SCF-datatypes/Tariff.ta.mjs";
// export { Tariff, _decode_Tariff, _encode_Tariff } from "../IN-CS3-SCF-SCF-datatypes/Tariff.ta.mjs";


/**
 * @summary Tariffs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tariffs  ::=  SEQUENCE OF Tariff
 * ```
 */
export
type Tariffs = Tariff[]; // SequenceOfType

let _cached_decoder_for_Tariffs: $.ASN1Decoder<Tariffs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tariffs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tariffs (el: _Element): Tariffs {
    if (!_cached_decoder_for_Tariffs) { _cached_decoder_for_Tariffs = $._decodeSequenceOf<Tariff>(() => _decode_Tariff); }
    return _cached_decoder_for_Tariffs(el);
}

let _cached_encoder_for_Tariffs: $.ASN1Encoder<Tariffs> | null = null;

/**
 * @summary Encodes a(n) Tariffs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tariffs, encoded as an ASN.1 Element.
 */
export
function _encode_Tariffs (value: Tariffs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tariffs) { _cached_encoder_for_Tariffs = $._encodeSequenceOf<Tariff>(() => _encode_Tariff, $.BER); }
    return _cached_encoder_for_Tariffs(value, elGetter);
}


/* eslint-enable */
