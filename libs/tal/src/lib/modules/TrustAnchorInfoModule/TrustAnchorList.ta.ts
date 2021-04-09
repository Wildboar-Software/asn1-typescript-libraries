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
import { TrustAnchorChoice, _decode_TrustAnchorChoice, _encode_TrustAnchorChoice } from "../TrustAnchorInfoModule/TrustAnchorChoice.ta";
export { TrustAnchorChoice, _decode_TrustAnchorChoice, _encode_TrustAnchorChoice } from "../TrustAnchorInfoModule/TrustAnchorChoice.ta";


/* START_OF_SYMBOL_DEFINITION TrustAnchorList */
/**
 * @summary TrustAnchorList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrustAnchorList  ::=  SEQUENCE SIZE (1..MAX) OF TrustAnchorChoice
 * ```
 */
export
type TrustAnchorList = TrustAnchorChoice[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TrustAnchorList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorList */
let _cached_decoder_for_TrustAnchorList: $.ASN1Decoder<TrustAnchorList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchorList */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchorList */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorList} The decoded data structure.
 */
export
function _decode_TrustAnchorList (el: _Element) {
    if (!_cached_decoder_for_TrustAnchorList) { _cached_decoder_for_TrustAnchorList = $._decodeSequenceOf<TrustAnchorChoice>(() => _decode_TrustAnchorChoice); }
    return _cached_decoder_for_TrustAnchorList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchorList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorList */
let _cached_encoder_for_TrustAnchorList: $.ASN1Encoder<TrustAnchorList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchorList */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchorList */
/**
 * @summary Encodes a(n) TrustAnchorList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorList, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorList (value: TrustAnchorList, elGetter: $.ASN1Encoder<TrustAnchorList>) {
    if (!_cached_encoder_for_TrustAnchorList) { _cached_encoder_for_TrustAnchorList = $._encodeSequenceOf<TrustAnchorChoice>(() => _encode_TrustAnchorChoice, $.BER); }
    return _cached_encoder_for_TrustAnchorList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchorList */

/* eslint-enable */
