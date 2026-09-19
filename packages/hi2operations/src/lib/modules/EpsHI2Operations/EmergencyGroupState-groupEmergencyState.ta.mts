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
enum _enum_for_EmergencyGroupState_groupEmergencyState {
    inForm = 1,
    reSponse = 2,
    cancelInform = 3,
    cancelResponse = 4,
}

/**
 * @summary EmergencyGroupState_groupEmergencyState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState-groupEmergencyState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type EmergencyGroupState_groupEmergencyState = _enum_for_EmergencyGroupState_groupEmergencyState | ENUMERATED;

/**
 * @summary EmergencyGroupState_groupEmergencyState_inForm
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_inForm: EmergencyGroupState_groupEmergencyState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inForm
 * @constant
 * @type {number}
 */
export
const inForm: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_inForm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_reSponse
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_reSponse: EmergencyGroupState_groupEmergencyState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reSponse
 * @constant
 * @type {number}
 */
export
const reSponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_reSponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelInform
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelInform: EmergencyGroupState_groupEmergencyState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelInform
 * @constant
 * @type {number}
 */
export
const cancelInform: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelInform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EmergencyGroupState_groupEmergencyState_cancelResponse
 * @constant
 * @type {number}
 */
export
const EmergencyGroupState_groupEmergencyState_cancelResponse: EmergencyGroupState_groupEmergencyState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelResponse
 * @constant
 * @type {number}
 */
export
const cancelResponse: EmergencyGroupState_groupEmergencyState = EmergencyGroupState_groupEmergencyState_cancelResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EmergencyGroupState_groupEmergencyState: $.ASN1Decoder<EmergencyGroupState_groupEmergencyState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmergencyGroupState_groupEmergencyState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmergencyGroupState_groupEmergencyState (el: _Element): EmergencyGroupState_groupEmergencyState {
    if (!_cached_decoder_for_EmergencyGroupState_groupEmergencyState) { _cached_decoder_for_EmergencyGroupState_groupEmergencyState = $._decodeEnumerated; }
    return _cached_decoder_for_EmergencyGroupState_groupEmergencyState(el);
}

let _cached_encoder_for_EmergencyGroupState_groupEmergencyState: $.ASN1Encoder<EmergencyGroupState_groupEmergencyState> | null = null;

/**
 * @summary Encodes a(n) EmergencyGroupState_groupEmergencyState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmergencyGroupState_groupEmergencyState, encoded as an ASN.1 Element.
 */
export
function _encode_EmergencyGroupState_groupEmergencyState (value: EmergencyGroupState_groupEmergencyState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmergencyGroupState_groupEmergencyState) { _cached_encoder_for_EmergencyGroupState_groupEmergencyState = $._encodeEnumerated; }
    return _cached_encoder_for_EmergencyGroupState_groupEmergencyState(value, elGetter);
}


/* eslint-enable */
