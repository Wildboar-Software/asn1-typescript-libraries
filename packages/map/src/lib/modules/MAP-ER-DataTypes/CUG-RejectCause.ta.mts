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
 * @summary CUG_RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-RejectCause  ::=  ENUMERATED {
 *     incomingCallsBarredWithinCUG  (0),
 *     subscriberNotMemberOfCUG  (1),
 *     requestedBasicServiceViolatesCUG-Constraints  (5),
 *     calledPartySS-InteractionViolation  (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CUG_RejectCause {
    incomingCallsBarredWithinCUG = 0,
    subscriberNotMemberOfCUG = 1,
    requestedBasicServiceViolatesCUG_Constraints = 5,
    calledPartySS_InteractionViolation = 7,
}

/**
 * @summary CUG_RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-RejectCause  ::=  ENUMERATED {
 *     incomingCallsBarredWithinCUG  (0),
 *     subscriberNotMemberOfCUG  (1),
 *     requestedBasicServiceViolatesCUG-Constraints  (5),
 *     calledPartySS-InteractionViolation  (7)}
 * ```
 * 
 * @enum {number}
 */
export
type CUG_RejectCause = _enum_for_CUG_RejectCause;

/**
 * @summary CUG_RejectCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-RejectCause  ::=  ENUMERATED {
 *     incomingCallsBarredWithinCUG  (0),
 *     subscriberNotMemberOfCUG  (1),
 *     requestedBasicServiceViolatesCUG-Constraints  (5),
 *     calledPartySS-InteractionViolation  (7)}
 * ```
 * 
 * @enum {number}
 */
export
const CUG_RejectCause = _enum_for_CUG_RejectCause;

/**
 * @summary CUG_RejectCause_incomingCallsBarredWithinCUG
 * @constant
 * @type {number}
 */
export
const CUG_RejectCause_incomingCallsBarredWithinCUG: CUG_RejectCause = CUG_RejectCause.incomingCallsBarredWithinCUG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incomingCallsBarredWithinCUG
 * @constant
 * @type {number}
 */
export
const incomingCallsBarredWithinCUG: CUG_RejectCause = CUG_RejectCause.incomingCallsBarredWithinCUG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CUG_RejectCause_subscriberNotMemberOfCUG
 * @constant
 * @type {number}
 */
export
const CUG_RejectCause_subscriberNotMemberOfCUG: CUG_RejectCause = CUG_RejectCause.subscriberNotMemberOfCUG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNotMemberOfCUG
 * @constant
 * @type {number}
 */
export
const subscriberNotMemberOfCUG: CUG_RejectCause = CUG_RejectCause.subscriberNotMemberOfCUG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CUG_RejectCause_requestedBasicServiceViolatesCUG_Constraints
 * @constant
 * @type {number}
 */
export
const CUG_RejectCause_requestedBasicServiceViolatesCUG_Constraints: CUG_RejectCause = CUG_RejectCause.requestedBasicServiceViolatesCUG_Constraints; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedBasicServiceViolatesCUG_Constraints
 * @constant
 * @type {number}
 */
export
const requestedBasicServiceViolatesCUG_Constraints: CUG_RejectCause = CUG_RejectCause.requestedBasicServiceViolatesCUG_Constraints; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CUG_RejectCause_calledPartySS_InteractionViolation
 * @constant
 * @type {number}
 */
export
const CUG_RejectCause_calledPartySS_InteractionViolation: CUG_RejectCause = CUG_RejectCause.calledPartySS_InteractionViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledPartySS_InteractionViolation
 * @constant
 * @type {number}
 */
export
const calledPartySS_InteractionViolation: CUG_RejectCause = CUG_RejectCause.calledPartySS_InteractionViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CUG_RejectCause: $.ASN1Decoder<CUG_RejectCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_RejectCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_RejectCause (el: _Element): CUG_RejectCause {
    if (!_cached_decoder_for_CUG_RejectCause) { _cached_decoder_for_CUG_RejectCause = $._decodeEnumerated; }
    return _cached_decoder_for_CUG_RejectCause(el);
}

let _cached_encoder_for_CUG_RejectCause: $.ASN1Encoder<CUG_RejectCause> | null = null;

/**
 * @summary Encodes a(n) CUG_RejectCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_RejectCause, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_RejectCause (value: CUG_RejectCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_RejectCause) { _cached_encoder_for_CUG_RejectCause = $._encodeEnumerated; }
    return _cached_encoder_for_CUG_RejectCause(value, elGetter);
}


/* eslint-enable */
