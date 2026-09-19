/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplyRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyRestrictions  ::=  [152] IMPLICIT BIT STRING{
 *         code(0),
 *         toll(1)
 *     }
 * ```
 */
export
type ApplyRestrictions = BIT_STRING;

/**
 * @summary ApplyRestrictions_code
 * @constant
 */
export
const ApplyRestrictions_code: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary code
 * @constant
 */
export
const code: number = ApplyRestrictions_code; /* SHORT_NAMED_BIT */

/**
 * @summary ApplyRestrictions_toll
 * @constant
 */
export
const ApplyRestrictions_toll: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary toll
 * @constant
 */
export
const toll: number = ApplyRestrictions_toll; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ApplyRestrictions: $.ASN1Decoder<ApplyRestrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyRestrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyRestrictions (el: _Element): ApplyRestrictions {
    if (!_cached_decoder_for_ApplyRestrictions) { _cached_decoder_for_ApplyRestrictions = $._decode_implicit<ApplyRestrictions>(() => $._decodeBitString); }
    return _cached_decoder_for_ApplyRestrictions(el);
}

let _cached_encoder_for_ApplyRestrictions: $.ASN1Encoder<ApplyRestrictions> | null = null;

/**
 * @summary Encodes a(n) ApplyRestrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyRestrictions (value: ApplyRestrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyRestrictions) { _cached_encoder_for_ApplyRestrictions = $._encode_implicit(_TagClass.context, 152, () => $._encodeBitString, $.BER); }
    return _cached_encoder_for_ApplyRestrictions(value, elGetter);
}


/* eslint-enable */
