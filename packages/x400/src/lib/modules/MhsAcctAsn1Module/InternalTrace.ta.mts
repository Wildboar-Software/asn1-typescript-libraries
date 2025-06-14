/* eslint-disable */
import {
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
import {
    InternalTraceInformation,
    _decode_InternalTraceInformation,
    _encode_InternalTraceInformation,
} from '../MTAAbstractService/InternalTraceInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION InternalTrace */
/**
 * @summary InternalTrace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalTrace  ::=  InternalTraceInformation
 * ```
 */
export type InternalTrace = InternalTraceInformation; // DefinedType
/* END_OF_SYMBOL_DEFINITION InternalTrace */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTrace */
let _cached_decoder_for_InternalTrace: $.ASN1Decoder<InternalTrace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTrace */

/* START_OF_SYMBOL_DEFINITION _decode_InternalTrace */
/**
 * @summary Decodes an ASN.1 element into a(n) InternalTrace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTrace} The decoded data structure.
 */
export function _decode_InternalTrace(el: _Element) {
    if (!_cached_decoder_for_InternalTrace) {
        _cached_decoder_for_InternalTrace = _decode_InternalTraceInformation;
    }
    return _cached_decoder_for_InternalTrace(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InternalTrace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTrace */
let _cached_encoder_for_InternalTrace: $.ASN1Encoder<InternalTrace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTrace */

/* START_OF_SYMBOL_DEFINITION _encode_InternalTrace */
/**
 * @summary Encodes a(n) InternalTrace into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTrace, encoded as an ASN.1 Element.
 */
export function _encode_InternalTrace(
    value: InternalTrace,
    elGetter: $.ASN1Encoder<InternalTrace>
) {
    if (!_cached_encoder_for_InternalTrace) {
        _cached_encoder_for_InternalTrace = _encode_InternalTraceInformation;
    }
    return _cached_encoder_for_InternalTrace(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InternalTrace */

/* eslint-enable */
