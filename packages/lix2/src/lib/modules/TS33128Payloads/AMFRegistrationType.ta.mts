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
 * @summary AMFRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFRegistrationType {
    initial = 1,
    mobility = 2,
    periodic = 3,
    emergency = 4,
    sNPNOnboarding = 5,
    disasterMobility = 6,
    disasterInitial = 7,
}

/**
 * @summary AMFRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFRegistrationType = _enum_for_AMFRegistrationType;

/**
 * @summary AMFRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFRegistrationType = _enum_for_AMFRegistrationType;

/**
 * @summary AMFRegistrationType_initial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_initial: AMFRegistrationType = AMFRegistrationType.initial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initial
 * @constant
 * @type {number}
 */
export
const initial: AMFRegistrationType = AMFRegistrationType.initial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_mobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_mobility: AMFRegistrationType = AMFRegistrationType.mobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobility
 * @constant
 * @type {number}
 */
export
const mobility: AMFRegistrationType = AMFRegistrationType.mobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_periodic
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_periodic: AMFRegistrationType = AMFRegistrationType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: AMFRegistrationType = AMFRegistrationType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_emergency
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_emergency: AMFRegistrationType = AMFRegistrationType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: AMFRegistrationType = AMFRegistrationType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_sNPNOnboarding: AMFRegistrationType = AMFRegistrationType.sNPNOnboarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const sNPNOnboarding: AMFRegistrationType = AMFRegistrationType.sNPNOnboarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterMobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterMobility: AMFRegistrationType = AMFRegistrationType.disasterMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterMobility
 * @constant
 * @type {number}
 */
export
const disasterMobility: AMFRegistrationType = AMFRegistrationType.disasterMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterInitial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterInitial: AMFRegistrationType = AMFRegistrationType.disasterInitial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterInitial
 * @constant
 * @type {number}
 */
export
const disasterInitial: AMFRegistrationType = AMFRegistrationType.disasterInitial; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFRegistrationType: $.ASN1Decoder<AMFRegistrationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRegistrationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRegistrationType (el: _Element): AMFRegistrationType {
    if (!_cached_decoder_for_AMFRegistrationType) { _cached_decoder_for_AMFRegistrationType = $._decodeEnumerated; }
    return _cached_decoder_for_AMFRegistrationType(el);
}

let _cached_encoder_for_AMFRegistrationType: $.ASN1Encoder<AMFRegistrationType> | null = null;

/**
 * @summary Encodes a(n) AMFRegistrationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRegistrationType, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRegistrationType (value: AMFRegistrationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRegistrationType) { _cached_encoder_for_AMFRegistrationType = $._encodeEnumerated; }
    return _cached_encoder_for_AMFRegistrationType(value, elGetter);
}


/* eslint-enable */
