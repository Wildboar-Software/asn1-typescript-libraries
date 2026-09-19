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
import { Entry2, _decode_Entry2, _encode_Entry2 } from "../AIN-Parameters/Entry2.ta.mjs";
// export { Entry2, _decode_Entry2, _encode_Entry2 } from "../AIN-Parameters/Entry2.ta.mjs";


/**
 * @summary EntireList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntireList  ::=  SEQUENCE SIZE(1..32) OF Entry2
 * ```
 */
export
type EntireList = Entry2[]; // SequenceOfType

let _cached_decoder_for_EntireList: $.ASN1Decoder<EntireList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntireList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntireList (el: _Element): EntireList {
    if (!_cached_decoder_for_EntireList) { _cached_decoder_for_EntireList = $._decodeSequenceOf<Entry2>(() => _decode_Entry2); }
    return _cached_decoder_for_EntireList(el);
}

let _cached_encoder_for_EntireList: $.ASN1Encoder<EntireList> | null = null;

/**
 * @summary Encodes a(n) EntireList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntireList, encoded as an ASN.1 Element.
 */
export
function _encode_EntireList (value: EntireList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntireList) { _cached_encoder_for_EntireList = $._encodeSequenceOf<Entry2>(() => _encode_Entry2, $.BER); }
    return _cached_encoder_for_EntireList(value, elGetter);
}


/* eslint-enable */
