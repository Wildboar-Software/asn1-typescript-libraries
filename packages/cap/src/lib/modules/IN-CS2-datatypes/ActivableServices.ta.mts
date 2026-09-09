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
 * @summary ActivableServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivableServices  ::=  BIT STRING {
 *   callingLineIdentificationPresentation(1),
 *   callingLineIdentificationRestriction(2),
 *   connectedLineIdentificationPresentation(3),
 *   connectedLineIdentificationRestriction(4), callForwardingOnNoReply(5),
 *   callForwardingUnconditional(6), callForwardingOnBusy(7),
 *   callForwardingOnNotReachable(8), reverseCharging(9),
 *   adviceOfChargeOnStart(10), adviceOfChargeAtEnd(11),
 *   adviceOfChargeDuringCall(12), timeDependentRouting(13),
 *   callingPartingDependentRouting(14), outgoingCallBarring(15),
 *   incomingCallBarring(16)}
 * ```
 */
export
type ActivableServices = BIT_STRING;

/**
 * @summary ActivableServices_callingLineIdentificationPresentation
 * @constant
 */
export
const ActivableServices_callingLineIdentificationPresentation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callingLineIdentificationPresentation
 * @constant
 */
export
const callingLineIdentificationPresentation: number = ActivableServices_callingLineIdentificationPresentation; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callingLineIdentificationRestriction
 * @constant
 */
export
const ActivableServices_callingLineIdentificationRestriction: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callingLineIdentificationRestriction
 * @constant
 */
export
const callingLineIdentificationRestriction: number = ActivableServices_callingLineIdentificationRestriction; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_connectedLineIdentificationPresentation
 * @constant
 */
export
const ActivableServices_connectedLineIdentificationPresentation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectedLineIdentificationPresentation
 * @constant
 */
export
const connectedLineIdentificationPresentation: number = ActivableServices_connectedLineIdentificationPresentation; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_connectedLineIdentificationRestriction
 * @constant
 */
export
const ActivableServices_connectedLineIdentificationRestriction: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary connectedLineIdentificationRestriction
 * @constant
 */
export
const connectedLineIdentificationRestriction: number = ActivableServices_connectedLineIdentificationRestriction; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callForwardingOnNoReply
 * @constant
 */
export
const ActivableServices_callForwardingOnNoReply: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnNoReply
 * @constant
 */
export
const callForwardingOnNoReply: number = ActivableServices_callForwardingOnNoReply; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callForwardingUnconditional
 * @constant
 */
export
const ActivableServices_callForwardingUnconditional: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingUnconditional
 * @constant
 */
export
const callForwardingUnconditional: number = ActivableServices_callForwardingUnconditional; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callForwardingOnBusy
 * @constant
 */
export
const ActivableServices_callForwardingOnBusy: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnBusy
 * @constant
 */
export
const callForwardingOnBusy: number = ActivableServices_callForwardingOnBusy; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callForwardingOnNotReachable
 * @constant
 */
export
const ActivableServices_callForwardingOnNotReachable: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnNotReachable
 * @constant
 */
export
const callForwardingOnNotReachable: number = ActivableServices_callForwardingOnNotReachable; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_reverseCharging
 * @constant
 */
export
const ActivableServices_reverseCharging: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary reverseCharging
 * @constant
 */
export
const reverseCharging: number = ActivableServices_reverseCharging; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_adviceOfChargeOnStart
 * @constant
 */
export
const ActivableServices_adviceOfChargeOnStart: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeOnStart
 * @constant
 */
export
const adviceOfChargeOnStart: number = ActivableServices_adviceOfChargeOnStart; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_adviceOfChargeAtEnd
 * @constant
 */
export
const ActivableServices_adviceOfChargeAtEnd: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeAtEnd
 * @constant
 */
export
const adviceOfChargeAtEnd: number = ActivableServices_adviceOfChargeAtEnd; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_adviceOfChargeDuringCall
 * @constant
 */
export
const ActivableServices_adviceOfChargeDuringCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeDuringCall
 * @constant
 */
export
const adviceOfChargeDuringCall: number = ActivableServices_adviceOfChargeDuringCall; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_timeDependentRouting
 * @constant
 */
export
const ActivableServices_timeDependentRouting: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary timeDependentRouting
 * @constant
 */
export
const timeDependentRouting: number = ActivableServices_timeDependentRouting; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_callingPartingDependentRouting
 * @constant
 */
export
const ActivableServices_callingPartingDependentRouting: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callingPartingDependentRouting
 * @constant
 */
export
const callingPartingDependentRouting: number = ActivableServices_callingPartingDependentRouting; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_outgoingCallBarring
 * @constant
 */
export
const ActivableServices_outgoingCallBarring: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary outgoingCallBarring
 * @constant
 */
export
const outgoingCallBarring: number = ActivableServices_outgoingCallBarring; /* SHORT_NAMED_BIT */

/**
 * @summary ActivableServices_incomingCallBarring
 * @constant
 */
export
const ActivableServices_incomingCallBarring: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary incomingCallBarring
 * @constant
 */
export
const incomingCallBarring: number = ActivableServices_incomingCallBarring; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ActivableServices: $.ASN1Decoder<ActivableServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivableServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivableServices (el: _Element): ActivableServices {
    if (!_cached_decoder_for_ActivableServices) { _cached_decoder_for_ActivableServices = $._decodeBitString; }
    return _cached_decoder_for_ActivableServices(el);
}

let _cached_encoder_for_ActivableServices: $.ASN1Encoder<ActivableServices> | null = null;

/**
 * @summary Encodes a(n) ActivableServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivableServices, encoded as an ASN.1 Element.
 */
export
function _encode_ActivableServices (value: ActivableServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivableServices) { _cached_encoder_for_ActivableServices = $._encodeBitString; }
    return _cached_encoder_for_ActivableServices(value, elGetter);
}


/* eslint-enable */
