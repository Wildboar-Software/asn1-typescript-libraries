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
/* START_OF_SYMBOL_DEFINITION OtherRecipientName */
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
/* END_OF_SYMBOL_DEFINITION OtherRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientName */
let _cached_decoder_for_OtherRecipientName: $.ASN1Decoder<OtherRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientName */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRecipientName */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRecipientName} The decoded data structure.
 */
export function _decode_OtherRecipientName(el: _Element) {
    if (!_cached_decoder_for_OtherRecipientName) {
        _cached_decoder_for_OtherRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OtherRecipientName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientName */
let _cached_encoder_for_OtherRecipientName: $.ASN1Encoder<OtherRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientName */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRecipientName */
/**
 * @summary Encodes a(n) OtherRecipientName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_OtherRecipientName(
    value: OtherRecipientName,
    elGetter: $.ASN1Encoder<OtherRecipientName>
) {
    if (!_cached_encoder_for_OtherRecipientName) {
        _cached_encoder_for_OtherRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OtherRecipientName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRecipientName */

/* eslint-enable */
