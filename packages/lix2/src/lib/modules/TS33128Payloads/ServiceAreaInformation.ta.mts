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
import { ServiceAreaInfo, _decode_ServiceAreaInfo, _encode_ServiceAreaInfo } from "../TS33128Payloads/ServiceAreaInfo.ta.mjs";
// export { ServiceAreaInfo, _decode_ServiceAreaInfo, _encode_ServiceAreaInfo } from "../TS33128Payloads/ServiceAreaInfo.ta.mjs";


/**
 * @summary ServiceAreaInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaInformation  ::=  SEQUENCE (SIZE(1..MAX)) OF ServiceAreaInfo
 * ```
 */
export
type ServiceAreaInformation = ServiceAreaInfo[]; // SequenceOfType

let _cached_decoder_for_ServiceAreaInformation: $.ASN1Decoder<ServiceAreaInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAreaInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAreaInformation (el: _Element): ServiceAreaInformation {
    if (!_cached_decoder_for_ServiceAreaInformation) { _cached_decoder_for_ServiceAreaInformation = $._decodeSequenceOf<ServiceAreaInfo>(() => _decode_ServiceAreaInfo); }
    return _cached_decoder_for_ServiceAreaInformation(el);
}

let _cached_encoder_for_ServiceAreaInformation: $.ASN1Encoder<ServiceAreaInformation> | null = null;

/**
 * @summary Encodes a(n) ServiceAreaInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAreaInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAreaInformation (value: ServiceAreaInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAreaInformation) { _cached_encoder_for_ServiceAreaInformation = $._encodeSequenceOf<ServiceAreaInfo>(() => _encode_ServiceAreaInfo, $.BER); }
    return _cached_encoder_for_ServiceAreaInformation(value, elGetter);
}


/* eslint-enable */
