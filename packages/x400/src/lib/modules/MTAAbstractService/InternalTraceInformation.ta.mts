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
    InternalTraceInformationElement,
    _decode_InternalTraceInformationElement,
    _encode_InternalTraceInformationElement,
} from '../MTAAbstractService/InternalTraceInformationElement.ta.mjs';
/**
 * @summary InternalTraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalTraceInformation  ::=
 *   SEQUENCE SIZE (1..ub-transfers) OF InternalTraceInformationElement
 * ```
 */
export type InternalTraceInformation = InternalTraceInformationElement[]; // SequenceOfType

let _cached_decoder_for_InternalTraceInformation: $.ASN1Decoder<InternalTraceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternalTraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTraceInformation} The decoded data structure.
 */
export function _decode_InternalTraceInformation(el: _Element) {
    if (!_cached_decoder_for_InternalTraceInformation) {
        _cached_decoder_for_InternalTraceInformation = $._decodeSequenceOf<InternalTraceInformationElement>(
            () => _decode_InternalTraceInformationElement
        );
    }
    return _cached_decoder_for_InternalTraceInformation(el);
}

let _cached_encoder_for_InternalTraceInformation: $.ASN1Encoder<InternalTraceInformation> | null = null;

/**
 * @summary Encodes a(n) InternalTraceInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_InternalTraceInformation(
    value: InternalTraceInformation,
    elGetter: $.ASN1Encoder<InternalTraceInformation>
) {
    if (!_cached_encoder_for_InternalTraceInformation) {
        _cached_encoder_for_InternalTraceInformation = $._encodeSequenceOf<InternalTraceInformationElement>(
            () => _encode_InternalTraceInformationElement,
            $.BER
        );
    }
    return _cached_encoder_for_InternalTraceInformation(value, elGetter);
}


/* eslint-enable */
