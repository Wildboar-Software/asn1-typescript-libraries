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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORAddressAndOrDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndOrDirectoryName  ::=  ORName
 * ```
 */
export type ORAddressAndOrDirectoryName = ORName; // DefinedType

let _cached_decoder_for_ORAddressAndOrDirectoryName: $.ASN1Decoder<ORAddressAndOrDirectoryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndOrDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndOrDirectoryName} The decoded data structure.
 */
export function _decode_ORAddressAndOrDirectoryName(el: _Element): ORAddressAndOrDirectoryName {
    if (!_cached_decoder_for_ORAddressAndOrDirectoryName) {
        _cached_decoder_for_ORAddressAndOrDirectoryName = _decode_ORName;
    }
    return _cached_decoder_for_ORAddressAndOrDirectoryName(el);
}

let _cached_encoder_for_ORAddressAndOrDirectoryName: $.ASN1Encoder<ORAddressAndOrDirectoryName> | null = null;

/**
 * @summary Encodes a(n) ORAddressAndOrDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndOrDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressAndOrDirectoryName(
    value: ORAddressAndOrDirectoryName,
    elGetter: $.ASN1Encoder<ORAddressAndOrDirectoryName>
): _Element {
    if (!_cached_encoder_for_ORAddressAndOrDirectoryName) {
        _cached_encoder_for_ORAddressAndOrDirectoryName = _encode_ORName;
    }
    return _cached_encoder_for_ORAddressAndOrDirectoryName(value, elGetter);
}


/* eslint-enable */
