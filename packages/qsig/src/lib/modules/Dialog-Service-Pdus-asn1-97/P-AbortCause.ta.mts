/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary P_AbortCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * P-AbortCause  ::=  [2] IMPLICIT INTEGER {
 *     unrecognisedDseApdu(0),
 *     unrecognisedDialogId(1),
 *     badlyFormattedDseApdu(2),
 *     incorrectDseApdu(3),
 *     resourceLimitation(4)
 * } (0..255)
 * ```
 */
export
type P_AbortCause = INTEGER;

/**
 * @summary P_AbortCause_unrecognisedDseApdu
 * @constant
 * @type {number}
 */
export
const P_AbortCause_unrecognisedDseApdu: P_AbortCause = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognisedDseApdu
 * @constant
 * @type {number}
 */
export
const unrecognisedDseApdu: P_AbortCause = P_AbortCause_unrecognisedDseApdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognisedDialogId
 * @constant
 * @type {number}
 */
export
const P_AbortCause_unrecognisedDialogId: P_AbortCause = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognisedDialogId
 * @constant
 * @type {number}
 */
export
const unrecognisedDialogId: P_AbortCause = P_AbortCause_unrecognisedDialogId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_badlyFormattedDseApdu
 * @constant
 * @type {number}
 */
export
const P_AbortCause_badlyFormattedDseApdu: P_AbortCause = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_badlyFormattedDseApdu
 * @constant
 * @type {number}
 */
export
const badlyFormattedDseApdu: P_AbortCause = P_AbortCause_badlyFormattedDseApdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_incorrectDseApdu
 * @constant
 * @type {number}
 */
export
const P_AbortCause_incorrectDseApdu: P_AbortCause = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_incorrectDseApdu
 * @constant
 * @type {number}
 */
export
const incorrectDseApdu: P_AbortCause = P_AbortCause_incorrectDseApdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export
const P_AbortCause_resourceLimitation: P_AbortCause = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_resourceLimitation
 * @constant
 * @type {number}
 */
export
const resourceLimitation: P_AbortCause = P_AbortCause_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_P_AbortCause: $.ASN1Decoder<P_AbortCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) P_AbortCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_P_AbortCause (el: _Element): P_AbortCause {
    if (!_cached_decoder_for_P_AbortCause) { _cached_decoder_for_P_AbortCause = $._decode_implicit<P_AbortCause>(() => $._decodeInteger); }
    const _value = _cached_decoder_for_P_AbortCause(el);
    if ((typeof _value === "bigint" ? (_value < 0n || _value > 255n) : (_value < 0 || _value > 255))) {
        throw new ASN1OverflowError("P_AbortCause violates INTEGER constraint");
    }
    return _value;
}

let _cached_encoder_for_P_AbortCause: $.ASN1Encoder<P_AbortCause> | null = null;

/**
 * @summary Encodes a(n) P_AbortCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The P_AbortCause, encoded as an ASN.1 Element.
 */
export
function _encode_P_AbortCause (value: P_AbortCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_P_AbortCause) { _cached_encoder_for_P_AbortCause = $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_P_AbortCause(value, elGetter);
}

/* eslint-enable */
