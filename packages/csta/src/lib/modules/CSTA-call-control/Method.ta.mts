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
 * @summary Method
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Method  ::=  ENUMERATED -- http://www.iana.org/assignments/method-tokens/method-tokens.xhtml
 * {    a-GPS                 ( 0),    -- "Method" defines, what location tracking system has been used 
 *     aOA                ( 1),    -- to allocate the presented Location Data
 *     cell                ( 2),
 *     derived                ( 3),
 *     deviceAssistedAGps        ( 4),
 *     deviceBasedAGps            ( 5),
 *     dHCP                ( 6),
 *     gPS                ( 7),
 *     handsetAflt            ( 8),
 *     handsetEflt            ( 9),
 *     hybridAGps            (10),
 *     ipdl                (11),
 *     lldpMed                (12),
 *     manual                (13),
 *     mpl                (14),
 *     nmr                (15),
 *     otdoa                (16),
 *     rfid                (17),
 *     rssi                (18),
 *     rssiRtt                (19),
 *     rtt                (20),
 *     ta                (21),
 *     taNmr                (22),
 *     triangulation            (23),
 *     utdoa                (24),
 *     wiremap                (25),
 *     locMet80211            (26) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Method {
    a_GPS = 0,
    aOA = 1,
    cell = 2,
    derived = 3,
    deviceAssistedAGps = 4,
    deviceBasedAGps = 5,
    dHCP = 6,
    gPS = 7,
    handsetAflt = 8,
    handsetEflt = 9,
    hybridAGps = 10,
    ipdl = 11,
    lldpMed = 12,
    manual = 13,
    mpl = 14,
    nmr = 15,
    otdoa = 16,
    rfid = 17,
    rssi = 18,
    rssiRtt = 19,
    rtt = 20,
    ta = 21,
    taNmr = 22,
    triangulation = 23,
    utdoa = 24,
    wiremap = 25,
    locMet80211 = 26,
}

/**
 * @summary Method
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Method  ::=  ENUMERATED -- http://www.iana.org/assignments/method-tokens/method-tokens.xhtml
 * {    a-GPS                 ( 0),    -- "Method" defines, what location tracking system has been used 
 *     aOA                ( 1),    -- to allocate the presented Location Data
 *     cell                ( 2),
 *     derived                ( 3),
 *     deviceAssistedAGps        ( 4),
 *     deviceBasedAGps            ( 5),
 *     dHCP                ( 6),
 *     gPS                ( 7),
 *     handsetAflt            ( 8),
 *     handsetEflt            ( 9),
 *     hybridAGps            (10),
 *     ipdl                (11),
 *     lldpMed                (12),
 *     manual                (13),
 *     mpl                (14),
 *     nmr                (15),
 *     otdoa                (16),
 *     rfid                (17),
 *     rssi                (18),
 *     rssiRtt                (19),
 *     rtt                (20),
 *     ta                (21),
 *     taNmr                (22),
 *     triangulation            (23),
 *     utdoa                (24),
 *     wiremap                (25),
 *     locMet80211            (26) }
 * ```
 * 
 * @enum {number}
 */
export
type Method = _enum_for_Method;

/**
 * @summary Method
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Method  ::=  ENUMERATED -- http://www.iana.org/assignments/method-tokens/method-tokens.xhtml
 * {    a-GPS                 ( 0),    -- "Method" defines, what location tracking system has been used 
 *     aOA                ( 1),    -- to allocate the presented Location Data
 *     cell                ( 2),
 *     derived                ( 3),
 *     deviceAssistedAGps        ( 4),
 *     deviceBasedAGps            ( 5),
 *     dHCP                ( 6),
 *     gPS                ( 7),
 *     handsetAflt            ( 8),
 *     handsetEflt            ( 9),
 *     hybridAGps            (10),
 *     ipdl                (11),
 *     lldpMed                (12),
 *     manual                (13),
 *     mpl                (14),
 *     nmr                (15),
 *     otdoa                (16),
 *     rfid                (17),
 *     rssi                (18),
 *     rssiRtt                (19),
 *     rtt                (20),
 *     ta                (21),
 *     taNmr                (22),
 *     triangulation            (23),
 *     utdoa                (24),
 *     wiremap                (25),
 *     locMet80211            (26) }
 * ```
 * 
 * @enum {number}
 */
export
const Method = _enum_for_Method;

/**
 * @summary Method_a_GPS
 * @constant
 * @type {number}
 */
export
const Method_a_GPS: Method = Method.a_GPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary a_GPS
 * @constant
 * @type {number}
 */
export
const a_GPS: Method = Method.a_GPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_aOA
 * @constant
 * @type {number}
 */
export
const Method_aOA: Method = Method.aOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aOA
 * @constant
 * @type {number}
 */
export
const aOA: Method = Method.aOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_cell
 * @constant
 * @type {number}
 */
export
const Method_cell: Method = Method.cell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cell
 * @constant
 * @type {number}
 */
export
const cell: Method = Method.cell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_derived
 * @constant
 * @type {number}
 */
export
const Method_derived: Method = Method.derived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary derived
 * @constant
 * @type {number}
 */
export
const derived: Method = Method.derived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_deviceAssistedAGps
 * @constant
 * @type {number}
 */
export
const Method_deviceAssistedAGps: Method = Method.deviceAssistedAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceAssistedAGps
 * @constant
 * @type {number}
 */
export
const deviceAssistedAGps: Method = Method.deviceAssistedAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_deviceBasedAGps
 * @constant
 * @type {number}
 */
export
const Method_deviceBasedAGps: Method = Method.deviceBasedAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceBasedAGps
 * @constant
 * @type {number}
 */
export
const deviceBasedAGps: Method = Method.deviceBasedAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_dHCP
 * @constant
 * @type {number}
 */
export
const Method_dHCP: Method = Method.dHCP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dHCP
 * @constant
 * @type {number}
 */
export
const dHCP: Method = Method.dHCP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_gPS
 * @constant
 * @type {number}
 */
export
const Method_gPS: Method = Method.gPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPS
 * @constant
 * @type {number}
 */
export
const gPS: Method = Method.gPS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_handsetAflt
 * @constant
 * @type {number}
 */
export
const Method_handsetAflt: Method = Method.handsetAflt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetAflt
 * @constant
 * @type {number}
 */
export
const handsetAflt: Method = Method.handsetAflt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_handsetEflt
 * @constant
 * @type {number}
 */
export
const Method_handsetEflt: Method = Method.handsetEflt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetEflt
 * @constant
 * @type {number}
 */
export
const handsetEflt: Method = Method.handsetEflt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_hybridAGps
 * @constant
 * @type {number}
 */
export
const Method_hybridAGps: Method = Method.hybridAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridAGps
 * @constant
 * @type {number}
 */
export
const hybridAGps: Method = Method.hybridAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_ipdl
 * @constant
 * @type {number}
 */
export
const Method_ipdl: Method = Method.ipdl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipdl
 * @constant
 * @type {number}
 */
export
const ipdl: Method = Method.ipdl; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_lldpMed
 * @constant
 * @type {number}
 */
export
const Method_lldpMed: Method = Method.lldpMed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lldpMed
 * @constant
 * @type {number}
 */
export
const lldpMed: Method = Method.lldpMed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_manual
 * @constant
 * @type {number}
 */
export
const Method_manual: Method = Method.manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manual
 * @constant
 * @type {number}
 */
export
const manual: Method = Method.manual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_mpl
 * @constant
 * @type {number}
 */
export
const Method_mpl: Method = Method.mpl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mpl
 * @constant
 * @type {number}
 */
export
const mpl: Method = Method.mpl; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_nmr
 * @constant
 * @type {number}
 */
export
const Method_nmr: Method = Method.nmr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nmr
 * @constant
 * @type {number}
 */
export
const nmr: Method = Method.nmr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_otdoa
 * @constant
 * @type {number}
 */
export
const Method_otdoa: Method = Method.otdoa; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otdoa
 * @constant
 * @type {number}
 */
export
const otdoa: Method = Method.otdoa; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rfid
 * @constant
 * @type {number}
 */
export
const Method_rfid: Method = Method.rfid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfid
 * @constant
 * @type {number}
 */
export
const rfid: Method = Method.rfid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rssi
 * @constant
 * @type {number}
 */
export
const Method_rssi: Method = Method.rssi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssi
 * @constant
 * @type {number}
 */
export
const rssi: Method = Method.rssi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rssiRtt
 * @constant
 * @type {number}
 */
export
const Method_rssiRtt: Method = Method.rssiRtt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssiRtt
 * @constant
 * @type {number}
 */
export
const rssiRtt: Method = Method.rssiRtt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rtt
 * @constant
 * @type {number}
 */
export
const Method_rtt: Method = Method.rtt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rtt
 * @constant
 * @type {number}
 */
export
const rtt: Method = Method.rtt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_ta
 * @constant
 * @type {number}
 */
export
const Method_ta: Method = Method.ta; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ta
 * @constant
 * @type {number}
 */
export
const ta: Method = Method.ta; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_taNmr
 * @constant
 * @type {number}
 */
export
const Method_taNmr: Method = Method.taNmr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary taNmr
 * @constant
 * @type {number}
 */
export
const taNmr: Method = Method.taNmr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_triangulation
 * @constant
 * @type {number}
 */
export
const Method_triangulation: Method = Method.triangulation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary triangulation
 * @constant
 * @type {number}
 */
export
const triangulation: Method = Method.triangulation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_utdoa
 * @constant
 * @type {number}
 */
export
const Method_utdoa: Method = Method.utdoa; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utdoa
 * @constant
 * @type {number}
 */
export
const utdoa: Method = Method.utdoa; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_wiremap
 * @constant
 * @type {number}
 */
export
const Method_wiremap: Method = Method.wiremap; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wiremap
 * @constant
 * @type {number}
 */
export
const wiremap: Method = Method.wiremap; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_locMet80211
 * @constant
 * @type {number}
 */
export
const Method_locMet80211: Method = Method.locMet80211; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locMet80211
 * @constant
 * @type {number}
 */
export
const locMet80211: Method = Method.locMet80211; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Method: $.ASN1Decoder<Method> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Method
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Method (el: _Element): Method {
    if (!_cached_decoder_for_Method) { _cached_decoder_for_Method = $._decodeEnumerated; }
    return _cached_decoder_for_Method(el);
}

let _cached_encoder_for_Method: $.ASN1Encoder<Method> | null = null;

/**
 * @summary Encodes a(n) Method into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Method, encoded as an ASN.1 Element.
 */
export
function _encode_Method (value: Method, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Method) { _cached_encoder_for_Method = $._encodeEnumerated; }
    return _cached_encoder_for_Method(value, elGetter);
}


/* eslint-enable */
