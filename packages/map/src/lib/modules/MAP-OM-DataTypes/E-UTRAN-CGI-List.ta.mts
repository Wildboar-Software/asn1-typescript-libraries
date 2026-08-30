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
import { E_UTRAN_CGI, _decode_E_UTRAN_CGI, _encode_E_UTRAN_CGI } from "../MAP-CommonDataTypes/E-UTRAN-CGI.ta.mjs";


/**
 * @summary E_UTRAN_CGI_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-UTRAN-CGI-List  ::=  SEQUENCE SIZE (1..32) OF
 *     E-UTRAN-CGI
 * ```
 */
export
type E_UTRAN_CGI_List = E_UTRAN_CGI[]; // SequenceOfType

let _cached_decoder_for_E_UTRAN_CGI_List: $.ASN1Decoder<E_UTRAN_CGI_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E_UTRAN_CGI_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E_UTRAN_CGI_List (el: _Element): E_UTRAN_CGI_List {
    if (!_cached_decoder_for_E_UTRAN_CGI_List) { _cached_decoder_for_E_UTRAN_CGI_List = $._decodeSequenceOf<E_UTRAN_CGI>(() => _decode_E_UTRAN_CGI); }
    const value = _cached_decoder_for_E_UTRAN_CGI_List(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("E_UTRAN_CGI_List violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_E_UTRAN_CGI_List: $.ASN1Encoder<E_UTRAN_CGI_List> | null = null;

/**
 * @summary Encodes a(n) E_UTRAN_CGI_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_UTRAN_CGI_List, encoded as an ASN.1 Element.
 */
export
function _encode_E_UTRAN_CGI_List (value: E_UTRAN_CGI_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E_UTRAN_CGI_List) { _cached_encoder_for_E_UTRAN_CGI_List = $._encodeSequenceOf<E_UTRAN_CGI>(() => _encode_E_UTRAN_CGI, $.BER); }
    return _cached_encoder_for_E_UTRAN_CGI_List(value, elGetter);
}


/* eslint-enable */
