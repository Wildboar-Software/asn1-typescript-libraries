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
    NameType,
    _decode_NameType,
    _encode_NameType,
} from '../X790ASN1Module/NameType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ServiceId */
/**
 * @summary ServiceId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceId  ::=  NameType
 * ```
 */
export type ServiceId = NameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION ServiceId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceId */
let _cached_decoder_for_ServiceId: $.ASN1Decoder<ServiceId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceId */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceId */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceId} The decoded data structure.
 */
export function _decode_ServiceId(el: _Element) {
    if (!_cached_decoder_for_ServiceId) {
        _cached_decoder_for_ServiceId = _decode_NameType;
    }
    return _cached_decoder_for_ServiceId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceId */
let _cached_encoder_for_ServiceId: $.ASN1Encoder<ServiceId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceId */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceId */
/**
 * @summary Encodes a(n) ServiceId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceId, encoded as an ASN.1 Element.
 */
export function _encode_ServiceId(
    value: ServiceId,
    elGetter: $.ASN1Encoder<ServiceId>
) {
    if (!_cached_encoder_for_ServiceId) {
        _cached_encoder_for_ServiceId = _encode_NameType;
    }
    return _cached_encoder_for_ServiceId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceId */

/* eslint-enable */
