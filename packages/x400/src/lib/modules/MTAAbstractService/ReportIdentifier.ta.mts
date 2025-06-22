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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/**
 * @summary ReportIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportIdentifier  ::=  MTSIdentifier
 * ```
 */
export type ReportIdentifier = MTSIdentifier; // DefinedType

let _cached_decoder_for_ReportIdentifier: $.ASN1Decoder<ReportIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportIdentifier} The decoded data structure.
 */
export function _decode_ReportIdentifier(el: _Element) {
    if (!_cached_decoder_for_ReportIdentifier) {
        _cached_decoder_for_ReportIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ReportIdentifier(el);
}

let _cached_encoder_for_ReportIdentifier: $.ASN1Encoder<ReportIdentifier> | null = null;

/**
 * @summary Encodes a(n) ReportIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ReportIdentifier(
    value: ReportIdentifier,
    elGetter: $.ASN1Encoder<ReportIdentifier>
) {
    if (!_cached_encoder_for_ReportIdentifier) {
        _cached_encoder_for_ReportIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ReportIdentifier(value, elGetter);
}


/* eslint-enable */
