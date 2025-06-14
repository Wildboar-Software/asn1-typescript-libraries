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
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EMailSimpleCredentials */
/**
 * @summary EMailSimpleCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailSimpleCredentials  ::=  Password
 * ```
 */
export type EMailSimpleCredentials = Password; // DefinedType
/* END_OF_SYMBOL_DEFINITION EMailSimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailSimpleCredentials */
let _cached_decoder_for_EMailSimpleCredentials: $.ASN1Decoder<EMailSimpleCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailSimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_EMailSimpleCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailSimpleCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailSimpleCredentials} The decoded data structure.
 */
export function _decode_EMailSimpleCredentials(el: _Element) {
    if (!_cached_decoder_for_EMailSimpleCredentials) {
        _cached_decoder_for_EMailSimpleCredentials = _decode_Password;
    }
    return _cached_decoder_for_EMailSimpleCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailSimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailSimpleCredentials */
let _cached_encoder_for_EMailSimpleCredentials: $.ASN1Encoder<EMailSimpleCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailSimpleCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_EMailSimpleCredentials */
/**
 * @summary Encodes a(n) EMailSimpleCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailSimpleCredentials, encoded as an ASN.1 Element.
 */
export function _encode_EMailSimpleCredentials(
    value: EMailSimpleCredentials,
    elGetter: $.ASN1Encoder<EMailSimpleCredentials>
) {
    if (!_cached_encoder_for_EMailSimpleCredentials) {
        _cached_encoder_for_EMailSimpleCredentials = _encode_Password;
    }
    return _cached_encoder_for_EMailSimpleCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailSimpleCredentials */

/* eslint-enable */
