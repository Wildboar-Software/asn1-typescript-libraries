/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LocalTimeStamp_winterSummerIndication {
    notProvided = 0,
    winterTime = 1,
    summerTime = 2,
}

/**
 * @summary LocalTimeStamp_winterSummerIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalTimeStamp-winterSummerIndication ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type LocalTimeStamp_winterSummerIndication = _enum_for_LocalTimeStamp_winterSummerIndication | ENUMERATED;

/**
 * @summary LocalTimeStamp_winterSummerIndication_notProvided
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_notProvided: LocalTimeStamp_winterSummerIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notProvided
 * @constant
 * @type {number}
 */
export
const notProvided: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_notProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocalTimeStamp_winterSummerIndication_winterTime
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_winterTime: LocalTimeStamp_winterSummerIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary winterTime
 * @constant
 * @type {number}
 */
export
const winterTime: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_winterTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocalTimeStamp_winterSummerIndication_summerTime
 * @constant
 * @type {number}
 */
export
const LocalTimeStamp_winterSummerIndication_summerTime: LocalTimeStamp_winterSummerIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary summerTime
 * @constant
 * @type {number}
 */
export
const summerTime: LocalTimeStamp_winterSummerIndication = LocalTimeStamp_winterSummerIndication_summerTime; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LocalTimeStamp_winterSummerIndication: $.ASN1Decoder<LocalTimeStamp_winterSummerIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalTimeStamp_winterSummerIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalTimeStamp_winterSummerIndication (el: _Element): LocalTimeStamp_winterSummerIndication {
    if (!_cached_decoder_for_LocalTimeStamp_winterSummerIndication) { _cached_decoder_for_LocalTimeStamp_winterSummerIndication = $._decodeEnumerated; }
    return _cached_decoder_for_LocalTimeStamp_winterSummerIndication(el);
}

let _cached_encoder_for_LocalTimeStamp_winterSummerIndication: $.ASN1Encoder<LocalTimeStamp_winterSummerIndication> | null = null;

/**
 * @summary Encodes a(n) LocalTimeStamp_winterSummerIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalTimeStamp_winterSummerIndication, encoded as an ASN.1 Element.
 */
export
function _encode_LocalTimeStamp_winterSummerIndication (value: LocalTimeStamp_winterSummerIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalTimeStamp_winterSummerIndication) { _cached_encoder_for_LocalTimeStamp_winterSummerIndication = $._encodeEnumerated; }
    return _cached_encoder_for_LocalTimeStamp_winterSummerIndication(value, elGetter);
}


/* eslint-enable */
