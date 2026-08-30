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
import { Ext_BearerServiceCode, _decode_Ext_BearerServiceCode, _encode_Ext_BearerServiceCode } from "../MAP-BS-Code/Ext-BearerServiceCode.ta.mjs";
import { Ext_TeleserviceCode, _decode_Ext_TeleserviceCode, _encode_Ext_TeleserviceCode } from "../MAP-TS-Code/Ext-TeleserviceCode.ta.mjs";


/**
 * @summary Ext_BasicServiceCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-BasicServiceCode  ::=  CHOICE {
 *     ext-BearerService    [2] Ext-BearerServiceCode,
 *     ext-Teleservice    [3] Ext-TeleserviceCode}
 * ```
 */
export
type Ext_BasicServiceCode =
    { ext_BearerService: Ext_BearerServiceCode } /* CHOICE_ALT_ROOT */
    | { ext_Teleservice: Ext_TeleserviceCode } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Ext_BasicServiceCode: $.ASN1Decoder<Ext_BasicServiceCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_BasicServiceCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_BasicServiceCode (el: _Element): Ext_BasicServiceCode {
    if (!_cached_decoder_for_Ext_BasicServiceCode) { _cached_decoder_for_Ext_BasicServiceCode = $._decode_inextensible_choice<Ext_BasicServiceCode>({
    "CONTEXT 2": [ "ext_BearerService", $._decode_implicit<Ext_BearerServiceCode>(() => _decode_Ext_BearerServiceCode) ],
    "CONTEXT 3": [ "ext_Teleservice", $._decode_implicit<Ext_TeleserviceCode>(() => _decode_Ext_TeleserviceCode) ]
}); }
    return _cached_decoder_for_Ext_BasicServiceCode(el);
}

let _cached_encoder_for_Ext_BasicServiceCode: $.ASN1Encoder<Ext_BasicServiceCode> | null = null;

/**
 * @summary Encodes a(n) Ext_BasicServiceCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_BasicServiceCode, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_BasicServiceCode (value: Ext_BasicServiceCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_BasicServiceCode) { _cached_encoder_for_Ext_BasicServiceCode = $._encode_choice<Ext_BasicServiceCode>({
    "ext_BearerService": $._encode_implicit(_TagClass.context, 2, () => _encode_Ext_BearerServiceCode, $.BER),
    "ext_Teleservice": $._encode_implicit(_TagClass.context, 3, () => _encode_Ext_TeleserviceCode, $.BER),
}, $.BER); }
    return _cached_encoder_for_Ext_BasicServiceCode(value, elGetter);
}


/* eslint-enable */
