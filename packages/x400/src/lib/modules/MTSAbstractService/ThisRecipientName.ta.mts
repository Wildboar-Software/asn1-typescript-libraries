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
 * @summary ThisRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ThisRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_ThisRecipientName: $.ASN1Decoder<ThisRecipientName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThisRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisRecipientName} The decoded data structure.
 */
export function _decode_ThisRecipientName(el: _Element) {
    if (!_cached_decoder_for_ThisRecipientName) {
        _cached_decoder_for_ThisRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ThisRecipientName(el);
}

let _cached_encoder_for_ThisRecipientName: $.ASN1Encoder<ThisRecipientName> | null = null;

/**
 * @summary Encodes a(n) ThisRecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_ThisRecipientName(
    value: ThisRecipientName,
    elGetter: $.ASN1Encoder<ThisRecipientName>
) {
    if (!_cached_encoder_for_ThisRecipientName) {
        _cached_encoder_for_ThisRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ThisRecipientName(value, elGetter);
}


/* eslint-enable */
