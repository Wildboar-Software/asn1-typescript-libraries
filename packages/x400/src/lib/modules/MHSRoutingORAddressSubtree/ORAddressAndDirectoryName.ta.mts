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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORAddressAndDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndDirectoryName  ::=
 *   ORName
 * ```
 */
export type ORAddressAndDirectoryName = ORName; // DefinedType

let _cached_decoder_for_ORAddressAndDirectoryName: $.ASN1Decoder<ORAddressAndDirectoryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndDirectoryName} The decoded data structure.
 */
export function _decode_ORAddressAndDirectoryName(el: _Element) {
    if (!_cached_decoder_for_ORAddressAndDirectoryName) {
        _cached_decoder_for_ORAddressAndDirectoryName = _decode_ORName;
    }
    return _cached_decoder_for_ORAddressAndDirectoryName(el);
}

let _cached_encoder_for_ORAddressAndDirectoryName: $.ASN1Encoder<ORAddressAndDirectoryName> | null = null;

/**
 * @summary Encodes a(n) ORAddressAndDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressAndDirectoryName(
    value: ORAddressAndDirectoryName,
    elGetter: $.ASN1Encoder<ORAddressAndDirectoryName>
) {
    if (!_cached_encoder_for_ORAddressAndDirectoryName) {
        _cached_encoder_for_ORAddressAndDirectoryName = _encode_ORName;
    }
    return _cached_encoder_for_ORAddressAndDirectoryName(value, elGetter);
}


/* eslint-enable */
