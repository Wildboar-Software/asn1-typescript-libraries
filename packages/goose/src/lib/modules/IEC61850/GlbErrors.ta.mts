/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlbErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlbErrors  ::=  INTEGER {
 *     other(0),
 *     unknownControlBlock(1),
 *     responseTooLarge(2),
 *     controlBlockConfigurationError(3) --,
 * --    ...
 * }
 * ```
 */
export
type GlbErrors = INTEGER;

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const GlbErrors_other: GlbErrors = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const other: GlbErrors = GlbErrors_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const GlbErrors_unknownControlBlock: GlbErrors = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const unknownControlBlock: GlbErrors = GlbErrors_unknownControlBlock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const GlbErrors_responseTooLarge: GlbErrors = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const responseTooLarge: GlbErrors = GlbErrors_responseTooLarge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const GlbErrors_controlBlockConfigurationError: GlbErrors = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const controlBlockConfigurationError: GlbErrors = GlbErrors_controlBlockConfigurationError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GlbErrors: $.ASN1Decoder<GlbErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlbErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlbErrors (el: _Element): GlbErrors {
    if (!_cached_decoder_for_GlbErrors) { _cached_decoder_for_GlbErrors = $._decodeInteger; }
    return _cached_decoder_for_GlbErrors(el);
}

let _cached_encoder_for_GlbErrors: $.ASN1Encoder<GlbErrors> | null = null;

/**
 * @summary Encodes a(n) GlbErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlbErrors, encoded as an ASN.1 Element.
 */
export
function _encode_GlbErrors (value: GlbErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlbErrors) { _cached_encoder_for_GlbErrors = $._encodeInteger; }
    return _cached_encoder_for_GlbErrors(value, elGetter);
}


/* eslint-enable */
