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
import * as $ from "asn1-ts/dist/functional.mjs";
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp/src/lib/modules/PKIXTSP/TimeStampToken.ta.js";
export { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp/src/lib/modules/PKIXTSP/TimeStampToken.ta.js";


/* START_OF_SYMBOL_DEFINITION SignatureTimeStampToken */
/**
 * @summary SignatureTimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type SignatureTimeStampToken = TimeStampToken; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignatureTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureTimeStampToken */
let _cached_decoder_for_SignatureTimeStampToken: $.ASN1Decoder<SignatureTimeStampToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureTimeStampToken */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureTimeStampToken} The decoded data structure.
 */
export
function _decode_SignatureTimeStampToken (el: _Element) {
    if (!_cached_decoder_for_SignatureTimeStampToken) { _cached_decoder_for_SignatureTimeStampToken = _decode_TimeStampToken; }
    return _cached_decoder_for_SignatureTimeStampToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureTimeStampToken */
let _cached_encoder_for_SignatureTimeStampToken: $.ASN1Encoder<SignatureTimeStampToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureTimeStampToken */
/**
 * @summary Encodes a(n) SignatureTimeStampToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureTimeStampToken, encoded as an ASN.1 Element.
 */
export
function _encode_SignatureTimeStampToken (value: SignatureTimeStampToken, elGetter: $.ASN1Encoder<SignatureTimeStampToken>) {
    if (!_cached_encoder_for_SignatureTimeStampToken) { _cached_encoder_for_SignatureTimeStampToken = _encode_TimeStampToken; }
    return _cached_encoder_for_SignatureTimeStampToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureTimeStampToken */

/* eslint-enable */
