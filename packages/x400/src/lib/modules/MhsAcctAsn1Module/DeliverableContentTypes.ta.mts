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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeliverableContentTypes */
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
/* END_OF_SYMBOL_DEFINITION DeliverableContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverableContentTypes */
let _cached_decoder_for_DeliverableContentTypes: $.ASN1Decoder<DeliverableContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverableContentTypes */

/* START_OF_SYMBOL_DEFINITION _decode_DeliverableContentTypes */
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
/* END_OF_SYMBOL_DEFINITION _decode_DeliverableContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverableContentTypes */
let _cached_encoder_for_DeliverableContentTypes: $.ASN1Encoder<DeliverableContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverableContentTypes */

/* START_OF_SYMBOL_DEFINITION _encode_DeliverableContentTypes */
/**
 * @summary Encodes a(n) DeliverableContentTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_DeliverableContentTypes */

/* eslint-enable */
