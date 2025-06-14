/* eslint-disable */
import {
    EXTERNAL,
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

/* START_OF_SYMBOL_DEFINITION BindTokenEncryptedData */
/**
 * @summary BindTokenEncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindTokenEncryptedData  ::=  EXTERNAL
 * ```
 */
export type BindTokenEncryptedData = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION BindTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindTokenEncryptedData */
let _cached_decoder_for_BindTokenEncryptedData: $.ASN1Decoder<BindTokenEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_BindTokenEncryptedData */
/**
 * @summary Decodes an ASN.1 element into a(n) BindTokenEncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindTokenEncryptedData} The decoded data structure.
 */
export function _decode_BindTokenEncryptedData(el: _Element) {
    if (!_cached_decoder_for_BindTokenEncryptedData) {
        _cached_decoder_for_BindTokenEncryptedData = $._decodeExternal;
    }
    return _cached_decoder_for_BindTokenEncryptedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindTokenEncryptedData */
let _cached_encoder_for_BindTokenEncryptedData: $.ASN1Encoder<BindTokenEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindTokenEncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_BindTokenEncryptedData */
/**
 * @summary Encodes a(n) BindTokenEncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindTokenEncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_BindTokenEncryptedData(
    value: BindTokenEncryptedData,
    elGetter: $.ASN1Encoder<BindTokenEncryptedData>
) {
    if (!_cached_encoder_for_BindTokenEncryptedData) {
        _cached_encoder_for_BindTokenEncryptedData = $._encodeExternal;
    }
    return _cached_encoder_for_BindTokenEncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindTokenEncryptedData */

/* eslint-enable */
