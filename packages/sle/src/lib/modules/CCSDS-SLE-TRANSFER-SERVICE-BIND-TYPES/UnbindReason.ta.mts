/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnbindReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnbindReason         ::=    INTEGER
 * { end                  (0)
 * , suspend              (1)
 * , versionNotSupported (2)
 * , other                (127)
 * }
 * ```
 */
export
type UnbindReason = INTEGER;

/**
 * @summary UnbindReason_end
 * @constant
 * @type {number}
 */
export
const UnbindReason_end: UnbindReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_end
 * @constant
 * @type {number}
 */
export
const end: UnbindReason = UnbindReason_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @constant
 * @type {number}
 */
export
const UnbindReason_suspend: UnbindReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_suspend
 * @constant
 * @type {number}
 */
export
const suspend: UnbindReason = UnbindReason_suspend; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @constant
 * @type {number}
 */
export
const UnbindReason_versionNotSupported: UnbindReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_versionNotSupported
 * @constant
 * @type {number}
 */
export
const versionNotSupported: UnbindReason = UnbindReason_versionNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @constant
 * @type {number}
 */
export
const UnbindReason_other: UnbindReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UnbindReason_other
 * @constant
 * @type {number}
 */
export
const other: UnbindReason = UnbindReason_other; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_UnbindReason: $.ASN1Decoder<UnbindReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnbindReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnbindReason (el: _Element): UnbindReason {
    if (!_cached_decoder_for_UnbindReason) { _cached_decoder_for_UnbindReason = $._decodeInteger; }
    return _cached_decoder_for_UnbindReason(el);
}

let _cached_encoder_for_UnbindReason: $.ASN1Encoder<UnbindReason> | null = null;

/**
 * @summary Encodes a(n) UnbindReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnbindReason, encoded as an ASN.1 Element.
 */
export
function _encode_UnbindReason (value: UnbindReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnbindReason) { _cached_encoder_for_UnbindReason = $._encodeInteger; }
    return _cached_encoder_for_UnbindReason(value, elGetter);
}


/* eslint-enable */
