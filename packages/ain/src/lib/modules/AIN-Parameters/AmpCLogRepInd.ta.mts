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



/**
 * @summary AmpCLogRepInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCLogRepInd  ::=  ENUMERATED{
 *         autoReportOS(0),
 *         requestReport(1),
 *         autoReportISDN(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AmpCLogRepInd {
    autoReportOS = 0,
    requestReport = 1,
    autoReportISDN = 2,
}

/**
 * @summary AmpCLogRepInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCLogRepInd  ::=  ENUMERATED{
 *         autoReportOS(0),
 *         requestReport(1),
 *         autoReportISDN(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type AmpCLogRepInd = _enum_for_AmpCLogRepInd;

/**
 * @summary AmpCLogRepInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCLogRepInd  ::=  ENUMERATED{
 *         autoReportOS(0),
 *         requestReport(1),
 *         autoReportISDN(2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const AmpCLogRepInd = _enum_for_AmpCLogRepInd;

/**
 * @summary AmpCLogRepInd_autoReportOS
 * @constant
 * @type {number}
 */
export
const AmpCLogRepInd_autoReportOS: AmpCLogRepInd = AmpCLogRepInd.autoReportOS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoReportOS
 * @constant
 * @type {number}
 */
export
const autoReportOS: AmpCLogRepInd = AmpCLogRepInd.autoReportOS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AmpCLogRepInd_requestReport
 * @constant
 * @type {number}
 */
export
const AmpCLogRepInd_requestReport: AmpCLogRepInd = AmpCLogRepInd.requestReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestReport
 * @constant
 * @type {number}
 */
export
const requestReport: AmpCLogRepInd = AmpCLogRepInd.requestReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AmpCLogRepInd_autoReportISDN
 * @constant
 * @type {number}
 */
export
const AmpCLogRepInd_autoReportISDN: AmpCLogRepInd = AmpCLogRepInd.autoReportISDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoReportISDN
 * @constant
 * @type {number}
 */
export
const autoReportISDN: AmpCLogRepInd = AmpCLogRepInd.autoReportISDN; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AmpCLogRepInd: $.ASN1Decoder<AmpCLogRepInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpCLogRepInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpCLogRepInd (el: _Element): AmpCLogRepInd {
    if (!_cached_decoder_for_AmpCLogRepInd) { _cached_decoder_for_AmpCLogRepInd = $._decodeEnumerated; }
    return _cached_decoder_for_AmpCLogRepInd(el);
}

let _cached_encoder_for_AmpCLogRepInd: $.ASN1Encoder<AmpCLogRepInd> | null = null;

/**
 * @summary Encodes a(n) AmpCLogRepInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpCLogRepInd, encoded as an ASN.1 Element.
 */
export
function _encode_AmpCLogRepInd (value: AmpCLogRepInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpCLogRepInd) { _cached_encoder_for_AmpCLogRepInd = $._encodeEnumerated; }
    return _cached_encoder_for_AmpCLogRepInd(value, elGetter);
}


/* eslint-enable */
