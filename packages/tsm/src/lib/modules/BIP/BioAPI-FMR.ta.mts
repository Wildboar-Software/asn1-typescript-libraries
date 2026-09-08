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
import { SignedInt, _decode_SignedInt, _encode_SignedInt } from "../BIP/SignedInt.ta.mjs";
// export { SignedInt, _decode_SignedInt, _encode_SignedInt } from "../BIP/SignedInt.ta.mjs";


/**
 * @summary BioAPI_FMR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-FMR  ::=  SignedInt
 * ```
 */
export
type BioAPI_FMR = SignedInt; // DefinedType

let _cached_decoder_for_BioAPI_FMR: $.ASN1Decoder<BioAPI_FMR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_FMR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_FMR (el: _Element): BioAPI_FMR {
    if (!_cached_decoder_for_BioAPI_FMR) { _cached_decoder_for_BioAPI_FMR = _decode_SignedInt; }
    return _cached_decoder_for_BioAPI_FMR(el);
}

let _cached_encoder_for_BioAPI_FMR: $.ASN1Encoder<BioAPI_FMR> | null = null;

/**
 * @summary Encodes a(n) BioAPI_FMR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_FMR, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_FMR (value: BioAPI_FMR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_FMR) { _cached_encoder_for_BioAPI_FMR = _encode_SignedInt; }
    return _cached_encoder_for_BioAPI_FMR(value, elGetter);
}


/* eslint-enable */
