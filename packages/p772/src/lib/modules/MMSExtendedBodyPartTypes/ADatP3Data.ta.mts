/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADatP3Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADatP3Data  ::=  CHOICE {
 *   lineOriented  [0] IMPLICIT IA5String,
 *   setOriented   [1] IMPLICIT SEQUENCE OF IA5String}
 * ```
 */
export
type ADatP3Data =
    { lineOriented: IA5String } /* CHOICE_ALT_ROOT */
    | { setOriented: IA5String[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ADatP3Data: $.ASN1Decoder<ADatP3Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ADatP3Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ADatP3Data (el: _Element): ADatP3Data {
    if (!_cached_decoder_for_ADatP3Data) { _cached_decoder_for_ADatP3Data = $._decode_inextensible_choice<ADatP3Data>({
    "CONTEXT 0": [ "lineOriented", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 1": [ "setOriented", $._decode_implicit<IA5String[]>(() => $._decodeSequenceOf<IA5String>(() => $._decodeIA5String)) ]
}); }
    return _cached_decoder_for_ADatP3Data(el);
}

let _cached_encoder_for_ADatP3Data: $.ASN1Encoder<ADatP3Data> | null = null;

/**
 * @summary Encodes a(n) ADatP3Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ADatP3Data, encoded as an ASN.1 Element.
 */
export
function _encode_ADatP3Data (value: ADatP3Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ADatP3Data) { _cached_encoder_for_ADatP3Data = $._encode_choice<ADatP3Data>({
    "lineOriented": $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER),
    "setOriented": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<IA5String>(() => $._encodeIA5String, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ADatP3Data(value, elGetter);
}


/* eslint-enable */
