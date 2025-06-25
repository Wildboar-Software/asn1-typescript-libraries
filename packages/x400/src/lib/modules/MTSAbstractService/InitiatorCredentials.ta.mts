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
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from '../MTSAbstractService/Credentials.ta.mjs';
/**
 * @summary InitiatorCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatorCredentials  ::=  Credentials
 * ```
 */
export type InitiatorCredentials = Credentials; // DefinedType

let _cached_decoder_for_InitiatorCredentials: $.ASN1Decoder<InitiatorCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiatorCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitiatorCredentials} The decoded data structure.
 */
export function _decode_InitiatorCredentials(el: _Element): InitiatorCredentials {
    if (!_cached_decoder_for_InitiatorCredentials) {
        _cached_decoder_for_InitiatorCredentials = _decode_Credentials;
    }
    return _cached_decoder_for_InitiatorCredentials(el);
}

let _cached_encoder_for_InitiatorCredentials: $.ASN1Encoder<InitiatorCredentials> | null = null;

/**
 * @summary Encodes a(n) InitiatorCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiatorCredentials, encoded as an ASN.1 Element.
 */
export function _encode_InitiatorCredentials(
    value: InitiatorCredentials,
    elGetter: $.ASN1Encoder<InitiatorCredentials>
): _Element {
    if (!_cached_encoder_for_InitiatorCredentials) {
        _cached_encoder_for_InitiatorCredentials = _encode_Credentials;
    }
    return _cached_encoder_for_InitiatorCredentials(value, elGetter);
}


/* eslint-enable */
