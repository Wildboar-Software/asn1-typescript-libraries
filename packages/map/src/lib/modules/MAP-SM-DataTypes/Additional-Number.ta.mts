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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary Additional_Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Additional-Number  ::=  CHOICE {
 *     msc-Number    [0] ISDN-AddressString,
 *     sgsn-Number    [1] ISDN-AddressString}
 * ```
 */
export
type Additional_Number =
    { msc_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { sgsn_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Additional_Number: $.ASN1Decoder<Additional_Number> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Additional_Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Additional_Number (el: _Element): Additional_Number {
    if (!_cached_decoder_for_Additional_Number) { _cached_decoder_for_Additional_Number = $._decode_inextensible_choice<Additional_Number>({
    "CONTEXT 0": [ "msc_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ],
    "CONTEXT 1": [ "sgsn_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ]
}); }
    return _cached_decoder_for_Additional_Number(el);
}

let _cached_encoder_for_Additional_Number: $.ASN1Encoder<Additional_Number> | null = null;

/**
 * @summary Encodes a(n) Additional_Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Additional_Number, encoded as an ASN.1 Element.
 */
export
function _encode_Additional_Number (value: Additional_Number, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Additional_Number) { _cached_encoder_for_Additional_Number = $._encode_choice<Additional_Number>({
    "msc_Number": $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER),
    "sgsn_Number": $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Additional_Number(value, elGetter);
}


/* eslint-enable */
