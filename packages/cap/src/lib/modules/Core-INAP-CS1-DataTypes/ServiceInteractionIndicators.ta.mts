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



/**
 * @summary ServiceInteractionIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicators      ::=  OCTET STRING (SIZE (minServiceInteractionIndicatorsLength 
 * .. maxServiceInteractionIndicatorsLength))
 * ```
 */
export
type ServiceInteractionIndicators = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ServiceInteractionIndicators: $.ASN1Decoder<ServiceInteractionIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInteractionIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInteractionIndicators (el: _Element): ServiceInteractionIndicators {
    if (!_cached_decoder_for_ServiceInteractionIndicators) { _cached_decoder_for_ServiceInteractionIndicators = $._decodeOctetString; }
    return _cached_decoder_for_ServiceInteractionIndicators(el);
}

let _cached_encoder_for_ServiceInteractionIndicators: $.ASN1Encoder<ServiceInteractionIndicators> | null = null;

/**
 * @summary Encodes a(n) ServiceInteractionIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInteractionIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInteractionIndicators (value: ServiceInteractionIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInteractionIndicators) { _cached_encoder_for_ServiceInteractionIndicators = $._encodeOctetString; }
    return _cached_encoder_for_ServiceInteractionIndicators(value, elGetter);
}


/* eslint-enable */
