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
 * @summary GNSSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GNSSID {
    gPS = 1,
    galileo = 2,
    sBAS = 3,
    modernizedGPS = 4,
    qZSS = 5,
    gLONASS = 6,
    bDS = 7,
    nAVIC = 8,
}

/**
 * @summary GNSSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GNSSID = _enum_for_GNSSID;

/**
 * @summary GNSSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNSSID  ::=  ENUMERATED
 * {
 *     gPS(1),
 *     galileo(2),
 *     sBAS(3),
 *     modernizedGPS(4),
 *     qZSS(5),
 *     gLONASS(6),
 *     bDS(7),
 *     nAVIC(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GNSSID = _enum_for_GNSSID;

/**
 * @summary GNSSID_gPS
 * @constant
 * @type {number}
 */
export
const GNSSID_gPS: GNSSID = GNSSID.gPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPS
 * @constant
 * @type {number}
 */
export
const gPS: GNSSID = GNSSID.gPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_galileo
 * @constant
 * @type {number}
 */
export
const GNSSID_galileo: GNSSID = GNSSID.galileo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary galileo
 * @constant
 * @type {number}
 */
export
const galileo: GNSSID = GNSSID.galileo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_sBAS
 * @constant
 * @type {number}
 */
export
const GNSSID_sBAS: GNSSID = GNSSID.sBAS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sBAS
 * @constant
 * @type {number}
 */
export
const sBAS: GNSSID = GNSSID.sBAS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_modernizedGPS
 * @constant
 * @type {number}
 */
export
const GNSSID_modernizedGPS: GNSSID = GNSSID.modernizedGPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modernizedGPS
 * @constant
 * @type {number}
 */
export
const modernizedGPS: GNSSID = GNSSID.modernizedGPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_qZSS
 * @constant
 * @type {number}
 */
export
const GNSSID_qZSS: GNSSID = GNSSID.qZSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qZSS
 * @constant
 * @type {number}
 */
export
const qZSS: GNSSID = GNSSID.qZSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_gLONASS
 * @constant
 * @type {number}
 */
export
const GNSSID_gLONASS: GNSSID = GNSSID.gLONASS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gLONASS
 * @constant
 * @type {number}
 */
export
const gLONASS: GNSSID = GNSSID.gLONASS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_bDS
 * @constant
 * @type {number}
 */
export
const GNSSID_bDS: GNSSID = GNSSID.bDS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bDS
 * @constant
 * @type {number}
 */
export
const bDS: GNSSID = GNSSID.bDS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GNSSID_nAVIC
 * @constant
 * @type {number}
 */
export
const GNSSID_nAVIC: GNSSID = GNSSID.nAVIC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAVIC
 * @constant
 * @type {number}
 */
export
const nAVIC: GNSSID = GNSSID.nAVIC; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GNSSID: $.ASN1Decoder<GNSSID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GNSSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GNSSID (el: _Element): GNSSID {
    if (!_cached_decoder_for_GNSSID) { _cached_decoder_for_GNSSID = $._decodeEnumerated; }
    return _cached_decoder_for_GNSSID(el);
}

let _cached_encoder_for_GNSSID: $.ASN1Encoder<GNSSID> | null = null;

/**
 * @summary Encodes a(n) GNSSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GNSSID, encoded as an ASN.1 Element.
 */
export
function _encode_GNSSID (value: GNSSID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GNSSID) { _cached_encoder_for_GNSSID = $._encodeEnumerated; }
    return _cached_encoder_for_GNSSID(value, elGetter);
}


/* eslint-enable */
