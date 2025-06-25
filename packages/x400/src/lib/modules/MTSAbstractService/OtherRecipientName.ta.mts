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
 * @summary OtherRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type OtherRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_OtherRecipientName: $.ASN1Decoder<OtherRecipientName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRecipientName} The decoded data structure.
 */
export function _decode_OtherRecipientName(el: _Element): OtherRecipientName {
    if (!_cached_decoder_for_OtherRecipientName) {
        _cached_decoder_for_OtherRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OtherRecipientName(el);
}

let _cached_encoder_for_OtherRecipientName: $.ASN1Encoder<OtherRecipientName> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_OtherRecipientName(
    value: OtherRecipientName,
    elGetter: $.ASN1Encoder<OtherRecipientName>
): _Element {
    if (!_cached_encoder_for_OtherRecipientName) {
        _cached_encoder_for_OtherRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OtherRecipientName(value, elGetter);
}


/* eslint-enable */
