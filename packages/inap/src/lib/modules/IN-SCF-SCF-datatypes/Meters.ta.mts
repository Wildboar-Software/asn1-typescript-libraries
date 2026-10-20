/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Meter, _decode_Meter, _encode_Meter } from "../IN-SCF-SCF-datatypes/Meter.ta.mjs";
// export { Meter, _decode_Meter, _encode_Meter } from "../IN-SCF-SCF-datatypes/Meter.ta.mjs";


/**
 * @summary Meters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Meters  ::=  SEQUENCE OF Meter
 * ```
 */
export
type Meters = Meter[]; // SequenceOfType

let _cached_decoder_for_Meters: $.ASN1Decoder<Meters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Meters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Meters (el: _Element): Meters {
    if (!_cached_decoder_for_Meters) { _cached_decoder_for_Meters = $._decodeSequenceOf<Meter>(() => _decode_Meter); }
    return _cached_decoder_for_Meters(el);
}

let _cached_encoder_for_Meters: $.ASN1Encoder<Meters> | null = null;

/**
 * @summary Encodes a(n) Meters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Meters, encoded as an ASN.1 Element.
 */
export
function _encode_Meters (value: Meters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Meters) { _cached_encoder_for_Meters = $._encodeSequenceOf<Meter>(() => _encode_Meter, $.BER); }
    return _cached_encoder_for_Meters(value, elGetter);
}


/* eslint-enable */
