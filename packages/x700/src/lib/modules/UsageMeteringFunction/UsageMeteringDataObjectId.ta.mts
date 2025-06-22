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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/**
 * @summary UsageMeteringDataObjectId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageMeteringDataObjectId  ::=  SimpleNameType
 * ```
 */
export type UsageMeteringDataObjectId = SimpleNameType; // DefinedType

let _cached_decoder_for_UsageMeteringDataObjectId: $.ASN1Decoder<UsageMeteringDataObjectId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UsageMeteringDataObjectId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageMeteringDataObjectId} The decoded data structure.
 */
export function _decode_UsageMeteringDataObjectId(el: _Element) {
    if (!_cached_decoder_for_UsageMeteringDataObjectId) {
        _cached_decoder_for_UsageMeteringDataObjectId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_UsageMeteringDataObjectId(el);
}

let _cached_encoder_for_UsageMeteringDataObjectId: $.ASN1Encoder<UsageMeteringDataObjectId> | null = null;

/**
 * @summary Encodes a(n) UsageMeteringDataObjectId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageMeteringDataObjectId, encoded as an ASN.1 Element.
 */
export function _encode_UsageMeteringDataObjectId(
    value: UsageMeteringDataObjectId,
    elGetter: $.ASN1Encoder<UsageMeteringDataObjectId>
) {
    if (!_cached_encoder_for_UsageMeteringDataObjectId) {
        _cached_encoder_for_UsageMeteringDataObjectId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_UsageMeteringDataObjectId(value, elGetter);
}


/* eslint-enable */
