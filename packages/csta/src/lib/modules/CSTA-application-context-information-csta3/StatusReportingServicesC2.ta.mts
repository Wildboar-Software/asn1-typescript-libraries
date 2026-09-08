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
 * @summary StatusReportingServicesC2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusReportingServicesC2  ::=  BIT STRING
 *     {monitorStart                   (0),
 *      changeMonitorFilter            (1),
 *      monitorStop                    (2),
 *      snapshotDevice             (3),
 *      snapshotCall                   (4)     }
 * ```
 */
export
type StatusReportingServicesC2 = BIT_STRING;

/**
 * @summary StatusReportingServicesC2_monitorStart
 * @constant
 */
export
const StatusReportingServicesC2_monitorStart: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary monitorStart
 * @constant
 */
export
const monitorStart: number = StatusReportingServicesC2_monitorStart; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_changeMonitorFilter
 * @constant
 */
export
const StatusReportingServicesC2_changeMonitorFilter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary changeMonitorFilter
 * @constant
 */
export
const changeMonitorFilter: number = StatusReportingServicesC2_changeMonitorFilter; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_monitorStop
 * @constant
 */
export
const StatusReportingServicesC2_monitorStop: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary monitorStop
 * @constant
 */
export
const monitorStop: number = StatusReportingServicesC2_monitorStop; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_snapshotDevice
 * @constant
 */
export
const StatusReportingServicesC2_snapshotDevice: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary snapshotDevice
 * @constant
 */
export
const snapshotDevice: number = StatusReportingServicesC2_snapshotDevice; /* SHORT_NAMED_BIT */

/**
 * @summary StatusReportingServicesC2_snapshotCall
 * @constant
 */
export
const StatusReportingServicesC2_snapshotCall: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary snapshotCall
 * @constant
 */
export
const snapshotCall: number = StatusReportingServicesC2_snapshotCall; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StatusReportingServicesC2: $.ASN1Decoder<StatusReportingServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReportingServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusReportingServicesC2 (el: _Element): StatusReportingServicesC2 {
    if (!_cached_decoder_for_StatusReportingServicesC2) { _cached_decoder_for_StatusReportingServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_StatusReportingServicesC2(el);
}

let _cached_encoder_for_StatusReportingServicesC2: $.ASN1Encoder<StatusReportingServicesC2> | null = null;

/**
 * @summary Encodes a(n) StatusReportingServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReportingServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_StatusReportingServicesC2 (value: StatusReportingServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusReportingServicesC2) { _cached_encoder_for_StatusReportingServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_StatusReportingServicesC2(value, elGetter);
}


/* eslint-enable */
