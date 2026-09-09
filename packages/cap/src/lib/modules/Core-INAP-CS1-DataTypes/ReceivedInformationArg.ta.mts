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
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";


/**
 * @summary ReceivedInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedInformationArg       ::=  CHOICE {
 *      digitsResponse     [0]  Digits
 *      }
 * ```
 */
export
type ReceivedInformationArg =
    { digitsResponse: Digits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReceivedInformationArg: $.ASN1Decoder<ReceivedInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceivedInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceivedInformationArg (el: _Element): ReceivedInformationArg {
    if (!_cached_decoder_for_ReceivedInformationArg) { _cached_decoder_for_ReceivedInformationArg = $._decode_inextensible_choice<ReceivedInformationArg>({
    "CONTEXT 0": [ "digitsResponse", $._decode_implicit<Digits>(() => _decode_Digits) ]
}); }
    return _cached_decoder_for_ReceivedInformationArg(el);
}

let _cached_encoder_for_ReceivedInformationArg: $.ASN1Encoder<ReceivedInformationArg> | null = null;

/**
 * @summary Encodes a(n) ReceivedInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceivedInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReceivedInformationArg (value: ReceivedInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceivedInformationArg) { _cached_encoder_for_ReceivedInformationArg = $._encode_choice<ReceivedInformationArg>({
    "digitsResponse": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReceivedInformationArg(value, elGetter);
}


/* eslint-enable */
