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
    ObjectClassList_Item,
    _decode_ObjectClassList_Item,
    _encode_ObjectClassList_Item,
} from '../AccessControl-ASN1Module/ObjectClassList-Item.ta';
export {
    ObjectClassList_Item,
    _decode_ObjectClassList_Item,
    _encode_ObjectClassList_Item,
} from '../AccessControl-ASN1Module/ObjectClassList-Item.ta';

/* START_OF_SYMBOL_DEFINITION ObjectClassList */
/**
 * @summary ObjectClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassList  ::=
 *   SET OF
 *     SEQUENCE {objectClass  [0]  ObjectClass,
 *               nameBinding  [1]  OBJECT IDENTIFIER OPTIONAL}
 * ```
 */
export type ObjectClassList = ObjectClassList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ObjectClassList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassList */
let _cached_decoder_for_ObjectClassList: $.ASN1Decoder<ObjectClassList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassList */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectClassList */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassList} The decoded data structure.
 */
export function _decode_ObjectClassList(el: _Element) {
    if (!_cached_decoder_for_ObjectClassList) {
        _cached_decoder_for_ObjectClassList = $._decodeSetOf<ObjectClassList_Item>(
            () => _decode_ObjectClassList_Item
        );
    }
    return _cached_decoder_for_ObjectClassList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectClassList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassList */
let _cached_encoder_for_ObjectClassList: $.ASN1Encoder<ObjectClassList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassList */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectClassList */
/**
 * @summary Encodes a(n) ObjectClassList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassList, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassList(
    value: ObjectClassList,
    elGetter: $.ASN1Encoder<ObjectClassList>
) {
    if (!_cached_encoder_for_ObjectClassList) {
        _cached_encoder_for_ObjectClassList = $._encodeSetOf<ObjectClassList_Item>(
            () => _encode_ObjectClassList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ObjectClassList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectClassList */

/* eslint-enable */
