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
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.mjs';
/**
 * @summary ResponderCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponderCredentials  ::=  Credentials
 * ```
 */
export type ResponderCredentials = Credentials; // DefinedType

let _cached_decoder_for_ResponderCredentials: $.ASN1Decoder<ResponderCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponderCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponderCredentials} The decoded data structure.
 */
export function _decode_ResponderCredentials(el: _Element) {
    if (!_cached_decoder_for_ResponderCredentials) {
        _cached_decoder_for_ResponderCredentials = _decode_Credentials;
    }
    return _cached_decoder_for_ResponderCredentials(el);
}

let _cached_encoder_for_ResponderCredentials: $.ASN1Encoder<ResponderCredentials> | null = null;

/**
 * @summary Encodes a(n) ResponderCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponderCredentials, encoded as an ASN.1 Element.
 */
export function _encode_ResponderCredentials(
    value: ResponderCredentials,
    elGetter: $.ASN1Encoder<ResponderCredentials>
) {
    if (!_cached_encoder_for_ResponderCredentials) {
        _cached_encoder_for_ResponderCredentials = _encode_Credentials;
    }
    return _cached_encoder_for_ResponderCredentials(value, elGetter);
}


/* eslint-enable */
