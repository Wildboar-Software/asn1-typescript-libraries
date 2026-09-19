/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LogotypeImageResolution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeImageResolution  ::=  CHOICE {
 *    numBits         [1] INTEGER,   -- Resolution in bits
 *    tableSize       [2] INTEGER }
 * ```
 */
export
type LogotypeImageResolution =
    { numBits: INTEGER } /* CHOICE_ALT_ROOT */
    | { tableSize: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogotypeImageResolution: $.ASN1Decoder<LogotypeImageResolution> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeImageResolution
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeImageResolution (el: _Element): LogotypeImageResolution {
    if (!_cached_decoder_for_LogotypeImageResolution) { _cached_decoder_for_LogotypeImageResolution = $._decode_inextensible_choice<LogotypeImageResolution>({
    "CONTEXT 1": [ "numBits", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "tableSize", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_LogotypeImageResolution(el);
}

let _cached_encoder_for_LogotypeImageResolution: $.ASN1Encoder<LogotypeImageResolution> | null = null;

/**
 * @summary Encodes a(n) LogotypeImageResolution into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeImageResolution, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeImageResolution (value: LogotypeImageResolution, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeImageResolution) { _cached_encoder_for_LogotypeImageResolution = $._encode_choice<LogotypeImageResolution>({
    "numBits": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "tableSize": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogotypeImageResolution(value, elGetter);
}


/* eslint-enable */
