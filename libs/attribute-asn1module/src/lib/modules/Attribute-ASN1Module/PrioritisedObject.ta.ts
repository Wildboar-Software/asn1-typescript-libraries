/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { PrioritisedObject_Item, _decode_PrioritisedObject_Item, _encode_PrioritisedObject_Item } from "../Attribute-ASN1Module/PrioritisedObject-Item.ta";
export { PrioritisedObject_Item, _decode_PrioritisedObject_Item, _encode_PrioritisedObject_Item } from "../Attribute-ASN1Module/PrioritisedObject-Item.ta";


/* START_OF_SYMBOL_DEFINITION PrioritisedObject */
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
/* END_OF_SYMBOL_DEFINITION PrioritisedObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject */
let _cached_decoder_for_PrioritisedObject: $.ASN1Decoder<PrioritisedObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject */

/* START_OF_SYMBOL_DEFINITION _decode_PrioritisedObject */
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
/* END_OF_SYMBOL_DEFINITION _decode_PrioritisedObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject */
let _cached_encoder_for_PrioritisedObject: $.ASN1Encoder<PrioritisedObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject */

/* START_OF_SYMBOL_DEFINITION _encode_PrioritisedObject */
/**
 * @summary Encodes a(n) PrioritisedObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrioritisedObject, encoded as an ASN.1 Element.
 */
export
function _encode_PrioritisedObject (value: PrioritisedObject, elGetter: $.ASN1Encoder<PrioritisedObject>) {
    if (!_cached_encoder_for_PrioritisedObject) { _cached_encoder_for_PrioritisedObject = $._encodeSetOf<PrioritisedObject_Item>(() => _encode_PrioritisedObject_Item, $.BER); }
    return _cached_encoder_for_PrioritisedObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrioritisedObject */

/* eslint-enable */
