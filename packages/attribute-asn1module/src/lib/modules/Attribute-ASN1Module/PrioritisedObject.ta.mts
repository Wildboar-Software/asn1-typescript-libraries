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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { PrioritisedObject_Item, _decode_PrioritisedObject_Item, _encode_PrioritisedObject_Item } from "../Attribute-ASN1Module/PrioritisedObject-Item.ta.mjs";
/**
 * @summary PrioritisedObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrioritisedObject  ::= 
 *   SET OF
 *     SEQUENCE {object    ObjectInstance,
 *               priority  INTEGER {highest(0), lowest(127)}}
 * ```
 */
export
type PrioritisedObject = PrioritisedObject_Item[]; // SetOfType

let _cached_decoder_for_PrioritisedObject: $.ASN1Decoder<PrioritisedObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrioritisedObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrioritisedObject} The decoded data structure.
 */
export
function _decode_PrioritisedObject (el: _Element) {
    if (!_cached_decoder_for_PrioritisedObject) { _cached_decoder_for_PrioritisedObject = $._decodeSetOf<PrioritisedObject_Item>(() => _decode_PrioritisedObject_Item); }
    return _cached_decoder_for_PrioritisedObject(el);
}

let _cached_encoder_for_PrioritisedObject: $.ASN1Encoder<PrioritisedObject> | null = null;

/**
 * @summary Encodes a(n) PrioritisedObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrioritisedObject, encoded as an ASN.1 Element.
 */
export
function _encode_PrioritisedObject (value: PrioritisedObject, elGetter: $.ASN1Encoder<PrioritisedObject>) {
    if (!_cached_encoder_for_PrioritisedObject) { _cached_encoder_for_PrioritisedObject = $._encodeSetOf<PrioritisedObject_Item>(() => _encode_PrioritisedObject_Item, $.BER); }
    return _cached_encoder_for_PrioritisedObject(value, elGetter);
}


/* eslint-enable */
