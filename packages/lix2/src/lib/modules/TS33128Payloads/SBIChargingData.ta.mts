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
import { EncapsulatedSBIChargingData, _decode_EncapsulatedSBIChargingData, _encode_EncapsulatedSBIChargingData } from "../TS33128Payloads/EncapsulatedSBIChargingData.ta.mjs";
// export { EncapsulatedSBIChargingData, _decode_EncapsulatedSBIChargingData, _encode_EncapsulatedSBIChargingData } from "../TS33128Payloads/EncapsulatedSBIChargingData.ta.mjs";


/**
 * @summary SBIChargingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIChargingData  ::=  CHOICE
 * {
 *     fullSBIChargingData    [1] EncapsulatedSBIChargingData
 * }
 * ```
 */
export
type SBIChargingData =
    { fullSBIChargingData: EncapsulatedSBIChargingData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SBIChargingData: $.ASN1Decoder<SBIChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIChargingData (el: _Element): SBIChargingData {
    if (!_cached_decoder_for_SBIChargingData) { _cached_decoder_for_SBIChargingData = $._decode_inextensible_choice<SBIChargingData>({
    "CONTEXT 1": [ "fullSBIChargingData", $._decode_explicit<EncapsulatedSBIChargingData>(() => _decode_EncapsulatedSBIChargingData) ]
}); }
    return _cached_decoder_for_SBIChargingData(el);
}

let _cached_encoder_for_SBIChargingData: $.ASN1Encoder<SBIChargingData> | null = null;

/**
 * @summary Encodes a(n) SBIChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_SBIChargingData (value: SBIChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIChargingData) { _cached_encoder_for_SBIChargingData = $._encode_choice<SBIChargingData>({
    "fullSBIChargingData": $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedSBIChargingData, $.BER),
}, $.BER); }
    return _cached_encoder_for_SBIChargingData(value, elGetter);
}


/* eslint-enable */
