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
/* START_OF_SYMBOL_DEFINITION ActualRecipientName */
/**
 * @summary ActualRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActualRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ActualRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualRecipientName */
let _cached_decoder_for_ActualRecipientName: $.ASN1Decoder<ActualRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _decode_ActualRecipientName */
/**
 * @summary Decodes an ASN.1 element into a(n) ActualRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActualRecipientName} The decoded data structure.
 */
export function _decode_ActualRecipientName(el: _Element) {
    if (!_cached_decoder_for_ActualRecipientName) {
        _cached_decoder_for_ActualRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ActualRecipientName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualRecipientName */
let _cached_encoder_for_ActualRecipientName: $.ASN1Encoder<ActualRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _encode_ActualRecipientName */
/**
 * @summary Encodes a(n) ActualRecipientName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_ActualRecipientName(
    value: ActualRecipientName,
    elGetter: $.ASN1Encoder<ActualRecipientName>
) {
    if (!_cached_encoder_for_ActualRecipientName) {
        _cached_encoder_for_ActualRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ActualRecipientName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActualRecipientName */

/* eslint-enable */
