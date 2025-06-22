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
 * @summary RecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientName  ::=  ORAddressAndOrDirectoryName
 * ```
 */
export type RecipientName = ORAddressAndOrDirectoryName; // DefinedType

let _cached_decoder_for_RecipientName: $.ASN1Decoder<RecipientName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientName} The decoded data structure.
 */
export function _decode_RecipientName(el: _Element) {
    if (!_cached_decoder_for_RecipientName) {
        _cached_decoder_for_RecipientName = _decode_ORAddressAndOrDirectoryName;
    }
    return _cached_decoder_for_RecipientName(el);
}

let _cached_encoder_for_RecipientName: $.ASN1Encoder<RecipientName> | null = null;

/**
 * @summary Encodes a(n) RecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientName, encoded as an ASN.1 Element.
 */
export function _encode_RecipientName(
    value: RecipientName,
    elGetter: $.ASN1Encoder<RecipientName>
) {
    if (!_cached_encoder_for_RecipientName) {
        _cached_encoder_for_RecipientName = _encode_ORAddressAndOrDirectoryName;
    }
    return _cached_encoder_for_RecipientName(value, elGetter);
}


/* eslint-enable */
