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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/**
 * @summary CustomerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerId  ::=  SimpleNameType
 * ```
 */
export type CustomerId = SimpleNameType; // DefinedType

let _cached_decoder_for_CustomerId: $.ASN1Decoder<CustomerId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CustomerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerId} The decoded data structure.
 */
export function _decode_CustomerId(el: _Element) {
    if (!_cached_decoder_for_CustomerId) {
        _cached_decoder_for_CustomerId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_CustomerId(el);
}

let _cached_encoder_for_CustomerId: $.ASN1Encoder<CustomerId> | null = null;

/**
 * @summary Encodes a(n) CustomerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerId, encoded as an ASN.1 Element.
 */
export function _encode_CustomerId(
    value: CustomerId,
    elGetter: $.ASN1Encoder<CustomerId>
) {
    if (!_cached_encoder_for_CustomerId) {
        _cached_encoder_for_CustomerId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_CustomerId(value, elGetter);
}


/* eslint-enable */
