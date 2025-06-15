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
 * @summary UsageMeteringControlObjectId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageMeteringControlObjectId  ::=  SimpleNameType
 * ```
 */
export type UsageMeteringControlObjectId = SimpleNameType; // DefinedType


let _cached_decoder_for_UsageMeteringControlObjectId: $.ASN1Decoder<UsageMeteringControlObjectId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UsageMeteringControlObjectId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageMeteringControlObjectId} The decoded data structure.
 */
export function _decode_UsageMeteringControlObjectId(el: _Element) {
    if (!_cached_decoder_for_UsageMeteringControlObjectId) {
        _cached_decoder_for_UsageMeteringControlObjectId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_UsageMeteringControlObjectId(el);
}


let _cached_encoder_for_UsageMeteringControlObjectId: $.ASN1Encoder<UsageMeteringControlObjectId> | null = null;


/**
 * @summary Encodes a(n) UsageMeteringControlObjectId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageMeteringControlObjectId, encoded as an ASN.1 Element.
 */
export function _encode_UsageMeteringControlObjectId(
    value: UsageMeteringControlObjectId,
    elGetter: $.ASN1Encoder<UsageMeteringControlObjectId>
) {
    if (!_cached_encoder_for_UsageMeteringControlObjectId) {
        _cached_encoder_for_UsageMeteringControlObjectId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_UsageMeteringControlObjectId(value, elGetter);
}


/* eslint-enable */
