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
import { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";


/**
 * @summary CancelInterdigitTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelInterdigitTimer ::=  ActivationStateCode
 * ```
 */
export
type CancelInterdigitTimer = ActivationStateCode; // DefinedType

let _cached_decoder_for_CancelInterdigitTimer: $.ASN1Decoder<CancelInterdigitTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelInterdigitTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelInterdigitTimer (el: _Element): CancelInterdigitTimer {
    if (!_cached_decoder_for_CancelInterdigitTimer) { _cached_decoder_for_CancelInterdigitTimer = _decode_ActivationStateCode; }
    return _cached_decoder_for_CancelInterdigitTimer(el);
}

let _cached_encoder_for_CancelInterdigitTimer: $.ASN1Encoder<CancelInterdigitTimer> | null = null;

/**
 * @summary Encodes a(n) CancelInterdigitTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelInterdigitTimer, encoded as an ASN.1 Element.
 */
export
function _encode_CancelInterdigitTimer (value: CancelInterdigitTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelInterdigitTimer) { _cached_encoder_for_CancelInterdigitTimer = _encode_ActivationStateCode; }
    return _cached_encoder_for_CancelInterdigitTimer(value, elGetter);
}


/* eslint-enable */
