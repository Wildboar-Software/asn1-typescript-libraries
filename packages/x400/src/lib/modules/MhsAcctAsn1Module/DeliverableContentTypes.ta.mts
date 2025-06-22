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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
/**
 * @summary DeliverableContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverableContentTypes  ::=  SET SIZE (1..ub-content-types) OF ContentType
 * ```
 */
export type DeliverableContentTypes = ContentType[]; // SetOfType

let _cached_decoder_for_DeliverableContentTypes: $.ASN1Decoder<DeliverableContentTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverableContentTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverableContentTypes} The decoded data structure.
 */
export function _decode_DeliverableContentTypes(el: _Element) {
    if (!_cached_decoder_for_DeliverableContentTypes) {
        _cached_decoder_for_DeliverableContentTypes = $._decodeSetOf<ContentType>(
            () => _decode_ContentType
        );
    }
    return _cached_decoder_for_DeliverableContentTypes(el);
}

let _cached_encoder_for_DeliverableContentTypes: $.ASN1Encoder<DeliverableContentTypes> | null = null;

/**
 * @summary Encodes a(n) DeliverableContentTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverableContentTypes, encoded as an ASN.1 Element.
 */
export function _encode_DeliverableContentTypes(
    value: DeliverableContentTypes,
    elGetter: $.ASN1Encoder<DeliverableContentTypes>
) {
    if (!_cached_encoder_for_DeliverableContentTypes) {
        _cached_encoder_for_DeliverableContentTypes = $._encodeSetOf<ContentType>(
            () => _encode_ContentType,
            $.BER
        );
    }
    return _cached_encoder_for_DeliverableContentTypes(value, elGetter);
}


/* eslint-enable */
