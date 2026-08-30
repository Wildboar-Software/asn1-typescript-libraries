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
 * @summary OfferedCamel4Functionalities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OfferedCamel4Functionalities  ::=  BIT STRING {    
 *     initiateCallAttempt    (0),
 *     splitLeg    (1),
 *     moveLeg    (2),
 *     disconnectLeg    (3),
 *     entityReleased    (4),
 *     dfc-WithArgument    (5),
 *     playTone    (6),
 *     dtmf-MidCall    (7),
 *     chargingIndicator    (8),
 *     alertingDP    (9),
 *     locationAtAlerting    (10),
 *     changeOfPositionDP    (11),
 *     or-Interactions    (12),
 *     warningToneEnhancements    (13),
 *     cf-Enhancements    (14),
 *     subscribedEnhancedDialledServices    (15),
 *     servingNetworkEnhancedDialledServices (16),
 *     criteriaForChangeOfPositionDP    (17),
 *     serviceChangeDP    (18),
 *     collectInformation    (19)
 * } (SIZE (15..64))
 * ```
 */
export
type OfferedCamel4Functionalities = BIT_STRING;

/**
 * @summary OfferedCamel4Functionalities_initiateCallAttempt
 * @constant
 */
export
const OfferedCamel4Functionalities_initiateCallAttempt: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary initiateCallAttempt
 * @constant
 */
export
const initiateCallAttempt: number = OfferedCamel4Functionalities_initiateCallAttempt; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_splitLeg
 * @constant
 */
export
const OfferedCamel4Functionalities_splitLeg: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary splitLeg
 * @constant
 */
export
const splitLeg: number = OfferedCamel4Functionalities_splitLeg; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_moveLeg
 * @constant
 */
export
const OfferedCamel4Functionalities_moveLeg: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary moveLeg
 * @constant
 */
export
const moveLeg: number = OfferedCamel4Functionalities_moveLeg; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_disconnectLeg
 * @constant
 */
export
const OfferedCamel4Functionalities_disconnectLeg: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary disconnectLeg
 * @constant
 */
export
const disconnectLeg: number = OfferedCamel4Functionalities_disconnectLeg; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_entityReleased
 * @constant
 */
export
const OfferedCamel4Functionalities_entityReleased: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary entityReleased
 * @constant
 */
export
const entityReleased: number = OfferedCamel4Functionalities_entityReleased; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_dfc_WithArgument
 * @constant
 */
export
const OfferedCamel4Functionalities_dfc_WithArgument: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary dfc_WithArgument
 * @constant
 */
export
const dfc_WithArgument: number = OfferedCamel4Functionalities_dfc_WithArgument; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_playTone
 * @constant
 */
export
const OfferedCamel4Functionalities_playTone: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary playTone
 * @constant
 */
export
const playTone: number = OfferedCamel4Functionalities_playTone; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_dtmf_MidCall
 * @constant
 */
export
const OfferedCamel4Functionalities_dtmf_MidCall: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary dtmf_MidCall
 * @constant
 */
export
const dtmf_MidCall: number = OfferedCamel4Functionalities_dtmf_MidCall; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_chargingIndicator
 * @constant
 */
export
const OfferedCamel4Functionalities_chargingIndicator: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary chargingIndicator
 * @constant
 */
export
const chargingIndicator: number = OfferedCamel4Functionalities_chargingIndicator; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_alertingDP
 * @constant
 */
export
const OfferedCamel4Functionalities_alertingDP: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary alertingDP
 * @constant
 */
export
const alertingDP: number = OfferedCamel4Functionalities_alertingDP; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_locationAtAlerting
 * @constant
 */
export
const OfferedCamel4Functionalities_locationAtAlerting: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary locationAtAlerting
 * @constant
 */
export
const locationAtAlerting: number = OfferedCamel4Functionalities_locationAtAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_changeOfPositionDP
 * @constant
 */
export
const OfferedCamel4Functionalities_changeOfPositionDP: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary changeOfPositionDP
 * @constant
 */
export
const changeOfPositionDP: number = OfferedCamel4Functionalities_changeOfPositionDP; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_or_Interactions
 * @constant
 */
export
const OfferedCamel4Functionalities_or_Interactions: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary or_Interactions
 * @constant
 */
export
const or_Interactions: number = OfferedCamel4Functionalities_or_Interactions; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_warningToneEnhancements
 * @constant
 */
export
const OfferedCamel4Functionalities_warningToneEnhancements: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary warningToneEnhancements
 * @constant
 */
export
const warningToneEnhancements: number = OfferedCamel4Functionalities_warningToneEnhancements; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_cf_Enhancements
 * @constant
 */
export
const OfferedCamel4Functionalities_cf_Enhancements: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary cf_Enhancements
 * @constant
 */
export
const cf_Enhancements: number = OfferedCamel4Functionalities_cf_Enhancements; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_subscribedEnhancedDialledServices
 * @constant
 */
export
const OfferedCamel4Functionalities_subscribedEnhancedDialledServices: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary subscribedEnhancedDialledServices
 * @constant
 */
export
const subscribedEnhancedDialledServices: number = OfferedCamel4Functionalities_subscribedEnhancedDialledServices; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices
 * @constant
 */
export
const OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary servingNetworkEnhancedDialledServices
 * @constant
 */
export
const servingNetworkEnhancedDialledServices: number = OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_criteriaForChangeOfPositionDP
 * @constant
 */
export
const OfferedCamel4Functionalities_criteriaForChangeOfPositionDP: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary criteriaForChangeOfPositionDP
 * @constant
 */
export
const criteriaForChangeOfPositionDP: number = OfferedCamel4Functionalities_criteriaForChangeOfPositionDP; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_serviceChangeDP
 * @constant
 */
export
const OfferedCamel4Functionalities_serviceChangeDP: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary serviceChangeDP
 * @constant
 */
export
const serviceChangeDP: number = OfferedCamel4Functionalities_serviceChangeDP; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4Functionalities_collectInformation
 * @constant
 */
export
const OfferedCamel4Functionalities_collectInformation: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary collectInformation
 * @constant
 */
export
const collectInformation: number = OfferedCamel4Functionalities_collectInformation; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OfferedCamel4Functionalities: $.ASN1Decoder<OfferedCamel4Functionalities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OfferedCamel4Functionalities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OfferedCamel4Functionalities (el: _Element): OfferedCamel4Functionalities {
    if (!_cached_decoder_for_OfferedCamel4Functionalities) { _cached_decoder_for_OfferedCamel4Functionalities = $._decodeBitString; }
    return _cached_decoder_for_OfferedCamel4Functionalities(el);
}

let _cached_encoder_for_OfferedCamel4Functionalities: $.ASN1Encoder<OfferedCamel4Functionalities> | null = null;

/**
 * @summary Encodes a(n) OfferedCamel4Functionalities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OfferedCamel4Functionalities, encoded as an ASN.1 Element.
 */
export
function _encode_OfferedCamel4Functionalities (value: OfferedCamel4Functionalities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OfferedCamel4Functionalities) { _cached_encoder_for_OfferedCamel4Functionalities = $._encodeBitString; }
    return _cached_encoder_for_OfferedCamel4Functionalities(value, elGetter);
}


/* eslint-enable */
