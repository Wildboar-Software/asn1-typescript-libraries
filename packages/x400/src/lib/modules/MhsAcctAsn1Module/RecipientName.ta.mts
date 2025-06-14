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
/* START_OF_SYMBOL_DEFINITION RecipientName */
/**
 * @summary RecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientName  ::=  SET OF ORAddressAndOptionalDirectoryName
 * ```
 */
export type RecipientName = ORAddressAndOptionalDirectoryName[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientName */
let _cached_decoder_for_RecipientName: $.ASN1Decoder<RecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientName */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientName */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientName} The decoded data structure.
 */
export function _decode_RecipientName(el: _Element) {
    if (!_cached_decoder_for_RecipientName) {
        _cached_decoder_for_RecipientName = $._decodeSetOf<ORAddressAndOptionalDirectoryName>(
            () => _decode_ORAddressAndOptionalDirectoryName
        );
    }
    return _cached_decoder_for_RecipientName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientName */
let _cached_encoder_for_RecipientName: $.ASN1Encoder<RecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientName */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientName */
/**
 * @summary Encodes a(n) RecipientName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientName, encoded as an ASN.1 Element.
 */
export function _encode_RecipientName(
    value: RecipientName,
    elGetter: $.ASN1Encoder<RecipientName>
) {
    if (!_cached_encoder_for_RecipientName) {
        _cached_encoder_for_RecipientName = $._encodeSetOf<ORAddressAndOptionalDirectoryName>(
            () => _encode_ORAddressAndOptionalDirectoryName,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientName */

/* eslint-enable */
