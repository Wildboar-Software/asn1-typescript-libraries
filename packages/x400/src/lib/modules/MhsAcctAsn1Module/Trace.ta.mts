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
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
/**
 * @summary Trace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Trace  ::=  TraceInformation
 * ```
 */
export type Trace = TraceInformation; // DefinedType

let _cached_decoder_for_Trace: $.ASN1Decoder<Trace> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Trace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Trace} The decoded data structure.
 */
export function _decode_Trace(el: _Element): Trace {
    if (!_cached_decoder_for_Trace) {
        _cached_decoder_for_Trace = _decode_TraceInformation;
    }
    return _cached_decoder_for_Trace(el);
}

let _cached_encoder_for_Trace: $.ASN1Encoder<Trace> | null = null;

/**
 * @summary Encodes a(n) Trace into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trace, encoded as an ASN.1 Element.
 */
export function _encode_Trace(value: Trace, elGetter: $.ASN1Encoder<Trace>): _Element {
    if (!_cached_encoder_for_Trace) {
        _cached_encoder_for_Trace = _encode_TraceInformation;
    }
    return _cached_encoder_for_Trace(value, elGetter);
}


/* eslint-enable */
