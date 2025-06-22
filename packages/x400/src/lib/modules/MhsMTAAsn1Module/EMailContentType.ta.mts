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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
/**
 * @summary EMailContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailContentType  ::=
 *   ContentType
 * ```
 */
export type EMailContentType = ContentType; // DefinedType

let _cached_decoder_for_EMailContentType: $.ASN1Decoder<EMailContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailContentType} The decoded data structure.
 */
export function _decode_EMailContentType(el: _Element) {
    if (!_cached_decoder_for_EMailContentType) {
        _cached_decoder_for_EMailContentType = _decode_ContentType;
    }
    return _cached_decoder_for_EMailContentType(el);
}

let _cached_encoder_for_EMailContentType: $.ASN1Encoder<EMailContentType> | null = null;

/**
 * @summary Encodes a(n) EMailContentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailContentType, encoded as an ASN.1 Element.
 */
export function _encode_EMailContentType(
    value: EMailContentType,
    elGetter: $.ASN1Encoder<EMailContentType>
) {
    if (!_cached_encoder_for_EMailContentType) {
        _cached_encoder_for_EMailContentType = _encode_ContentType;
    }
    return _cached_encoder_for_EMailContentType(value, elGetter);
}


/* eslint-enable */
