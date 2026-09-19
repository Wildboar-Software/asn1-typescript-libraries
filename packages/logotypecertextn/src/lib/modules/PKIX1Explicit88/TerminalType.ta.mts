/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TerminalType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalType  ::=  INTEGER {
 *    telex (3),
 *    teletex (4),
 *    g3-facsimile (5),
 *    g4-facsimile (6),
 *    ia5-terminal (7),
 *    videotex (8) } (0..ub-integer-options)
 * ```
 */
export
type TerminalType = INTEGER;

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export
const TerminalType_telex: TerminalType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_telex
 * @constant
 * @type {number}
 */
export
const telex: TerminalType = TerminalType_telex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export
const TerminalType_teletex: TerminalType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_teletex
 * @constant
 * @type {number}
 */
export
const teletex: TerminalType = TerminalType_teletex; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export
const TerminalType_g3_facsimile: TerminalType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g3_facsimile
 * @constant
 * @type {number}
 */
export
const g3_facsimile: TerminalType = TerminalType_g3_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export
const TerminalType_g4_facsimile: TerminalType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_g4_facsimile
 * @constant
 * @type {number}
 */
export
const g4_facsimile: TerminalType = TerminalType_g4_facsimile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export
const TerminalType_ia5_terminal: TerminalType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_ia5_terminal
 * @constant
 * @type {number}
 */
export
const ia5_terminal: TerminalType = TerminalType_ia5_terminal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export
const TerminalType_videotex: TerminalType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TerminalType_videotex
 * @constant
 * @type {number}
 */
export
const videotex: TerminalType = TerminalType_videotex; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TerminalType: $.ASN1Decoder<TerminalType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalType (el: _Element): TerminalType {
    if (!_cached_decoder_for_TerminalType) { _cached_decoder_for_TerminalType = $._decodeInteger; }
    return _cached_decoder_for_TerminalType(el);
}

let _cached_encoder_for_TerminalType: $.ASN1Encoder<TerminalType> | null = null;

/**
 * @summary Encodes a(n) TerminalType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalType, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalType (value: TerminalType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalType) { _cached_encoder_for_TerminalType = $._encodeInteger; }
    return _cached_encoder_for_TerminalType(value, elGetter);
}


/* eslint-enable */
