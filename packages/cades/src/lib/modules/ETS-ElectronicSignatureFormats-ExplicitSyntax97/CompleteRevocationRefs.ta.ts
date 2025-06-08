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
import { CrlOcspRef, _decode_CrlOcspRef, _encode_CrlOcspRef } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlOcspRef.ta";
export { CrlOcspRef, _decode_CrlOcspRef, _encode_CrlOcspRef } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlOcspRef.ta";


/* START_OF_SYMBOL_DEFINITION CompleteRevocationRefs */
/**
 * @summary CompleteRevocationRefs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompleteRevocationRefs  ::=  SEQUENCE OF CrlOcspRef
 * ```
 */
export
type CompleteRevocationRefs = CrlOcspRef[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CompleteRevocationRefs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompleteRevocationRefs */
let _cached_decoder_for_CompleteRevocationRefs: $.ASN1Decoder<CompleteRevocationRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompleteRevocationRefs */

/* START_OF_SYMBOL_DEFINITION _decode_CompleteRevocationRefs */
/**
 * @summary Decodes an ASN.1 element into a(n) CompleteRevocationRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompleteRevocationRefs} The decoded data structure.
 */
export
function _decode_CompleteRevocationRefs (el: _Element) {
    if (!_cached_decoder_for_CompleteRevocationRefs) { _cached_decoder_for_CompleteRevocationRefs = $._decodeSequenceOf<CrlOcspRef>(() => _decode_CrlOcspRef); }
    return _cached_decoder_for_CompleteRevocationRefs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompleteRevocationRefs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompleteRevocationRefs */
let _cached_encoder_for_CompleteRevocationRefs: $.ASN1Encoder<CompleteRevocationRefs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompleteRevocationRefs */

/* START_OF_SYMBOL_DEFINITION _encode_CompleteRevocationRefs */
/**
 * @summary Encodes a(n) CompleteRevocationRefs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompleteRevocationRefs, encoded as an ASN.1 Element.
 */
export
function _encode_CompleteRevocationRefs (value: CompleteRevocationRefs, elGetter: $.ASN1Encoder<CompleteRevocationRefs>) {
    if (!_cached_encoder_for_CompleteRevocationRefs) { _cached_encoder_for_CompleteRevocationRefs = $._encodeSequenceOf<CrlOcspRef>(() => _encode_CrlOcspRef, $.BER); }
    return _cached_encoder_for_CompleteRevocationRefs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompleteRevocationRefs */

/* eslint-enable */
