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
import { SignalRequest, _decode_SignalRequest, _encode_SignalRequest } from "../MEDIA-GATEWAY-CONTROL/SignalRequest.ta.mjs";
// export { SignalRequest, _decode_SignalRequest, _encode_SignalRequest } from "../MEDIA-GATEWAY-CONTROL/SignalRequest.ta.mjs";


/**
 * @summary SignalsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalsDescriptor  ::=  SEQUENCE OF SignalRequest
 * ```
 */
export
type SignalsDescriptor = SignalRequest[]; // SequenceOfType

let _cached_decoder_for_SignalsDescriptor: $.ASN1Decoder<SignalsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignalsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignalsDescriptor (el: _Element): SignalsDescriptor {
    if (!_cached_decoder_for_SignalsDescriptor) { _cached_decoder_for_SignalsDescriptor = $._decodeSequenceOf<SignalRequest>(() => _decode_SignalRequest); }
    return _cached_decoder_for_SignalsDescriptor(el);
}

let _cached_encoder_for_SignalsDescriptor: $.ASN1Encoder<SignalsDescriptor> | null = null;

/**
 * @summary Encodes a(n) SignalsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_SignalsDescriptor (value: SignalsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignalsDescriptor) { _cached_encoder_for_SignalsDescriptor = $._encodeSequenceOf<SignalRequest>(() => _encode_SignalRequest, $.BER); }
    return _cached_encoder_for_SignalsDescriptor(value, elGetter);
}


/* eslint-enable */
