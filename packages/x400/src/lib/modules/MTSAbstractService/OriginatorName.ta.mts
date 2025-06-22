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
import * as $ from '@wildboar/asn1/functional';
import {
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
/**
 * @summary OriginatorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorName  ::=  ORAddressAndOrDirectoryName
 * ```
 */
export type OriginatorName = ORAddressAndOrDirectoryName; // DefinedType

let _cached_decoder_for_OriginatorName: $.ASN1Decoder<OriginatorName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorName} The decoded data structure.
 */
export function _decode_OriginatorName(el: _Element) {
    if (!_cached_decoder_for_OriginatorName) {
        _cached_decoder_for_OriginatorName = _decode_ORAddressAndOrDirectoryName;
    }
    return _cached_decoder_for_OriginatorName(el);
}

let _cached_encoder_for_OriginatorName: $.ASN1Encoder<OriginatorName> | null = null;

/**
 * @summary Encodes a(n) OriginatorName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorName, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorName(
    value: OriginatorName,
    elGetter: $.ASN1Encoder<OriginatorName>
) {
    if (!_cached_encoder_for_OriginatorName) {
        _cached_encoder_for_OriginatorName = _encode_ORAddressAndOrDirectoryName;
    }
    return _cached_encoder_for_OriginatorName(value, elGetter);
}


/* eslint-enable */
