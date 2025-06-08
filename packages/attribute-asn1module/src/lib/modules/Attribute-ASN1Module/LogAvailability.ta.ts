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
import * as $ from "asn1-ts/dist/node/functional";
import { AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta";
export { AvailabilityStatus, _decode_AvailabilityStatus, _encode_AvailabilityStatus } from "../Attribute-ASN1Module/AvailabilityStatus.ta";


/* START_OF_SYMBOL_DEFINITION LogAvailability */
/**
 * @summary LogAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull | offDuty))
 * ```
 */
export
type LogAvailability = AvailabilityStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION LogAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogAvailability */
let _cached_decoder_for_LogAvailability: $.ASN1Decoder<LogAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogAvailability */

/* START_OF_SYMBOL_DEFINITION _decode_LogAvailability */
/**
 * @summary Decodes an ASN.1 element into a(n) LogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogAvailability} The decoded data structure.
 */
export
function _decode_LogAvailability (el: _Element) {
    if (!_cached_decoder_for_LogAvailability) { _cached_decoder_for_LogAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_LogAvailability(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogAvailability */
let _cached_encoder_for_LogAvailability: $.ASN1Encoder<LogAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogAvailability */

/* START_OF_SYMBOL_DEFINITION _encode_LogAvailability */
/**
 * @summary Encodes a(n) LogAvailability into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_LogAvailability (value: LogAvailability, elGetter: $.ASN1Encoder<LogAvailability>) {
    if (!_cached_encoder_for_LogAvailability) { _cached_encoder_for_LogAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_LogAvailability(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogAvailability */

/* eslint-enable */
