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
} from '@wildboar/cmip';

/**
 * @summary ComponentPointers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComponentPointers  ::=  SET OF ObjectInstance
 * ```
 */
export type ComponentPointers = ObjectInstance[]; // SetOfType


let _cached_decoder_for_ComponentPointers: $.ASN1Decoder<ComponentPointers> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ComponentPointers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentPointers} The decoded data structure.
 */
export function _decode_ComponentPointers(el: _Element): ComponentPointers {
    if (!_cached_decoder_for_ComponentPointers) {
        _cached_decoder_for_ComponentPointers = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ComponentPointers(el);
}


let _cached_encoder_for_ComponentPointers: $.ASN1Encoder<ComponentPointers> | null = null;


/**
 * @summary Encodes a(n) ComponentPointers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentPointers, encoded as an ASN.1 Element.
 */
export function _encode_ComponentPointers(
    value: ComponentPointers,
    elGetter: $.ASN1Encoder<ComponentPointers>
): _Element {
    if (!_cached_encoder_for_ComponentPointers) {
        _cached_encoder_for_ComponentPointers = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ComponentPointers(value, elGetter);
}


/* eslint-enable */
