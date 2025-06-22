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
    AssociatedObjects_Item,
    _decode_AssociatedObjects_Item,
    _encode_AssociatedObjects_Item,
} from '../Test-ASN1Module/AssociatedObjects-Item.ta.mjs';
/**
 * @summary AssociatedObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjects  ::=
 *   SET OF
 *     SEQUENCE {associatedObject      ObjectInstance,
 *               associatedObjectInfo
 *                 SEQUENCE {associatedObjectInfoId
 *                             TMF-OBJECT.&id({AssociatedObjectSet}),
 *                           associatedObjectInform
 *                             TMF-OBJECT.&Value
 *                               ({AssociatedObjectSet}{@.associatedObjectInfoId})
 *                               OPTIONAL}}
 * ```
 */
export type AssociatedObjects = AssociatedObjects_Item[]; // SetOfType

let _cached_decoder_for_AssociatedObjects: $.ASN1Decoder<AssociatedObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjects} The decoded data structure.
 */
export function _decode_AssociatedObjects(el: _Element) {
    if (!_cached_decoder_for_AssociatedObjects) {
        _cached_decoder_for_AssociatedObjects = $._decodeSetOf<AssociatedObjects_Item>(
            () => _decode_AssociatedObjects_Item
        );
    }
    return _cached_decoder_for_AssociatedObjects(el);
}

let _cached_encoder_for_AssociatedObjects: $.ASN1Encoder<AssociatedObjects> | null = null;

/**
 * @summary Encodes a(n) AssociatedObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjects, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjects(
    value: AssociatedObjects,
    elGetter: $.ASN1Encoder<AssociatedObjects>
) {
    if (!_cached_encoder_for_AssociatedObjects) {
        _cached_encoder_for_AssociatedObjects = $._encodeSetOf<AssociatedObjects_Item>(
            () => _encode_AssociatedObjects_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AssociatedObjects(value, elGetter);
}


/* eslint-enable */
