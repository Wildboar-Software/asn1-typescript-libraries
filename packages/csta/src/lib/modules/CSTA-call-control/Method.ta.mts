/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Method
 * @description
 *
 * How location in a PIDF-LO was derived or discovered (e.g. GPS). Values are
 * IANA method-tokens as listed in ECMA-285 §9.9. ECMA-269 §12.2.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
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
 * How location in a PIDF-LO was derived or discovered (e.g. GPS). Values are
 * IANA method-tokens as listed in ECMA-285 §9.9. ECMA-269 §12.2.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
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
 * How location in a PIDF-LO was derived or discovered (e.g. GPS). Values are
 * IANA method-tokens as listed in ECMA-285 §9.9. ECMA-269 §12.2.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
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
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_a_GPS = Method.a_GPS satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary a_GPS
 * @constant
 * @type {number}
 */
export
const a_GPS = Method.a_GPS satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_aOA
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_aOA = Method.aOA satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aOA
 * @constant
 * @type {number}
 */
export
const aOA = Method.aOA satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_cell
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_cell = Method.cell satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cell
 * @constant
 * @type {number}
 */
export
const cell = Method.cell satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_derived
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_derived = Method.derived satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary derived
 * @constant
 * @type {number}
 */
export
const derived = Method.derived satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_deviceAssistedAGps
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_deviceAssistedAGps = Method.deviceAssistedAGps satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceAssistedAGps
 * @constant
 * @type {number}
 */
export
const deviceAssistedAGps = Method.deviceAssistedAGps satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_deviceBasedAGps
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_deviceBasedAGps = Method.deviceBasedAGps satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceBasedAGps
 * @constant
 * @type {number}
 */
export
const deviceBasedAGps = Method.deviceBasedAGps satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_dHCP
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_dHCP = Method.dHCP satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dHCP
 * @constant
 * @type {number}
 */
export
const dHCP = Method.dHCP satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_gPS
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_gPS = Method.gPS satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPS
 * @constant
 * @type {number}
 */
export
const gPS = Method.gPS satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_handsetAflt
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_handsetAflt = Method.handsetAflt satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetAflt
 * @constant
 * @type {number}
 */
export
const handsetAflt = Method.handsetAflt satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_handsetEflt
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_handsetEflt = Method.handsetEflt satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetEflt
 * @constant
 * @type {number}
 */
export
const handsetEflt = Method.handsetEflt satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_hybridAGps
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_hybridAGps = Method.hybridAGps satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridAGps
 * @constant
 * @type {number}
 */
export
const hybridAGps = Method.hybridAGps satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_ipdl
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_ipdl = Method.ipdl satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipdl
 * @constant
 * @type {number}
 */
export
const ipdl = Method.ipdl satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_lldpMed
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_lldpMed = Method.lldpMed satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lldpMed
 * @constant
 * @type {number}
 */
export
const lldpMed = Method.lldpMed satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_manual
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_manual = Method.manual satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manual
 * @constant
 * @type {number}
 */
export
const manual = Method.manual satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_mpl
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_mpl = Method.mpl satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mpl
 * @constant
 * @type {number}
 */
export
const mpl = Method.mpl satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_nmr
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_nmr = Method.nmr satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nmr
 * @constant
 * @type {number}
 */
export
const nmr = Method.nmr satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_otdoa
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_otdoa = Method.otdoa satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otdoa
 * @constant
 * @type {number}
 */
export
const otdoa = Method.otdoa satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rfid
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_rfid = Method.rfid satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfid
 * @constant
 * @type {number}
 */
export
const rfid = Method.rfid satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rssi
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_rssi = Method.rssi satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssi
 * @constant
 * @type {number}
 */
export
const rssi = Method.rssi satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rssiRtt
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_rssiRtt = Method.rssiRtt satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssiRtt
 * @constant
 * @type {number}
 */
export
const rssiRtt = Method.rssiRtt satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_rtt
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_rtt = Method.rtt satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rtt
 * @constant
 * @type {number}
 */
export
const rtt = Method.rtt satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_ta
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_ta = Method.ta satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ta
 * @constant
 * @type {number}
 */
export
const ta = Method.ta satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_taNmr
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_taNmr = Method.taNmr satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary taNmr
 * @constant
 * @type {number}
 */
export
const taNmr = Method.taNmr satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_triangulation
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_triangulation = Method.triangulation satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary triangulation
 * @constant
 * @type {number}
 */
export
const triangulation = Method.triangulation satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_utdoa
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_utdoa = Method.utdoa satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utdoa
 * @constant
 * @type {number}
 */
export
const utdoa = Method.utdoa satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_wiremap
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_wiremap = Method.wiremap satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wiremap
 * @constant
 * @type {number}
 */
export
const wiremap = Method.wiremap satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Method_locMet80211
 * @description
 *
 * IANA PIDF-LO method token for how this location was derived. ECMA-269
 * §12.2.18; ECMA-285 §9.9.
 *
 * @constant
 * @type {number}
 */
export
const Method_locMet80211 = Method.locMet80211 satisfies Method; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locMet80211
 * @constant
 * @type {number}
 */
export
const locMet80211 = Method.locMet80211 satisfies Method; /* SHORT_NAMED_ENUMERATED_VALUE */

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
