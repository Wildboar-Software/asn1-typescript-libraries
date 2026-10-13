/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspStart-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspStart_specific = INTEGER;

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_outOfService: DiagnosticFspStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticFspStart_specific = DiagnosticFspStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_unableToComply: DiagnosticFspStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticFspStart_specific = DiagnosticFspStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_productionTimeExpired: DiagnosticFspStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const productionTimeExpired: DiagnosticFspStart_specific = DiagnosticFspStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticFspStart_specific: $.ASN1Decoder<DiagnosticFspStart_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspStart_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspStart_specific (el: _Element): DiagnosticFspStart_specific {
    if (!_cached_decoder_for_DiagnosticFspStart_specific) { _cached_decoder_for_DiagnosticFspStart_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticFspStart_specific(el);
}

let _cached_encoder_for_DiagnosticFspStart_specific: $.ASN1Encoder<DiagnosticFspStart_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspStart_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspStart_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspStart_specific (value: DiagnosticFspStart_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspStart_specific) { _cached_encoder_for_DiagnosticFspStart_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticFspStart_specific(value, elGetter);
}


/* eslint-enable */
