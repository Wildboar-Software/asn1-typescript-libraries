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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary ReportDestinationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDestinationName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ReportDestinationName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_ReportDestinationName: $.ASN1Decoder<ReportDestinationName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportDestinationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDestinationName} The decoded data structure.
 */
export function _decode_ReportDestinationName(el: _Element) {
    if (!_cached_decoder_for_ReportDestinationName) {
        _cached_decoder_for_ReportDestinationName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ReportDestinationName(el);
}

let _cached_encoder_for_ReportDestinationName: $.ASN1Encoder<ReportDestinationName> | null = null;

/**
 * @summary Encodes a(n) ReportDestinationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDestinationName, encoded as an ASN.1 Element.
 */
export function _encode_ReportDestinationName(
    value: ReportDestinationName,
    elGetter: $.ASN1Encoder<ReportDestinationName>
) {
    if (!_cached_encoder_for_ReportDestinationName) {
        _cached_encoder_for_ReportDestinationName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ReportDestinationName(value, elGetter);
}


/* eslint-enable */
