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


/* START_OF_SYMBOL_DEFINITION SchedulingAvailability */
/**
 * @summary SchedulingAvailability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchedulingAvailability  ::=  AvailabilityStatus(WITH COMPONENT (offDuty))
 * ```
 */
export
type SchedulingAvailability = AvailabilityStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION SchedulingAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingAvailability */
let _cached_decoder_for_SchedulingAvailability: $.ASN1Decoder<SchedulingAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingAvailability */

/* START_OF_SYMBOL_DEFINITION _decode_SchedulingAvailability */
/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingAvailability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingAvailability} The decoded data structure.
 */
export
function _decode_SchedulingAvailability (el: _Element) {
    if (!_cached_decoder_for_SchedulingAvailability) { _cached_decoder_for_SchedulingAvailability = _decode_AvailabilityStatus; }
    return _cached_decoder_for_SchedulingAvailability(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchedulingAvailability */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingAvailability */
let _cached_encoder_for_SchedulingAvailability: $.ASN1Encoder<SchedulingAvailability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingAvailability */

/* START_OF_SYMBOL_DEFINITION _encode_SchedulingAvailability */
/**
 * @summary Encodes a(n) SchedulingAvailability into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingAvailability, encoded as an ASN.1 Element.
 */
export
function _encode_SchedulingAvailability (value: SchedulingAvailability, elGetter: $.ASN1Encoder<SchedulingAvailability>) {
    if (!_cached_encoder_for_SchedulingAvailability) { _cached_encoder_for_SchedulingAvailability = _encode_AvailabilityStatus; }
    return _cached_encoder_for_SchedulingAvailability(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchedulingAvailability */

/* eslint-enable */
