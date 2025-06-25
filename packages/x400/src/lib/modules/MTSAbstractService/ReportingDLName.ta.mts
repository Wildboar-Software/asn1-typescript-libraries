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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary ReportingDLName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingDLName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ReportingDLName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_ReportingDLName: $.ASN1Decoder<ReportingDLName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingDLName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingDLName} The decoded data structure.
 */
export function _decode_ReportingDLName(el: _Element): ReportingDLName {
    if (!_cached_decoder_for_ReportingDLName) {
        _cached_decoder_for_ReportingDLName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ReportingDLName(el);
}

let _cached_encoder_for_ReportingDLName: $.ASN1Encoder<ReportingDLName> | null = null;

/**
 * @summary Encodes a(n) ReportingDLName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingDLName, encoded as an ASN.1 Element.
 */
export function _encode_ReportingDLName(
    value: ReportingDLName,
    elGetter: $.ASN1Encoder<ReportingDLName>
): _Element {
    if (!_cached_encoder_for_ReportingDLName) {
        _cached_encoder_for_ReportingDLName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ReportingDLName(value, elGetter);
}


/* eslint-enable */
