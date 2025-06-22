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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary OriginallyIntendedRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginallyIntendedRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type OriginallyIntendedRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_OriginallyIntendedRecipientName: $.ASN1Decoder<OriginallyIntendedRecipientName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginallyIntendedRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginallyIntendedRecipientName} The decoded data structure.
 */
export function _decode_OriginallyIntendedRecipientName(el: _Element) {
    if (!_cached_decoder_for_OriginallyIntendedRecipientName) {
        _cached_decoder_for_OriginallyIntendedRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OriginallyIntendedRecipientName(el);
}

let _cached_encoder_for_OriginallyIntendedRecipientName: $.ASN1Encoder<OriginallyIntendedRecipientName> | null = null;

/**
 * @summary Encodes a(n) OriginallyIntendedRecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginallyIntendedRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_OriginallyIntendedRecipientName(
    value: OriginallyIntendedRecipientName,
    elGetter: $.ASN1Encoder<OriginallyIntendedRecipientName>
) {
    if (!_cached_encoder_for_OriginallyIntendedRecipientName) {
        _cached_encoder_for_OriginallyIntendedRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OriginallyIntendedRecipientName(value, elGetter);
}


/* eslint-enable */
