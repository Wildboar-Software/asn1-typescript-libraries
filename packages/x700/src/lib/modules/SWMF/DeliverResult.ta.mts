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

/* START_OF_SYMBOL_DEFINITION DeliverResult */
/**
 * @summary DeliverResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverResult  ::=  INTEGER {
 *   pass(0), communicationError(1), equipmentError(2), qosError(3),
 *   accessDenied(4), notFound(5), insufficientSpace(6), alreadyDelivered(7),
 *   inProgress(8), unknown(9)}
 * ```
 */
export type DeliverResult = INTEGER;
/* END_OF_SYMBOL_DEFINITION DeliverResult */

/* START_OF_SYMBOL_DEFINITION DeliverResult_pass */
/**
 * @summary DeliverResult_pass
 * @constant
 * @type {number}
 */
export const DeliverResult_pass: DeliverResult = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_pass */

/* START_OF_SYMBOL_DEFINITION pass */
/**
 * @summary DeliverResult_pass
 * @constant
 * @type {number}
 */
export const pass: DeliverResult = DeliverResult_pass; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pass */

/* START_OF_SYMBOL_DEFINITION DeliverResult_communicationError */
/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const DeliverResult_communicationError: DeliverResult = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_communicationError */

/* START_OF_SYMBOL_DEFINITION communicationError */
/**
 * @summary DeliverResult_communicationError
 * @constant
 * @type {number}
 */
export const communicationError: DeliverResult = DeliverResult_communicationError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION communicationError */

/* START_OF_SYMBOL_DEFINITION DeliverResult_equipmentError */
/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const DeliverResult_equipmentError: DeliverResult = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_equipmentError */

/* START_OF_SYMBOL_DEFINITION equipmentError */
/**
 * @summary DeliverResult_equipmentError
 * @constant
 * @type {number}
 */
export const equipmentError: DeliverResult = DeliverResult_equipmentError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION equipmentError */

/* START_OF_SYMBOL_DEFINITION DeliverResult_qosError */
/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const DeliverResult_qosError: DeliverResult = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_qosError */

/* START_OF_SYMBOL_DEFINITION qosError */
/**
 * @summary DeliverResult_qosError
 * @constant
 * @type {number}
 */
export const qosError: DeliverResult = DeliverResult_qosError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION qosError */

/* START_OF_SYMBOL_DEFINITION DeliverResult_accessDenied */
/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const DeliverResult_accessDenied: DeliverResult = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary DeliverResult_accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: DeliverResult = DeliverResult_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION DeliverResult_notFound */
/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const DeliverResult_notFound: DeliverResult = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_notFound */

/* START_OF_SYMBOL_DEFINITION notFound */
/**
 * @summary DeliverResult_notFound
 * @constant
 * @type {number}
 */
export const notFound: DeliverResult = DeliverResult_notFound; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION notFound */

/* START_OF_SYMBOL_DEFINITION DeliverResult_insufficientSpace */
/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const DeliverResult_insufficientSpace: DeliverResult = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_insufficientSpace */

/* START_OF_SYMBOL_DEFINITION insufficientSpace */
/**
 * @summary DeliverResult_insufficientSpace
 * @constant
 * @type {number}
 */
export const insufficientSpace: DeliverResult = DeliverResult_insufficientSpace; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientSpace */

/* START_OF_SYMBOL_DEFINITION DeliverResult_alreadyDelivered */
/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const DeliverResult_alreadyDelivered: DeliverResult = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_alreadyDelivered */

/* START_OF_SYMBOL_DEFINITION alreadyDelivered */
/**
 * @summary DeliverResult_alreadyDelivered
 * @constant
 * @type {number}
 */
export const alreadyDelivered: DeliverResult = DeliverResult_alreadyDelivered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyDelivered */

/* START_OF_SYMBOL_DEFINITION DeliverResult_inProgress */
/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const DeliverResult_inProgress: DeliverResult = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_inProgress */

/* START_OF_SYMBOL_DEFINITION inProgress */
/**
 * @summary DeliverResult_inProgress
 * @constant
 * @type {number}
 */
export const inProgress: DeliverResult = DeliverResult_inProgress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inProgress */

/* START_OF_SYMBOL_DEFINITION DeliverResult_unknown */
/**
 * @summary DeliverResult_unknown
 * @constant
 * @type {number}
 */
export const DeliverResult_unknown: DeliverResult = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliverResult_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary DeliverResult_unknown
 * @constant
 * @type {number}
 */
export const unknown: DeliverResult = DeliverResult_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverResult */
let _cached_decoder_for_DeliverResult: $.ASN1Decoder<DeliverResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverResult */

/* START_OF_SYMBOL_DEFINITION _decode_DeliverResult */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliverResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverResult} The decoded data structure.
 */
export function _decode_DeliverResult(el: _Element) {
    if (!_cached_decoder_for_DeliverResult) {
        _cached_decoder_for_DeliverResult = $._decodeInteger;
    }
    return _cached_decoder_for_DeliverResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliverResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverResult */
let _cached_encoder_for_DeliverResult: $.ASN1Encoder<DeliverResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverResult */

/* START_OF_SYMBOL_DEFINITION _encode_DeliverResult */
/**
 * @summary Encodes a(n) DeliverResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverResult, encoded as an ASN.1 Element.
 */
export function _encode_DeliverResult(
    value: DeliverResult,
    elGetter: $.ASN1Encoder<DeliverResult>
) {
    if (!_cached_encoder_for_DeliverResult) {
        _cached_encoder_for_DeliverResult = $._encodeInteger;
    }
    return _cached_encoder_for_DeliverResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliverResult */

/* eslint-enable */
