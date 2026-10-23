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
    RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.mjs';


/**
 * @summary CompositePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompositePointer  ::=  RelatedObjectInstance
 * ```
 */
export type CompositePointer = RelatedObjectInstance; // DefinedType


let _cached_decoder_for_CompositePointer: $.ASN1Decoder<CompositePointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CompositePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompositePointer} The decoded data structure.
 */
export function _decode_CompositePointer(el: _Element): CompositePointer {
    if (!_cached_decoder_for_CompositePointer) {
        _cached_decoder_for_CompositePointer = _decode_RelatedObjectInstance;
    }
    return _cached_decoder_for_CompositePointer(el);
}


let _cached_encoder_for_CompositePointer: $.ASN1Encoder<CompositePointer> | null = null;


/**
 * @summary Encodes a(n) CompositePointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompositePointer, encoded as an ASN.1 Element.
 */
export function _encode_CompositePointer(
    value: CompositePointer,
    elGetter: $.ASN1Encoder<CompositePointer>
): _Element {
    if (!_cached_encoder_for_CompositePointer) {
        _cached_encoder_for_CompositePointer = _encode_RelatedObjectInstance;
    }
    return _cached_encoder_for_CompositePointer(value, elGetter);
}


/* eslint-enable */
