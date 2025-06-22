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
    MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.mjs';
/**
 * @summary OriginalMessageOriginAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalMessageOriginAuthenticationCheck  ::=  MessageOriginAuthenticationCheck
 * ```
 */
export type OriginalMessageOriginAuthenticationCheck = MessageOriginAuthenticationCheck; // DefinedType

let _cached_decoder_for_OriginalMessageOriginAuthenticationCheck: $.ASN1Decoder<OriginalMessageOriginAuthenticationCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalMessageOriginAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalMessageOriginAuthenticationCheck} The decoded data structure.
 */
export function _decode_OriginalMessageOriginAuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_OriginalMessageOriginAuthenticationCheck) {
        _cached_decoder_for_OriginalMessageOriginAuthenticationCheck = _decode_MessageOriginAuthenticationCheck;
    }
    return _cached_decoder_for_OriginalMessageOriginAuthenticationCheck(el);
}

let _cached_encoder_for_OriginalMessageOriginAuthenticationCheck: $.ASN1Encoder<OriginalMessageOriginAuthenticationCheck> | null = null;

/**
 * @summary Encodes a(n) OriginalMessageOriginAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalMessageOriginAuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_OriginalMessageOriginAuthenticationCheck(
    value: OriginalMessageOriginAuthenticationCheck,
    elGetter: $.ASN1Encoder<OriginalMessageOriginAuthenticationCheck>
) {
    if (!_cached_encoder_for_OriginalMessageOriginAuthenticationCheck) {
        _cached_encoder_for_OriginalMessageOriginAuthenticationCheck = _encode_MessageOriginAuthenticationCheck;
    }
    return _cached_encoder_for_OriginalMessageOriginAuthenticationCheck(
        value,
        elGetter
    );
}


/* eslint-enable */
