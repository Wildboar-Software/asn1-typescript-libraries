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
 * @summary ElectronicMailAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElectronicMailAddress  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ElectronicMailAddress = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_ElectronicMailAddress: $.ASN1Decoder<ElectronicMailAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElectronicMailAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ElectronicMailAddress} The decoded data structure.
 */
export function _decode_ElectronicMailAddress(el: _Element): ElectronicMailAddress {
    if (!_cached_decoder_for_ElectronicMailAddress) {
        _cached_decoder_for_ElectronicMailAddress = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ElectronicMailAddress(el);
}

let _cached_encoder_for_ElectronicMailAddress: $.ASN1Encoder<ElectronicMailAddress> | null = null;

/**
 * @summary Encodes a(n) ElectronicMailAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElectronicMailAddress, encoded as an ASN.1 Element.
 */
export function _encode_ElectronicMailAddress(
    value: ElectronicMailAddress,
    elGetter: $.ASN1Encoder<ElectronicMailAddress>
): _Element {
    if (!_cached_encoder_for_ElectronicMailAddress) {
        _cached_encoder_for_ElectronicMailAddress = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ElectronicMailAddress(value, elGetter);
}


/* eslint-enable */
