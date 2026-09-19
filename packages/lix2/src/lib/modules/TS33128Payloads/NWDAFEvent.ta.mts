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
 * @summary NWDAFEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEvent {
    serviceExperience = 1,
    uEMobility = 2,
    uEComm = 3,
    abnormalBehaviour = 4,
    dispersion = 5,
    relativeProximity = 6,
    pDUSessionTraffic = 7,
}

/**
 * @summary NWDAFEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEvent = _enum_for_NWDAFEvent;

/**
 * @summary NWDAFEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEvent = _enum_for_NWDAFEvent;

/**
 * @summary NWDAFEvent_serviceExperience
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_serviceExperience: NWDAFEvent = NWDAFEvent.serviceExperience; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceExperience
 * @constant
 * @type {number}
 */
export
const serviceExperience: NWDAFEvent = NWDAFEvent.serviceExperience; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEMobility
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEMobility: NWDAFEvent = NWDAFEvent.uEMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEMobility
 * @constant
 * @type {number}
 */
export
const uEMobility: NWDAFEvent = NWDAFEvent.uEMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEComm
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEComm: NWDAFEvent = NWDAFEvent.uEComm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEComm
 * @constant
 * @type {number}
 */
export
const uEComm: NWDAFEvent = NWDAFEvent.uEComm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_abnormalBehaviour: NWDAFEvent = NWDAFEvent.abnormalBehaviour; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const abnormalBehaviour: NWDAFEvent = NWDAFEvent.abnormalBehaviour; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_dispersion
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_dispersion: NWDAFEvent = NWDAFEvent.dispersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dispersion
 * @constant
 * @type {number}
 */
export
const dispersion: NWDAFEvent = NWDAFEvent.dispersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_relativeProximity
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_relativeProximity: NWDAFEvent = NWDAFEvent.relativeProximity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relativeProximity
 * @constant
 * @type {number}
 */
export
const relativeProximity: NWDAFEvent = NWDAFEvent.relativeProximity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_pDUSessionTraffic: NWDAFEvent = NWDAFEvent.pDUSessionTraffic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const pDUSessionTraffic: NWDAFEvent = NWDAFEvent.pDUSessionTraffic; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NWDAFEvent: $.ASN1Decoder<NWDAFEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFEvent (el: _Element): NWDAFEvent {
    if (!_cached_decoder_for_NWDAFEvent) { _cached_decoder_for_NWDAFEvent = $._decodeEnumerated; }
    return _cached_decoder_for_NWDAFEvent(el);
}

let _cached_encoder_for_NWDAFEvent: $.ASN1Encoder<NWDAFEvent> | null = null;

/**
 * @summary Encodes a(n) NWDAFEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEvent, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFEvent (value: NWDAFEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFEvent) { _cached_encoder_for_NWDAFEvent = $._encodeEnumerated; }
    return _cached_encoder_for_NWDAFEvent(value, elGetter);
}


/* eslint-enable */
