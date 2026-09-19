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
 * @summary PositioningMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PositioningMethod {
    cellID = 1,
    eCID = 2,
    oTDOA = 3,
    barometricPressure = 4,
    wLAN = 5,
    bluetooth = 6,
    mBS = 7,
    motionSensor = 8,
    dLTDOA = 9,
    dLAOD = 10,
    multiRTT = 11,
    nRECID = 12,
    uLTDOA = 13,
    uLAOA = 14,
    networkSpecific = 15,
}

/**
 * @summary PositioningMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PositioningMethod = _enum_for_PositioningMethod;

/**
 * @summary PositioningMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  ENUMERATED
 * {
 *     cellID(1),
 *     eCID(2),
 *     oTDOA(3),
 *     barometricPressure(4),
 *     wLAN(5),
 *     bluetooth(6),
 *     mBS(7),
 *     motionSensor(8),
 *     dLTDOA(9),
 *     dLAOD(10),
 *     multiRTT(11),
 *     nRECID(12),
 *     uLTDOA(13),
 *     uLAOA(14),
 *     networkSpecific(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PositioningMethod = _enum_for_PositioningMethod;

/**
 * @summary PositioningMethod_cellID
 * @constant
 * @type {number}
 */
export
const PositioningMethod_cellID: PositioningMethod = PositioningMethod.cellID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellID
 * @constant
 * @type {number}
 */
export
const cellID: PositioningMethod = PositioningMethod.cellID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_eCID
 * @constant
 * @type {number}
 */
export
const PositioningMethod_eCID: PositioningMethod = PositioningMethod.eCID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eCID
 * @constant
 * @type {number}
 */
export
const eCID: PositioningMethod = PositioningMethod.eCID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_oTDOA
 * @constant
 * @type {number}
 */
export
const PositioningMethod_oTDOA: PositioningMethod = PositioningMethod.oTDOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTDOA
 * @constant
 * @type {number}
 */
export
const oTDOA: PositioningMethod = PositioningMethod.oTDOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_barometricPressure
 * @constant
 * @type {number}
 */
export
const PositioningMethod_barometricPressure: PositioningMethod = PositioningMethod.barometricPressure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barometricPressure
 * @constant
 * @type {number}
 */
export
const barometricPressure: PositioningMethod = PositioningMethod.barometricPressure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_wLAN
 * @constant
 * @type {number}
 */
export
const PositioningMethod_wLAN: PositioningMethod = PositioningMethod.wLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @constant
 * @type {number}
 */
export
const wLAN: PositioningMethod = PositioningMethod.wLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_bluetooth
 * @constant
 * @type {number}
 */
export
const PositioningMethod_bluetooth: PositioningMethod = PositioningMethod.bluetooth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bluetooth
 * @constant
 * @type {number}
 */
export
const bluetooth: PositioningMethod = PositioningMethod.bluetooth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_mBS
 * @constant
 * @type {number}
 */
export
const PositioningMethod_mBS: PositioningMethod = PositioningMethod.mBS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBS
 * @constant
 * @type {number}
 */
export
const mBS: PositioningMethod = PositioningMethod.mBS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_motionSensor
 * @constant
 * @type {number}
 */
export
const PositioningMethod_motionSensor: PositioningMethod = PositioningMethod.motionSensor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary motionSensor
 * @constant
 * @type {number}
 */
export
const motionSensor: PositioningMethod = PositioningMethod.motionSensor; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_dLTDOA
 * @constant
 * @type {number}
 */
export
const PositioningMethod_dLTDOA: PositioningMethod = PositioningMethod.dLTDOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dLTDOA
 * @constant
 * @type {number}
 */
export
const dLTDOA: PositioningMethod = PositioningMethod.dLTDOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_dLAOD
 * @constant
 * @type {number}
 */
export
const PositioningMethod_dLAOD: PositioningMethod = PositioningMethod.dLAOD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dLAOD
 * @constant
 * @type {number}
 */
export
const dLAOD: PositioningMethod = PositioningMethod.dLAOD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_multiRTT
 * @constant
 * @type {number}
 */
export
const PositioningMethod_multiRTT: PositioningMethod = PositioningMethod.multiRTT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiRTT
 * @constant
 * @type {number}
 */
export
const multiRTT: PositioningMethod = PositioningMethod.multiRTT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_nRECID
 * @constant
 * @type {number}
 */
export
const PositioningMethod_nRECID: PositioningMethod = PositioningMethod.nRECID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRECID
 * @constant
 * @type {number}
 */
export
const nRECID: PositioningMethod = PositioningMethod.nRECID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_uLTDOA
 * @constant
 * @type {number}
 */
export
const PositioningMethod_uLTDOA: PositioningMethod = PositioningMethod.uLTDOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uLTDOA
 * @constant
 * @type {number}
 */
export
const uLTDOA: PositioningMethod = PositioningMethod.uLTDOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_uLAOA
 * @constant
 * @type {number}
 */
export
const PositioningMethod_uLAOA: PositioningMethod = PositioningMethod.uLAOA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uLAOA
 * @constant
 * @type {number}
 */
export
const uLAOA: PositioningMethod = PositioningMethod.uLAOA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMethod_networkSpecific
 * @constant
 * @type {number}
 */
export
const PositioningMethod_networkSpecific: PositioningMethod = PositioningMethod.networkSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecific
 * @constant
 * @type {number}
 */
export
const networkSpecific: PositioningMethod = PositioningMethod.networkSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PositioningMethod: $.ASN1Decoder<PositioningMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositioningMethod (el: _Element): PositioningMethod {
    if (!_cached_decoder_for_PositioningMethod) { _cached_decoder_for_PositioningMethod = $._decodeEnumerated; }
    return _cached_decoder_for_PositioningMethod(el);
}

let _cached_encoder_for_PositioningMethod: $.ASN1Encoder<PositioningMethod> | null = null;

/**
 * @summary Encodes a(n) PositioningMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningMethod, encoded as an ASN.1 Element.
 */
export
function _encode_PositioningMethod (value: PositioningMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositioningMethod) { _cached_encoder_for_PositioningMethod = $._encodeEnumerated; }
    return _cached_encoder_for_PositioningMethod(value, elGetter);
}


/* eslint-enable */
