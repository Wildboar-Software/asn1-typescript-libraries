/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RIParametersDeprecated_rIType {
    normal = 0,
    off_line = 1,
    partTimeTerminal = 2,
}

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * @summary RIParametersDeprecated_rIType_normal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_normal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RIParametersDeprecated_rIType_off_line
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_off_line: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.off_line; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off_line
 * @constant
 * @type {number}
 */
export
const off_line: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.off_line; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RIParametersDeprecated_rIType_partTimeTerminal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_partTimeTerminal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.partTimeTerminal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary partTimeTerminal
 * @constant
 * @type {number}
 */
export
const partTimeTerminal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.partTimeTerminal; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RIParametersDeprecated_rIType: $.ASN1Decoder<RIParametersDeprecated_rIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIParametersDeprecated_rIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIParametersDeprecated_rIType (el: _Element): RIParametersDeprecated_rIType {
    if (!_cached_decoder_for_RIParametersDeprecated_rIType) { _cached_decoder_for_RIParametersDeprecated_rIType = $._decodeEnumerated; }
    return _cached_decoder_for_RIParametersDeprecated_rIType(el);
}

let _cached_encoder_for_RIParametersDeprecated_rIType: $.ASN1Encoder<RIParametersDeprecated_rIType> | null = null;

/**
 * @summary Encodes a(n) RIParametersDeprecated_rIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIParametersDeprecated_rIType, encoded as an ASN.1 Element.
 */
export
function _encode_RIParametersDeprecated_rIType (value: RIParametersDeprecated_rIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIParametersDeprecated_rIType) { _cached_encoder_for_RIParametersDeprecated_rIType = $._encodeEnumerated; }
    return _cached_encoder_for_RIParametersDeprecated_rIType(value, elGetter);
}


/* eslint-enable */
