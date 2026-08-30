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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfCamelDestinationNumberLengths } from "./maxNumOfCamelDestinationNumberLengths.va.mjs";

/**
 * @summary DestinationNumberLengthList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationNumberLengthList   ::=  SEQUENCE SIZE (1..maxNumOfCamelDestinationNumberLengths) OF 
 *         INTEGER(1..maxNumOfISDN-AddressDigits)
 * ```
 */
export
type DestinationNumberLengthList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_DestinationNumberLengthList: $.ASN1Decoder<DestinationNumberLengthList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationNumberLengthList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationNumberLengthList (el: _Element): DestinationNumberLengthList {
    if (!_cached_decoder_for_DestinationNumberLengthList) { _cached_decoder_for_DestinationNumberLengthList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    const value = _cached_decoder_for_DestinationNumberLengthList(el);
    if (value.length < 1 || value.length > maxNumOfCamelDestinationNumberLengths) {
        throw new ASN1SizeError("DestinationNumberLengthList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_DestinationNumberLengthList: $.ASN1Encoder<DestinationNumberLengthList> | null = null;

/**
 * @summary Encodes a(n) DestinationNumberLengthList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationNumberLengthList, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationNumberLengthList (value: DestinationNumberLengthList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationNumberLengthList) { _cached_encoder_for_DestinationNumberLengthList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_DestinationNumberLengthList(value, elGetter);
}


/* eslint-enable */
