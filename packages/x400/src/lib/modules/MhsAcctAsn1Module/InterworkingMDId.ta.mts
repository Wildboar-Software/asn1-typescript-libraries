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
/* START_OF_SYMBOL_DEFINITION InterworkingMDId */
/**
 * @summary InterworkingMDId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterworkingMDId  ::=  SimpleNameType
 * ```
 */
export type InterworkingMDId = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION InterworkingMDId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InterworkingMDId */
let _cached_decoder_for_InterworkingMDId: $.ASN1Decoder<InterworkingMDId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InterworkingMDId */

/* START_OF_SYMBOL_DEFINITION _decode_InterworkingMDId */
/**
 * @summary Decodes an ASN.1 element into a(n) InterworkingMDId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterworkingMDId} The decoded data structure.
 */
export function _decode_InterworkingMDId(el: _Element) {
    if (!_cached_decoder_for_InterworkingMDId) {
        _cached_decoder_for_InterworkingMDId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_InterworkingMDId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InterworkingMDId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InterworkingMDId */
let _cached_encoder_for_InterworkingMDId: $.ASN1Encoder<InterworkingMDId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InterworkingMDId */

/* START_OF_SYMBOL_DEFINITION _encode_InterworkingMDId */
/**
 * @summary Encodes a(n) InterworkingMDId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterworkingMDId, encoded as an ASN.1 Element.
 */
export function _encode_InterworkingMDId(
    value: InterworkingMDId,
    elGetter: $.ASN1Encoder<InterworkingMDId>
) {
    if (!_cached_encoder_for_InterworkingMDId) {
        _cached_encoder_for_InterworkingMDId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_InterworkingMDId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InterworkingMDId */

/* eslint-enable */
