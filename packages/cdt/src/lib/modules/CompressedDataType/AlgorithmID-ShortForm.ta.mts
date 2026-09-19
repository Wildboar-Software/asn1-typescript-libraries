/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlgorithmID_ShortForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlgorithmID-ShortForm  ::=  INTEGER  {
 *     zlibCompress (0) }
 * ```
 */
export
type AlgorithmID_ShortForm = INTEGER;

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @constant
 * @type {number}
 */
export
const AlgorithmID_ShortForm_zlibCompress: AlgorithmID_ShortForm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlgorithmID_ShortForm_zlibCompress
 * @constant
 * @type {number}
 */
export
const zlibCompress: AlgorithmID_ShortForm = AlgorithmID_ShortForm_zlibCompress; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AlgorithmID_ShortForm: $.ASN1Decoder<AlgorithmID_ShortForm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmID_ShortForm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlgorithmID_ShortForm (el: _Element): AlgorithmID_ShortForm {
    if (!_cached_decoder_for_AlgorithmID_ShortForm) { _cached_decoder_for_AlgorithmID_ShortForm = $._decodeInteger; }
    return _cached_decoder_for_AlgorithmID_ShortForm(el);
}

let _cached_encoder_for_AlgorithmID_ShortForm: $.ASN1Encoder<AlgorithmID_ShortForm> | null = null;

/**
 * @summary Encodes a(n) AlgorithmID_ShortForm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmID_ShortForm, encoded as an ASN.1 Element.
 */
export
function _encode_AlgorithmID_ShortForm (value: AlgorithmID_ShortForm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlgorithmID_ShortForm) { _cached_encoder_for_AlgorithmID_ShortForm = $._encodeInteger; }
    return _cached_encoder_for_AlgorithmID_ShortForm(value, elGetter);
}


/* eslint-enable */
