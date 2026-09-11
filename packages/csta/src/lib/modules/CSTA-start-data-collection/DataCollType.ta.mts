/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DataCollType
 * @description
 *
 * `digits` (DTMF/rotary) or `telTones` (telephony tones) (ECMA-269 §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DataCollType {
    digits = 0,
    telTones = 1,
}

/**
 * @summary DataCollType
 * @description
 *
 * `digits` (DTMF/rotary) or `telTones` (telephony tones) (ECMA-269 §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
type DataCollType = _enum_for_DataCollType;

/**
 * @summary DataCollType
 * @description
 *
 * `digits` (DTMF/rotary) or `telTones` (telephony tones) (ECMA-269 §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollType  ::=  ENUMERATED
 * {    digits                (0),
 *     telTones            (1) }
 * ```
 * 
 * @enum {number}
 */
export
const DataCollType = _enum_for_DataCollType;

/**
 * @summary DataCollType_digits
 * @description
 *
 * DTMF/rotary pulse digits (ECMA-269 §25.1.5.1).
 *
 * @constant
 * @type {number}
 */
export
const DataCollType_digits: DataCollType = DataCollType.digits; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digits
 * @description
 *
 * DTMF/rotary pulse digits (ECMA-269 §25.1.5.1).
 *
 * @constant
 * @type {number}
 */
export
const digits: DataCollType = DataCollType.digits; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataCollType_telTones
 * @description
 *
 * Telephony tones (ECMA-269 §25.1.5.1).
 *
 * @constant
 * @type {number}
 */
export
const DataCollType_telTones: DataCollType = DataCollType.telTones; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary telTones
 * @description
 *
 * Telephony tones (ECMA-269 §25.1.5.1).
 *
 * @constant
 * @type {number}
 */
export
const telTones: DataCollType = DataCollType.telTones; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DataCollType: $.ASN1Decoder<DataCollType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollType (el: _Element): DataCollType {
    if (!_cached_decoder_for_DataCollType) { _cached_decoder_for_DataCollType = $._decodeEnumerated; }
    return _cached_decoder_for_DataCollType(el);
}

let _cached_encoder_for_DataCollType: $.ASN1Encoder<DataCollType> | null = null;

/**
 * @summary Encodes a(n) DataCollType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollType, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollType (value: DataCollType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollType) { _cached_encoder_for_DataCollType = $._encodeEnumerated; }
    return _cached_encoder_for_DataCollType(value, elGetter);
}


/* eslint-enable */
