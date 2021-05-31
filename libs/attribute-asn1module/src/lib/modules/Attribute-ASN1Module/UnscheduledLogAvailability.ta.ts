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


/* START_OF_SYMBOL_DEFINITION UnscheduledLogAvailability */
/**
 * @summary UnscheduledLogAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnscheduledLogAvailability  ::=  AvailabilityStatus(WITH COMPONENT (logFull))
 * ```
 */
export
type UnscheduledLogAvailability = AvailabilityStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION UnscheduledLogAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnscheduledLogAvailability */
let _cached_decoder_for_UnscheduledLogAvailability: $.ASN1Decoder<UnscheduledLogAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnscheduledLogAvailability */

/* START_OF_SYMBOL_DEFINITION _decode_UnscheduledLogAvailability */
/**
 * @summary Decodes an ASN.1 element into a(n) UnscheduledLogAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnscheduledLogAvailability} The decoded data structure.
 */
export
function _decode_UnscheduledLogAvailability (el: _Element) {
    if (!_cached_decoder_for_UnscheduledLogAvailability) { _cached_decoder_for_UnscheduledLogAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_UnscheduledLogAvailability(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnscheduledLogAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnscheduledLogAvailability */
let _cached_encoder_for_UnscheduledLogAvailability: $.ASN1Encoder<UnscheduledLogAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnscheduledLogAvailability */

/* START_OF_SYMBOL_DEFINITION _encode_UnscheduledLogAvailability */
/**
 * @summary Encodes a(n) UnscheduledLogAvailability into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnscheduledLogAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_UnscheduledLogAvailability (value: UnscheduledLogAvailability, elGetter: $.ASN1Encoder<UnscheduledLogAvailability>) {
    if (!_cached_encoder_for_UnscheduledLogAvailability) { _cached_encoder_for_UnscheduledLogAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_UnscheduledLogAvailability(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnscheduledLogAvailability */

/* eslint-enable */
