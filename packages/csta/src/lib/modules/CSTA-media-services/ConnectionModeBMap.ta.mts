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
 * @summary ConnectionModeBMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionModeBMap  ::=  BIT STRING
 * {     consultationConference             (0),
 *     consultationConferenceHold         (1),
 *     deflect                 (2),
 *     directedPickup                 (3),
 *     join                     (4),
 *     singleStepConference             (5),
 *     singleStepConferenceHold         (6),
 *     singleStepTransfer             (7),
 *     transfer                 (8),
 *     direct                     (9) }
 * ```
 */
export
type ConnectionModeBMap = BIT_STRING;

/**
 * @summary ConnectionModeBMap_consultationConference
 * @constant
 */
export
const ConnectionModeBMap_consultationConference: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consultationConference
 * @constant
 */
export
const consultationConference: number = ConnectionModeBMap_consultationConference; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_consultationConferenceHold
 * @constant
 */
export
const ConnectionModeBMap_consultationConferenceHold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary consultationConferenceHold
 * @constant
 */
export
const consultationConferenceHold: number = ConnectionModeBMap_consultationConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_deflect
 * @constant
 */
export
const ConnectionModeBMap_deflect: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deflect
 * @constant
 */
export
const deflect: number = ConnectionModeBMap_deflect; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_directedPickup
 * @constant
 */
export
const ConnectionModeBMap_directedPickup: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary directedPickup
 * @constant
 */
export
const directedPickup: number = ConnectionModeBMap_directedPickup; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_join
 * @constant
 */
export
const ConnectionModeBMap_join: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary join
 * @constant
 */
export
const join: number = ConnectionModeBMap_join; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepConference
 * @constant
 */
export
const ConnectionModeBMap_singleStepConference: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConference
 * @constant
 */
export
const singleStepConference: number = ConnectionModeBMap_singleStepConference; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepConferenceHold
 * @constant
 */
export
const ConnectionModeBMap_singleStepConferenceHold: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary singleStepConferenceHold
 * @constant
 */
export
const singleStepConferenceHold: number = ConnectionModeBMap_singleStepConferenceHold; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_singleStepTransfer
 * @constant
 */
export
const ConnectionModeBMap_singleStepTransfer: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary singleStepTransfer
 * @constant
 */
export
const singleStepTransfer: number = ConnectionModeBMap_singleStepTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_transfer
 * @constant
 */
export
const ConnectionModeBMap_transfer: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary transfer
 * @constant
 */
export
const transfer: number = ConnectionModeBMap_transfer; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionModeBMap_direct
 * @constant
 */
export
const ConnectionModeBMap_direct: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary direct
 * @constant
 */
export
const direct: number = ConnectionModeBMap_direct; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConnectionModeBMap: $.ASN1Decoder<ConnectionModeBMap> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionModeBMap
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionModeBMap (el: _Element): ConnectionModeBMap {
    if (!_cached_decoder_for_ConnectionModeBMap) { _cached_decoder_for_ConnectionModeBMap = $._decodeBitString; }
    return _cached_decoder_for_ConnectionModeBMap(el);
}

let _cached_encoder_for_ConnectionModeBMap: $.ASN1Encoder<ConnectionModeBMap> | null = null;

/**
 * @summary Encodes a(n) ConnectionModeBMap into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionModeBMap, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionModeBMap (value: ConnectionModeBMap, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionModeBMap) { _cached_encoder_for_ConnectionModeBMap = $._encodeBitString; }
    return _cached_encoder_for_ConnectionModeBMap(value, elGetter);
}


/* eslint-enable */
