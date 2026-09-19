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



export
enum _enum_for_CCLink_State {
    setUpInProcess = 1,
    callActive = 2,
    callReleased = 3,
    lack_of_resource = 4,
}

/**
 * @summary CCLink_State
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCLink-State  ::=  ENUMERATED
 * {
 *     setUpInProcess(1),
 *         -- The set-up of the call is in process
 *     callActive(2),
 *     callReleased(3),
 *     lack-of-resource(4),
 *         -- The lack-of-resource state is sent when a CC Link cannot
 *         -- be established because of lack of resource at the MF level.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CCLink_State = _enum_for_CCLink_State | ENUMERATED;

/**
 * @summary CCLink_State_setUpInProcess
 * @constant
 * @type {number}
 */
export
const CCLink_State_setUpInProcess: CCLink_State = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary setUpInProcess
 * @constant
 * @type {number}
 */
export
const setUpInProcess: CCLink_State = CCLink_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callActive
 * @constant
 * @type {number}
 */
export
const CCLink_State_callActive: CCLink_State = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callActive
 * @constant
 * @type {number}
 */
export
const callActive: CCLink_State = CCLink_State_callActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callReleased
 * @constant
 * @type {number}
 */
export
const CCLink_State_callReleased: CCLink_State = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReleased
 * @constant
 * @type {number}
 */
export
const callReleased: CCLink_State = CCLink_State_callReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_lack_of_resource
 * @constant
 * @type {number}
 */
export
const CCLink_State_lack_of_resource: CCLink_State = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lack_of_resource
 * @constant
 * @type {number}
 */
export
const lack_of_resource: CCLink_State = CCLink_State_lack_of_resource; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CCLink_State: $.ASN1Decoder<CCLink_State> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCLink_State
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCLink_State (el: _Element): CCLink_State {
    if (!_cached_decoder_for_CCLink_State) { _cached_decoder_for_CCLink_State = $._decodeEnumerated; }
    return _cached_decoder_for_CCLink_State(el);
}

let _cached_encoder_for_CCLink_State: $.ASN1Encoder<CCLink_State> | null = null;

/**
 * @summary Encodes a(n) CCLink_State into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCLink_State, encoded as an ASN.1 Element.
 */
export
function _encode_CCLink_State (value: CCLink_State, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCLink_State) { _cached_encoder_for_CCLink_State = $._encodeEnumerated; }
    return _cached_encoder_for_CCLink_State(value, elGetter);
}


/* eslint-enable */
