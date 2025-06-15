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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/**
 * @summary ContactId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactId  ::=  SimpleNameType
 * ```
 */
export type ContactId = SimpleNameType; // DefinedType

let _cached_decoder_for_ContactId: $.ASN1Decoder<ContactId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContactId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactId} The decoded data structure.
 */
export function _decode_ContactId(el: _Element) {
    if (!_cached_decoder_for_ContactId) {
        _cached_decoder_for_ContactId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_ContactId(el);
}

let _cached_encoder_for_ContactId: $.ASN1Encoder<ContactId> | null = null;

/**
 * @summary Encodes a(n) ContactId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactId, encoded as an ASN.1 Element.
 */
export function _encode_ContactId(
    value: ContactId,
    elGetter: $.ASN1Encoder<ContactId>
) {
    if (!_cached_encoder_for_ContactId) {
        _cached_encoder_for_ContactId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_ContactId(value, elGetter);
}


/* eslint-enable */
