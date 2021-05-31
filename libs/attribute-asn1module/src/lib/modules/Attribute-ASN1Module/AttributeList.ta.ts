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
import { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta";
export { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta";


/* START_OF_SYMBOL_DEFINITION AttributeList */
/**
 * @summary AttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeList  ::=  SET OF Attribute
 * ```
 */
export
type AttributeList = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeList */
let _cached_decoder_for_AttributeList: $.ASN1Decoder<AttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeList} The decoded data structure.
 */
export
function _decode_AttributeList (el: _Element) {
    if (!_cached_decoder_for_AttributeList) { _cached_decoder_for_AttributeList = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_AttributeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeList */
let _cached_encoder_for_AttributeList: $.ASN1Encoder<AttributeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeList */
/**
 * @summary Encodes a(n) AttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeList (value: AttributeList, elGetter: $.ASN1Encoder<AttributeList>) {
    if (!_cached_encoder_for_AttributeList) { _cached_encoder_for_AttributeList = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_AttributeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeList */

/* eslint-enable */
