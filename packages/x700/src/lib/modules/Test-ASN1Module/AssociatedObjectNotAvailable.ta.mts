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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary AssociatedObjectNotAvailable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjectNotAvailable  ::=  SET OF ObjectInstance
 * ```
 */
export type AssociatedObjectNotAvailable = ObjectInstance[]; // SetOfType

let _cached_decoder_for_AssociatedObjectNotAvailable: $.ASN1Decoder<AssociatedObjectNotAvailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjectNotAvailable
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjectNotAvailable} The decoded data structure.
 */
export function _decode_AssociatedObjectNotAvailable(el: _Element): AssociatedObjectNotAvailable {
    if (!_cached_decoder_for_AssociatedObjectNotAvailable) {
        _cached_decoder_for_AssociatedObjectNotAvailable = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_AssociatedObjectNotAvailable(el);
}

let _cached_encoder_for_AssociatedObjectNotAvailable: $.ASN1Encoder<AssociatedObjectNotAvailable> | null = null;

/**
 * @summary Encodes a(n) AssociatedObjectNotAvailable into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjectNotAvailable, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjectNotAvailable(
    value: AssociatedObjectNotAvailable,
    elGetter: $.ASN1Encoder<AssociatedObjectNotAvailable>
): _Element {
    if (!_cached_encoder_for_AssociatedObjectNotAvailable) {
        _cached_encoder_for_AssociatedObjectNotAvailable = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_AssociatedObjectNotAvailable(value, elGetter);
}


/* eslint-enable */
