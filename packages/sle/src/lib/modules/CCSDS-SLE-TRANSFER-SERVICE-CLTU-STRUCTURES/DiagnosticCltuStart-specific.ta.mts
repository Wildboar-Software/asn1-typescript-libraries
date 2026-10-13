/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuStart-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticCltuStart_specific = INTEGER;

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_outOfService: DiagnosticCltuStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_unableToComply: DiagnosticCltuStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_productionTimeExpired: DiagnosticCltuStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const productionTimeExpired: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_invalidCltuId: DiagnosticCltuStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @constant
 * @type {number}
 */
export
const invalidCltuId: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_invalidCltuId; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticCltuStart_specific: $.ASN1Decoder<DiagnosticCltuStart_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuStart_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuStart_specific (el: _Element): DiagnosticCltuStart_specific {
    if (!_cached_decoder_for_DiagnosticCltuStart_specific) { _cached_decoder_for_DiagnosticCltuStart_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticCltuStart_specific(el);
}

let _cached_encoder_for_DiagnosticCltuStart_specific: $.ASN1Encoder<DiagnosticCltuStart_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuStart_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuStart_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuStart_specific (value: DiagnosticCltuStart_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuStart_specific) { _cached_encoder_for_DiagnosticCltuStart_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticCltuStart_specific(value, elGetter);
}


/* eslint-enable */
