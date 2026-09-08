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
 * @summary SwDomainFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwDomainFeatures  ::=  BIT STRING
 * {     isForwardingBefore             ( 0),
 *     isForwardingAfter             ( 1),
 *     swFunctionDefaultSettings         ( 2),
 *     userSpecific                 ( 3),
 *     userSpecificDefaultFowardingType     ( 4),
 *     userSpecificDefaultForwardDestination     ( 5),
 *     negativeAcknowledgment             ( 6),
 *     supportFailedWithAssConn         ( 7),
 *     supportFailedWithoutAssConn         ( 8),
 *     supportFailedWithAssConnNotReportet     ( 9),
 *     recall                     (10),
 *     callBack                 (11),
 *     extCallsIncoming             (12),
 *     extCallsOutgoing             (13),
 *     prompting                 (14) }
 * ```
 */
export
type SwDomainFeatures = BIT_STRING;

/**
 * @summary SwDomainFeatures_isForwardingBefore
 * @constant
 */
export
const SwDomainFeatures_isForwardingBefore: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isForwardingBefore
 * @constant
 */
export
const isForwardingBefore: number = SwDomainFeatures_isForwardingBefore; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_isForwardingAfter
 * @constant
 */
export
const SwDomainFeatures_isForwardingAfter: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isForwardingAfter
 * @constant
 */
export
const isForwardingAfter: number = SwDomainFeatures_isForwardingAfter; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_swFunctionDefaultSettings
 * @constant
 */
export
const SwDomainFeatures_swFunctionDefaultSettings: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary swFunctionDefaultSettings
 * @constant
 */
export
const swFunctionDefaultSettings: number = SwDomainFeatures_swFunctionDefaultSettings; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecific
 * @constant
 */
export
const SwDomainFeatures_userSpecific: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary userSpecific
 * @constant
 */
export
const userSpecific: number = SwDomainFeatures_userSpecific; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecificDefaultFowardingType
 * @constant
 */
export
const SwDomainFeatures_userSpecificDefaultFowardingType: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary userSpecificDefaultFowardingType
 * @constant
 */
export
const userSpecificDefaultFowardingType: number = SwDomainFeatures_userSpecificDefaultFowardingType; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_userSpecificDefaultForwardDestination
 * @constant
 */
export
const SwDomainFeatures_userSpecificDefaultForwardDestination: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userSpecificDefaultForwardDestination
 * @constant
 */
export
const userSpecificDefaultForwardDestination: number = SwDomainFeatures_userSpecificDefaultForwardDestination; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_negativeAcknowledgment
 * @constant
 */
export
const SwDomainFeatures_negativeAcknowledgment: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary negativeAcknowledgment
 * @constant
 */
export
const negativeAcknowledgment: number = SwDomainFeatures_negativeAcknowledgment; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithAssConn
 * @constant
 */
export
const SwDomainFeatures_supportFailedWithAssConn: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithAssConn
 * @constant
 */
export
const supportFailedWithAssConn: number = SwDomainFeatures_supportFailedWithAssConn; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithoutAssConn
 * @constant
 */
export
const SwDomainFeatures_supportFailedWithoutAssConn: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithoutAssConn
 * @constant
 */
export
const supportFailedWithoutAssConn: number = SwDomainFeatures_supportFailedWithoutAssConn; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_supportFailedWithAssConnNotReportet
 * @constant
 */
export
const SwDomainFeatures_supportFailedWithAssConnNotReportet: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportFailedWithAssConnNotReportet
 * @constant
 */
export
const supportFailedWithAssConnNotReportet: number = SwDomainFeatures_supportFailedWithAssConnNotReportet; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_recall
 * @constant
 */
export
const SwDomainFeatures_recall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary recall
 * @constant
 */
export
const recall: number = SwDomainFeatures_recall; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_callBack
 * @constant
 */
export
const SwDomainFeatures_callBack: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callBack
 * @constant
 */
export
const callBack: number = SwDomainFeatures_callBack; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_extCallsIncoming
 * @constant
 */
export
const SwDomainFeatures_extCallsIncoming: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary extCallsIncoming
 * @constant
 */
export
const extCallsIncoming: number = SwDomainFeatures_extCallsIncoming; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_extCallsOutgoing
 * @constant
 */
export
const SwDomainFeatures_extCallsOutgoing: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary extCallsOutgoing
 * @constant
 */
export
const extCallsOutgoing: number = SwDomainFeatures_extCallsOutgoing; /* SHORT_NAMED_BIT */

/**
 * @summary SwDomainFeatures_prompting
 * @constant
 */
export
const SwDomainFeatures_prompting: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary prompting
 * @constant
 */
export
const prompting: number = SwDomainFeatures_prompting; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwDomainFeatures: $.ASN1Decoder<SwDomainFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwDomainFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwDomainFeatures (el: _Element): SwDomainFeatures {
    if (!_cached_decoder_for_SwDomainFeatures) { _cached_decoder_for_SwDomainFeatures = $._decodeBitString; }
    return _cached_decoder_for_SwDomainFeatures(el);
}

let _cached_encoder_for_SwDomainFeatures: $.ASN1Encoder<SwDomainFeatures> | null = null;

/**
 * @summary Encodes a(n) SwDomainFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwDomainFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_SwDomainFeatures (value: SwDomainFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwDomainFeatures) { _cached_encoder_for_SwDomainFeatures = $._encodeBitString; }
    return _cached_encoder_for_SwDomainFeatures(value, elGetter);
}


/* eslint-enable */
