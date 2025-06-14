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

/* START_OF_SYMBOL_DEFINITION ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  INTEGER {busy(0), unavailable(1), unwilling-to-perform(2)
 * }(0..ub-error-reasons)
 * ```
 */
export type ServiceProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy: ServiceProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const busy: ServiceProblem = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */

/* START_OF_SYMBOL_DEFINITION unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const unavailable: ServiceProblem = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unwilling_to_perform */
/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwilling_to_perform: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unwilling_to_perform */

/* START_OF_SYMBOL_DEFINITION unwilling_to_perform */
/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const unwilling_to_perform: ServiceProblem = ServiceProblem_unwilling_to_perform; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unwilling_to_perform */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */
let _cached_decoder_for_ServiceProblem: $.ASN1Decoder<ServiceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceProblem} The decoded data structure.
 */
export function _decode_ServiceProblem(el: _Element) {
    if (!_cached_decoder_for_ServiceProblem) {
        _cached_decoder_for_ServiceProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ServiceProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */
let _cached_encoder_for_ServiceProblem: $.ASN1Encoder<ServiceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceProblem */
/**
 * @summary Encodes a(n) ServiceProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceProblem, encoded as an ASN.1 Element.
 */
export function _encode_ServiceProblem(
    value: ServiceProblem,
    elGetter: $.ASN1Encoder<ServiceProblem>
) {
    if (!_cached_encoder_for_ServiceProblem) {
        _cached_encoder_for_ServiceProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ServiceProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceProblem */

/* eslint-enable */
