/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs";
/* START_OF_SYMBOL_DEFINITION BackUpRelationshipObject */
/**
 * @summary BackUpRelationshipObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackUpRelationshipObject  ::=  CHOICE {
 *   objectName  ObjectInstance,
 *   noObject    NULL
 * }
 * ```
 */
export
type BackUpRelationshipObject =
    { objectName: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { noObject: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BackUpRelationshipObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpRelationshipObject */
let _cached_decoder_for_BackUpRelationshipObject: $.ASN1Decoder<BackUpRelationshipObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpRelationshipObject */

/* START_OF_SYMBOL_DEFINITION _decode_BackUpRelationshipObject */
/**
 * @summary Decodes an ASN.1 element into a(n) BackUpRelationshipObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackUpRelationshipObject} The decoded data structure.
 */
export
function _decode_BackUpRelationshipObject (el: _Element) {
    if (!_cached_decoder_for_BackUpRelationshipObject) { _cached_decoder_for_BackUpRelationshipObject = $._decode_inextensible_choice<BackUpRelationshipObject>({
    "CONTEXT 2": [ "objectName", _decode_ObjectInstance ],
    "CONTEXT 3": [ "objectName", _decode_ObjectInstance ],
    "CONTEXT 4": [ "objectName", _decode_ObjectInstance ],
    "UNIVERSAL 5": [ "noObject", $._decodeNull ]
}); }
    return _cached_decoder_for_BackUpRelationshipObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackUpRelationshipObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpRelationshipObject */
let _cached_encoder_for_BackUpRelationshipObject: $.ASN1Encoder<BackUpRelationshipObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpRelationshipObject */

/* START_OF_SYMBOL_DEFINITION _encode_BackUpRelationshipObject */
/**
 * @summary Encodes a(n) BackUpRelationshipObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackUpRelationshipObject, encoded as an ASN.1 Element.
 */
export
function _encode_BackUpRelationshipObject (value: BackUpRelationshipObject, elGetter: $.ASN1Encoder<BackUpRelationshipObject>) {
    if (!_cached_encoder_for_BackUpRelationshipObject) { _cached_encoder_for_BackUpRelationshipObject = $._encode_choice<BackUpRelationshipObject>({
    "objectName": _encode_ObjectInstance,
    "noObject": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_BackUpRelationshipObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackUpRelationshipObject */

/* eslint-enable */
