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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    InternalTraceInformation,
    _decode_InternalTraceInformation,
    _encode_InternalTraceInformation,
} from '../MTAAbstractService/InternalTraceInformation.ta.mjs';
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

let _cached_decoder_for_InternalTrace: $.ASN1Decoder<InternalTrace> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternalTrace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTrace} The decoded data structure.
 */
export function _decode_InternalTrace(el: _Element): InternalTrace {
    if (!_cached_decoder_for_InternalTrace) {
        _cached_decoder_for_InternalTrace = _decode_InternalTraceInformation;
    }
    return _cached_decoder_for_InternalTrace(el);
}

let _cached_encoder_for_InternalTrace: $.ASN1Encoder<InternalTrace> | null = null;

/**
 * @summary Encodes a(n) InternalTrace into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTrace, encoded as an ASN.1 Element.
 */
export function _encode_InternalTrace(
    value: InternalTrace,
    elGetter: $.ASN1Encoder<InternalTrace>
): _Element {
    if (!_cached_encoder_for_InternalTrace) {
        _cached_encoder_for_InternalTrace = _encode_InternalTraceInformation;
    }
    return _cached_encoder_for_InternalTrace(value, elGetter);
}


/* eslint-enable */
