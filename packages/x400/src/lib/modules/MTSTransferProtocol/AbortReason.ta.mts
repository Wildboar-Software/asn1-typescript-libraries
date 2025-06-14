/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AbortReason */
/**
 * @summary AbortReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortReason  ::=  INTEGER {
 *   localSystemProblem(0),
 *   invalidParameter(1), -- reflectedParameter supplied
 *   unrecognizedActivity(2),
 *   temporaryProblem(3),
 *   -- the RTSE cannot accept a session for a period of time
 *   protocolError(4), -- RTSE level protocol error
 *   permanentProblem(5), --provider-abort solely in normal mode
 *   userError(6), -- user-abort solely in normal mode
 *   transferCompleted(7) -- activity can't be discarded--}
 * ```
 */
export type AbortReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION AbortReason */

/* START_OF_SYMBOL_DEFINITION AbortReason_localSystemProblem */
/**
 * @summary AbortReason_localSystemProblem
 * @constant
 * @type {number}
 */
export const AbortReason_localSystemProblem: AbortReason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_localSystemProblem */

/* START_OF_SYMBOL_DEFINITION localSystemProblem */
/**
 * @summary AbortReason_localSystemProblem
 * @constant
 * @type {number}
 */
export const localSystemProblem: AbortReason = AbortReason_localSystemProblem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION localSystemProblem */

/* START_OF_SYMBOL_DEFINITION AbortReason_invalidParameter */
/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export const AbortReason_invalidParameter: AbortReason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_invalidParameter */

/* START_OF_SYMBOL_DEFINITION invalidParameter */
/**
 * @summary AbortReason_invalidParameter
 * @constant
 * @type {number}
 */
export const invalidParameter: AbortReason = AbortReason_invalidParameter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParameter */

/* START_OF_SYMBOL_DEFINITION AbortReason_unrecognizedActivity */
/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export const AbortReason_unrecognizedActivity: AbortReason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_unrecognizedActivity */

/* START_OF_SYMBOL_DEFINITION unrecognizedActivity */
/**
 * @summary AbortReason_unrecognizedActivity
 * @constant
 * @type {number}
 */
export const unrecognizedActivity: AbortReason = AbortReason_unrecognizedActivity; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedActivity */

/* START_OF_SYMBOL_DEFINITION AbortReason_temporaryProblem */
/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export const AbortReason_temporaryProblem: AbortReason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_temporaryProblem */

/* START_OF_SYMBOL_DEFINITION temporaryProblem */
/**
 * @summary AbortReason_temporaryProblem
 * @constant
 * @type {number}
 */
export const temporaryProblem: AbortReason = AbortReason_temporaryProblem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION temporaryProblem */

/* START_OF_SYMBOL_DEFINITION AbortReason_protocolError */
/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export const AbortReason_protocolError: AbortReason = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_protocolError */

/* START_OF_SYMBOL_DEFINITION protocolError */
/**
 * @summary AbortReason_protocolError
 * @constant
 * @type {number}
 */
export const protocolError: AbortReason = AbortReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protocolError */

/* START_OF_SYMBOL_DEFINITION AbortReason_permanentProblem */
/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export const AbortReason_permanentProblem: AbortReason = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_permanentProblem */

/* START_OF_SYMBOL_DEFINITION permanentProblem */
/**
 * @summary AbortReason_permanentProblem
 * @constant
 * @type {number}
 */
export const permanentProblem: AbortReason = AbortReason_permanentProblem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permanentProblem */

/* START_OF_SYMBOL_DEFINITION AbortReason_userError */
/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export const AbortReason_userError: AbortReason = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_userError */

/* START_OF_SYMBOL_DEFINITION userError */
/**
 * @summary AbortReason_userError
 * @constant
 * @type {number}
 */
export const userError: AbortReason = AbortReason_userError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION userError */

/* START_OF_SYMBOL_DEFINITION AbortReason_transferCompleted */
/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export const AbortReason_transferCompleted: AbortReason = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbortReason_transferCompleted */

/* START_OF_SYMBOL_DEFINITION transferCompleted */
/**
 * @summary AbortReason_transferCompleted
 * @constant
 * @type {number}
 */
export const transferCompleted: AbortReason = AbortReason_transferCompleted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transferCompleted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortReason */
let _cached_decoder_for_AbortReason: $.ASN1Decoder<AbortReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortReason */

/* START_OF_SYMBOL_DEFINITION _decode_AbortReason */
/**
 * @summary Decodes an ASN.1 element into a(n) AbortReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbortReason} The decoded data structure.
 */
export function _decode_AbortReason(el: _Element) {
    if (!_cached_decoder_for_AbortReason) {
        _cached_decoder_for_AbortReason = $._decodeInteger;
    }
    return _cached_decoder_for_AbortReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbortReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortReason */
let _cached_encoder_for_AbortReason: $.ASN1Encoder<AbortReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortReason */

/* START_OF_SYMBOL_DEFINITION _encode_AbortReason */
/**
 * @summary Encodes a(n) AbortReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortReason, encoded as an ASN.1 Element.
 */
export function _encode_AbortReason(
    value: AbortReason,
    elGetter: $.ASN1Encoder<AbortReason>
) {
    if (!_cached_encoder_for_AbortReason) {
        _cached_encoder_for_AbortReason = $._encodeInteger;
    }
    return _cached_encoder_for_AbortReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbortReason */

/* eslint-enable */
