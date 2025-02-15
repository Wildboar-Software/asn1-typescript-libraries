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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AssociatedObjects_Item,
    _decode_AssociatedObjects_Item,
    _encode_AssociatedObjects_Item,
} from '../Test-ASN1Module/AssociatedObjects-Item.ta';
export {
    AssociatedObjects_Item,
    _decode_AssociatedObjects_Item,
    _encode_AssociatedObjects_Item,
} from '../Test-ASN1Module/AssociatedObjects-Item.ta';

/* START_OF_SYMBOL_DEFINITION AssociatedObjects */
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
/* END_OF_SYMBOL_DEFINITION AssociatedObjects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects */
let _cached_decoder_for_AssociatedObjects: $.ASN1Decoder<AssociatedObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects */

/* START_OF_SYMBOL_DEFINITION _decode_AssociatedObjects */
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
/* END_OF_SYMBOL_DEFINITION _decode_AssociatedObjects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects */
let _cached_encoder_for_AssociatedObjects: $.ASN1Encoder<AssociatedObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects */

/* START_OF_SYMBOL_DEFINITION _encode_AssociatedObjects */
/**
 * @summary Encodes a(n) AssociatedObjects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_AssociatedObjects */

/* eslint-enable */
