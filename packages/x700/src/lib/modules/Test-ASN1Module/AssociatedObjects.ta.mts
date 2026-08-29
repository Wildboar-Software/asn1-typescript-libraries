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
 * Managed objects distinct from MORT(s), TO(s) and the TARR that are involved
 * in the test. Example: in a connectivity test, the AO is the entity the MORT
 * resource should connect to. Optional extra information is a TMF-OBJECT
 * id/value pair (Cor.3). ITU-T Rec. X.745 (11/93) §3.10.1, 8.1.1.
 * [§3.10.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * Syntax: X.745 Cor.3 (02/00) A.7.1.
 * https://www.itu.int/rec/T-REC-X.745-200002-I_Cor3
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
export function _decode_AssociatedObjects(el: _Element): AssociatedObjects {
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
): _Element {
    if (!_cached_encoder_for_AssociatedObjects) {
        _cached_encoder_for_AssociatedObjects = $._encodeSetOf<AssociatedObjects_Item>(
            () => _encode_AssociatedObjects_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AssociatedObjects(value, elGetter);
}


/* eslint-enable */
