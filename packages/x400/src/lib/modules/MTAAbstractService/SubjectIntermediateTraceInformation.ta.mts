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
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
/**
 * @summary SubjectIntermediateTraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectIntermediateTraceInformation  ::=  TraceInformation
 * ```
 */
export type SubjectIntermediateTraceInformation = TraceInformation; // DefinedType

let _cached_decoder_for_SubjectIntermediateTraceInformation: $.ASN1Decoder<SubjectIntermediateTraceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectIntermediateTraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectIntermediateTraceInformation} The decoded data structure.
 */
export function _decode_SubjectIntermediateTraceInformation(el: _Element) {
    if (!_cached_decoder_for_SubjectIntermediateTraceInformation) {
        _cached_decoder_for_SubjectIntermediateTraceInformation = _decode_TraceInformation;
    }
    return _cached_decoder_for_SubjectIntermediateTraceInformation(el);
}

let _cached_encoder_for_SubjectIntermediateTraceInformation: $.ASN1Encoder<SubjectIntermediateTraceInformation> | null = null;

/**
 * @summary Encodes a(n) SubjectIntermediateTraceInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectIntermediateTraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_SubjectIntermediateTraceInformation(
    value: SubjectIntermediateTraceInformation,
    elGetter: $.ASN1Encoder<SubjectIntermediateTraceInformation>
) {
    if (!_cached_encoder_for_SubjectIntermediateTraceInformation) {
        _cached_encoder_for_SubjectIntermediateTraceInformation = _encode_TraceInformation;
    }
    return _cached_encoder_for_SubjectIntermediateTraceInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
