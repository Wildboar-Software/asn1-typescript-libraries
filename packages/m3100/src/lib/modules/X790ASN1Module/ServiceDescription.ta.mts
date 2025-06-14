/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION ServiceDescription */
/**
 * @summary ServiceDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceDescription  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type ServiceDescription = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceDescription */
let _cached_decoder_for_ServiceDescription: $.ASN1Decoder<ServiceDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceDescription} The decoded data structure.
 */
export function _decode_ServiceDescription(el: _Element) {
    if (!_cached_decoder_for_ServiceDescription) {
        _cached_decoder_for_ServiceDescription = $._decodeGraphicString;
    }
    return _cached_decoder_for_ServiceDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceDescription */
let _cached_encoder_for_ServiceDescription: $.ASN1Encoder<ServiceDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceDescription */
/**
 * @summary Encodes a(n) ServiceDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceDescription, encoded as an ASN.1 Element.
 */
export function _encode_ServiceDescription(
    value: ServiceDescription,
    elGetter: $.ASN1Encoder<ServiceDescription>
) {
    if (!_cached_encoder_for_ServiceDescription) {
        _cached_encoder_for_ServiceDescription = $._encodeGraphicString;
    }
    return _cached_encoder_for_ServiceDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceDescription */

/* eslint-enable */
