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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";


/**
 * @summary GenericNumbers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericNumbers{PARAMETERS-BOUND:bound}  ::= 
 *   SET SIZE (1..bound.&numOfGenericNumbers) OF GenericNumber{bound}
 * ```
 */
export
type GenericNumbers = GenericNumber[]; // SetOfType

let _cached_decoder_for_GenericNumbers: $.ASN1Decoder<GenericNumbers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericNumbers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericNumbers (el: _Element): GenericNumbers {
    if (!_cached_decoder_for_GenericNumbers) { _cached_decoder_for_GenericNumbers = $._decodeSetOf<GenericNumber>(() => _decode_GenericNumber); }
    return _cached_decoder_for_GenericNumbers(el);
}

let _cached_encoder_for_GenericNumbers: $.ASN1Encoder<GenericNumbers> | null = null;

/**
 * @summary Encodes a(n) GenericNumbers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericNumbers, encoded as an ASN.1 Element.
 */
export
function _encode_GenericNumbers (value: GenericNumbers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericNumbers) { _cached_encoder_for_GenericNumbers = $._encodeSetOf<GenericNumber>(() => _encode_GenericNumber, $.BER); }
    return _cached_encoder_for_GenericNumbers(value, elGetter);
}


/* eslint-enable */
