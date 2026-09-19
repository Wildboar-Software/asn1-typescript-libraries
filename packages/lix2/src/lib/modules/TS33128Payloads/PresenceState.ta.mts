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
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceState {
    inArea = 1,
    outOfArea = 2,
    unknown = 3,
    inactive = 4,
}

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState_inArea
 * @constant
 * @type {number}
 */
export
const PresenceState_inArea: PresenceState = PresenceState.inArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inArea
 * @constant
 * @type {number}
 */
export
const inArea: PresenceState = PresenceState.inArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_outOfArea
 * @constant
 * @type {number}
 */
export
const PresenceState_outOfArea: PresenceState = PresenceState.outOfArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfArea
 * @constant
 * @type {number}
 */
export
const outOfArea: PresenceState = PresenceState.outOfArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_unknown
 * @constant
 * @type {number}
 */
export
const PresenceState_unknown: PresenceState = PresenceState.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PresenceState = PresenceState.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_inactive
 * @constant
 * @type {number}
 */
export
const PresenceState_inactive: PresenceState = PresenceState.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: PresenceState = PresenceState.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PresenceState: $.ASN1Decoder<PresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceState (el: _Element): PresenceState {
    if (!_cached_decoder_for_PresenceState) { _cached_decoder_for_PresenceState = $._decodeEnumerated; }
    return _cached_decoder_for_PresenceState(el);
}

let _cached_encoder_for_PresenceState: $.ASN1Encoder<PresenceState> | null = null;

/**
 * @summary Encodes a(n) PresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceState (value: PresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceState) { _cached_encoder_for_PresenceState = $._encodeEnumerated; }
    return _cached_encoder_for_PresenceState(value, elGetter);
}


/* eslint-enable */
