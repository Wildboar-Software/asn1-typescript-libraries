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
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta.mjs';
/**
 * @summary RedirectionClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionClass  ::=  MessageClass
 * ```
 */
export type RedirectionClass = MessageClass; // DefinedType

let _cached_decoder_for_RedirectionClass: $.ASN1Decoder<RedirectionClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionClass} The decoded data structure.
 */
export function _decode_RedirectionClass(el: _Element) {
    if (!_cached_decoder_for_RedirectionClass) {
        _cached_decoder_for_RedirectionClass = _decode_MessageClass;
    }
    return _cached_decoder_for_RedirectionClass(el);
}

let _cached_encoder_for_RedirectionClass: $.ASN1Encoder<RedirectionClass> | null = null;

/**
 * @summary Encodes a(n) RedirectionClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionClass, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionClass(
    value: RedirectionClass,
    elGetter: $.ASN1Encoder<RedirectionClass>
) {
    if (!_cached_encoder_for_RedirectionClass) {
        _cached_encoder_for_RedirectionClass = _encode_MessageClass;
    }
    return _cached_encoder_for_RedirectionClass(value, elGetter);
}


/* eslint-enable */
