/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Ct {
    voicebandInformation = 0,
    circuitModeData = 1,
}

/**
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Ct = _enum_for_Ct;

/**
 * @summary Ct
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ct  ::=  ENUMERATED{
 *         voicebandInformation(0),
 *         circuitModeData(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Ct = _enum_for_Ct;

/**
 * @summary Ct_voicebandInformation
 * @constant
 * @type {number}
 */
export
const Ct_voicebandInformation: Ct = Ct.voicebandInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voicebandInformation
 * @constant
 * @type {number}
 */
export
const voicebandInformation: Ct = Ct.voicebandInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Ct_circuitModeData
 * @constant
 * @type {number}
 */
export
const Ct_circuitModeData: Ct = Ct.circuitModeData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary circuitModeData
 * @constant
 * @type {number}
 */
export
const circuitModeData: Ct = Ct.circuitModeData; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Ct: $.ASN1Decoder<Ct> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ct
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ct (el: _Element): Ct {
    if (!_cached_decoder_for_Ct) { _cached_decoder_for_Ct = $._decodeEnumerated; }
    return _cached_decoder_for_Ct(el);
}

let _cached_encoder_for_Ct: $.ASN1Encoder<Ct> | null = null;

/**
 * @summary Encodes a(n) Ct into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ct, encoded as an ASN.1 Element.
 */
export
function _encode_Ct (value: Ct, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ct) { _cached_encoder_for_Ct = $._encodeEnumerated; }
    return _cached_encoder_for_Ct(value, elGetter);
}


/* eslint-enable */
