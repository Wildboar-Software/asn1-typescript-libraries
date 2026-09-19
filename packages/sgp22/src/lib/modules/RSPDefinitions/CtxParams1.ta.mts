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
import { CtxParamsForCommonAuthentication, _decode_CtxParamsForCommonAuthentication, _encode_CtxParamsForCommonAuthentication } from "../RSPDefinitions/CtxParamsForCommonAuthentication.ta.mjs";
// export { CtxParamsForCommonAuthentication, _decode_CtxParamsForCommonAuthentication, _encode_CtxParamsForCommonAuthentication } from "../RSPDefinitions/CtxParamsForCommonAuthentication.ta.mjs";


/**
 * @summary CtxParams1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtxParams1  ::=  CHOICE {
 *     ctxParamsForCommonAuthentication CtxParamsForCommonAuthentication-- New contextual data objects MAY be defined for extensibility.
 * }
 * ```
 */
export
type CtxParams1 =
    { ctxParamsForCommonAuthentication: CtxParamsForCommonAuthentication } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CtxParams1: $.ASN1Decoder<CtxParams1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtxParams1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtxParams1 (el: _Element): CtxParams1 {
    if (!_cached_decoder_for_CtxParams1) { _cached_decoder_for_CtxParams1 = $._decode_inextensible_choice<CtxParams1>({
    "CONTEXT 0": [ "ctxParamsForCommonAuthentication", _decode_CtxParamsForCommonAuthentication ]
}); }
    return _cached_decoder_for_CtxParams1(el);
}

let _cached_encoder_for_CtxParams1: $.ASN1Encoder<CtxParams1> | null = null;

/**
 * @summary Encodes a(n) CtxParams1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtxParams1, encoded as an ASN.1 Element.
 */
export
function _encode_CtxParams1 (value: CtxParams1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtxParams1) { _cached_encoder_for_CtxParams1 = $._encode_choice<CtxParams1>({
    "ctxParamsForCommonAuthentication": _encode_CtxParamsForCommonAuthentication,
}, $.BER); }
    return _cached_encoder_for_CtxParams1(value, elGetter);
}


/* eslint-enable */
