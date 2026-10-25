/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary P_AbortCause
 * @description
 *
 * Provider reason on a DialogAbortPDU (ECMA-165 §11.3.3.3 Table 33). The
 * integer is limited to 0..255. Clause 8.4 says when a dialogue is aborted and
 * does not assign any of these cause values to those procedures. Values other
 * than the five named here are not defined.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * @description
 *
 * Named in ECMA-165 §11.3.3.3 Table 33. Clause 8.4 describes when a dialogue is
 * aborted and does not say that this cause is sent.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const P_AbortCause_unrecognisedDseApdu = 0 satisfies P_AbortCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedDseApdu
 * @description Alias of {@link P_AbortCause_unrecognisedDseApdu}.
 * @constant
 * @type {number}
 */
export
const unrecognisedDseApdu = P_AbortCause_unrecognisedDseApdu satisfies P_AbortCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_unrecognisedDialogId
 * @description
 *
 * Named in ECMA-165 §11.3.3.3 Table 33. §8.4.5 discards or aborts some
 * dialogues with an unrecognised identifier, but does not assign this cause.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const P_AbortCause_unrecognisedDialogId = 1 satisfies P_AbortCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary unrecognisedDialogId
 * @description Alias of {@link P_AbortCause_unrecognisedDialogId}.
 * @constant
 * @type {number}
 */
export
const unrecognisedDialogId = P_AbortCause_unrecognisedDialogId satisfies P_AbortCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_badlyFormattedDseApdu
 * @description
 *
 * Named in ECMA-165 §11.3.3.3 Table 33. §8.4.5 discards an incorrectly
 * formatted DSE APDU and does not assign this cause.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const P_AbortCause_badlyFormattedDseApdu = 2 satisfies P_AbortCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary badlyFormattedDseApdu
 * @description Alias of {@link P_AbortCause_badlyFormattedDseApdu}.
 * @constant
 * @type {number}
 */
export
const badlyFormattedDseApdu = P_AbortCause_badlyFormattedDseApdu satisfies P_AbortCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_incorrectDseApdu
 * @description
 *
 * Named in ECMA-165 §11.3.3.3 Table 33. Clause 8.4 does not define this cause
 * or say when it is sent.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const P_AbortCause_incorrectDseApdu = 3 satisfies P_AbortCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary incorrectDseApdu
 * @description Alias of {@link P_AbortCause_incorrectDseApdu}.
 * @constant
 * @type {number}
 */
export
const incorrectDseApdu = P_AbortCause_incorrectDseApdu satisfies P_AbortCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary P_AbortCause_resourceLimitation
 * @description
 *
 * Named in ECMA-165 §11.3.3.3 Table 33. Clause 8.4 does not define this cause.
 * It is distinct from the ROSE invoke problem of the same name (Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const P_AbortCause_resourceLimitation = 4 satisfies P_AbortCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary resourceLimitation
 * @description Alias of {@link P_AbortCause_resourceLimitation}.
 * @constant
 * @type {number}
 */
export
const resourceLimitation = P_AbortCause_resourceLimitation satisfies P_AbortCause; /* SHORT_NAMED_INTEGER_VALUE */

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
