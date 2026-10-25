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
const Method: typeof _enum_for_Method = _enum_for_Method;

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
const Method_a_GPS: _enum_for_Method.a_GPS = Method.a_GPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary a_GPS
 * @constant
 * @type {number}
 */
export
const a_GPS: _enum_for_Method.a_GPS = Method.a_GPS; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_aOA: _enum_for_Method.aOA = Method.aOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aOA
 * @constant
 * @type {number}
 */
export
const aOA: _enum_for_Method.aOA = Method.aOA; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_cell: _enum_for_Method.cell = Method.cell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cell
 * @constant
 * @type {number}
 */
export
const cell: _enum_for_Method.cell = Method.cell; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_derived: _enum_for_Method.derived = Method.derived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary derived
 * @constant
 * @type {number}
 */
export
const derived: _enum_for_Method.derived = Method.derived; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_deviceAssistedAGps: _enum_for_Method.deviceAssistedAGps = Method.deviceAssistedAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceAssistedAGps
 * @constant
 * @type {number}
 */
export
const deviceAssistedAGps: _enum_for_Method.deviceAssistedAGps = Method.deviceAssistedAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_deviceBasedAGps: _enum_for_Method.deviceBasedAGps = Method.deviceBasedAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceBasedAGps
 * @constant
 * @type {number}
 */
export
const deviceBasedAGps: _enum_for_Method.deviceBasedAGps = Method.deviceBasedAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_dHCP: _enum_for_Method.dHCP = Method.dHCP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dHCP
 * @constant
 * @type {number}
 */
export
const dHCP: _enum_for_Method.dHCP = Method.dHCP; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_gPS: _enum_for_Method.gPS = Method.gPS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPS
 * @constant
 * @type {number}
 */
export
const gPS: _enum_for_Method.gPS = Method.gPS; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_handsetAflt: _enum_for_Method.handsetAflt = Method.handsetAflt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetAflt
 * @constant
 * @type {number}
 */
export
const handsetAflt: _enum_for_Method.handsetAflt = Method.handsetAflt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_handsetEflt: _enum_for_Method.handsetEflt = Method.handsetEflt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handsetEflt
 * @constant
 * @type {number}
 */
export
const handsetEflt: _enum_for_Method.handsetEflt = Method.handsetEflt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_hybridAGps: _enum_for_Method.hybridAGps = Method.hybridAGps; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridAGps
 * @constant
 * @type {number}
 */
export
const hybridAGps: _enum_for_Method.hybridAGps = Method.hybridAGps; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_ipdl: _enum_for_Method.ipdl = Method.ipdl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipdl
 * @constant
 * @type {number}
 */
export
const ipdl: _enum_for_Method.ipdl = Method.ipdl; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_lldpMed: _enum_for_Method.lldpMed = Method.lldpMed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lldpMed
 * @constant
 * @type {number}
 */
export
const lldpMed: _enum_for_Method.lldpMed = Method.lldpMed; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_manual: _enum_for_Method.manual = Method.manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manual
 * @constant
 * @type {number}
 */
export
const manual: _enum_for_Method.manual = Method.manual; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_mpl: _enum_for_Method.mpl = Method.mpl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mpl
 * @constant
 * @type {number}
 */
export
const mpl: _enum_for_Method.mpl = Method.mpl; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_nmr: _enum_for_Method.nmr = Method.nmr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nmr
 * @constant
 * @type {number}
 */
export
const nmr: _enum_for_Method.nmr = Method.nmr; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_otdoa: _enum_for_Method.otdoa = Method.otdoa; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otdoa
 * @constant
 * @type {number}
 */
export
const otdoa: _enum_for_Method.otdoa = Method.otdoa; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_rfid: _enum_for_Method.rfid = Method.rfid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfid
 * @constant
 * @type {number}
 */
export
const rfid: _enum_for_Method.rfid = Method.rfid; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_rssi: _enum_for_Method.rssi = Method.rssi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssi
 * @constant
 * @type {number}
 */
export
const rssi: _enum_for_Method.rssi = Method.rssi; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_rssiRtt: _enum_for_Method.rssiRtt = Method.rssiRtt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rssiRtt
 * @constant
 * @type {number}
 */
export
const rssiRtt: _enum_for_Method.rssiRtt = Method.rssiRtt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_rtt: _enum_for_Method.rtt = Method.rtt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rtt
 * @constant
 * @type {number}
 */
export
const rtt: _enum_for_Method.rtt = Method.rtt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_ta: _enum_for_Method.ta = Method.ta; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ta
 * @constant
 * @type {number}
 */
export
const ta: _enum_for_Method.ta = Method.ta; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_taNmr: _enum_for_Method.taNmr = Method.taNmr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary taNmr
 * @constant
 * @type {number}
 */
export
const taNmr: _enum_for_Method.taNmr = Method.taNmr; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_triangulation: _enum_for_Method.triangulation = Method.triangulation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary triangulation
 * @constant
 * @type {number}
 */
export
const triangulation: _enum_for_Method.triangulation = Method.triangulation; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_utdoa: _enum_for_Method.utdoa = Method.utdoa; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utdoa
 * @constant
 * @type {number}
 */
export
const utdoa: _enum_for_Method.utdoa = Method.utdoa; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_wiremap: _enum_for_Method.wiremap = Method.wiremap; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wiremap
 * @constant
 * @type {number}
 */
export
const wiremap: _enum_for_Method.wiremap = Method.wiremap; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const Method_locMet80211: _enum_for_Method.locMet80211 = Method.locMet80211; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locMet80211
 * @constant
 * @type {number}
 */
export
const locMet80211: _enum_for_Method.locMet80211 = Method.locMet80211; /* SHORT_NAMED_ENUMERATED_VALUE */

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
