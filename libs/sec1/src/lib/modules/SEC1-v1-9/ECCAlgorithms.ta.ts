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
import { ECCAlgorithm, _decode_ECCAlgorithm, _encode_ECCAlgorithm } from "../SEC1-v1-9/ECCAlgorithm.ta";
export { ECCAlgorithm, _decode_ECCAlgorithm, _encode_ECCAlgorithm } from "../SEC1-v1-9/ECCAlgorithm.ta";


/* START_OF_SYMBOL_DEFINITION ECCAlgorithms */
/**
 * @summary ECCAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECCAlgorithms  ::=  SEQUENCE OF ECCAlgorithm
 * ```
 */
export
type ECCAlgorithms = ECCAlgorithm[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCAlgorithms */
let _cached_decoder_for_ECCAlgorithms: $.ASN1Decoder<ECCAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _decode_ECCAlgorithms */
/**
 * @summary Decodes an ASN.1 element into a(n) ECCAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCAlgorithms} The decoded data structure.
 */
export
function _decode_ECCAlgorithms (el: _Element) {
    if (!_cached_decoder_for_ECCAlgorithms) { _cached_decoder_for_ECCAlgorithms = $._decodeSequenceOf<ECCAlgorithm>(() => _decode_ECCAlgorithm); }
    return _cached_decoder_for_ECCAlgorithms(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCAlgorithms */
let _cached_encoder_for_ECCAlgorithms: $.ASN1Encoder<ECCAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _encode_ECCAlgorithms */
/**
 * @summary Encodes a(n) ECCAlgorithms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCAlgorithms, encoded as an ASN.1 Element.
 */
export
function _encode_ECCAlgorithms (value: ECCAlgorithms, elGetter: $.ASN1Encoder<ECCAlgorithms>) {
    if (!_cached_encoder_for_ECCAlgorithms) { _cached_encoder_for_ECCAlgorithms = $._encodeSequenceOf<ECCAlgorithm>(() => _encode_ECCAlgorithm, $.BER); }
    return _cached_encoder_for_ECCAlgorithms(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECCAlgorithms */

/* eslint-enable */
