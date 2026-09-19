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
enum _enum_for_ServiceState {
    test = 0,
    outOfSvc = 1,
    inSvc = 2,
}

/**
 * @summary ServiceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceState  ::=  ENUMERATED
 *     {
 *         test(0),
 *         outOfSvc(1),
 *         inSvc(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceState = _enum_for_ServiceState | ENUMERATED;

/**
 * @summary ServiceState_test
 * @constant
 * @type {number}
 */
export
const ServiceState_test: ServiceState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary test
 * @constant
 * @type {number}
 */
export
const test: ServiceState = ServiceState_test; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_outOfSvc
 * @constant
 * @type {number}
 */
export
const ServiceState_outOfSvc: ServiceState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfSvc
 * @constant
 * @type {number}
 */
export
const outOfSvc: ServiceState = ServiceState_outOfSvc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceState_inSvc
 * @constant
 * @type {number}
 */
export
const ServiceState_inSvc: ServiceState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inSvc
 * @constant
 * @type {number}
 */
export
const inSvc: ServiceState = ServiceState_inSvc; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ServiceState: $.ASN1Decoder<ServiceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceState (el: _Element): ServiceState {
    if (!_cached_decoder_for_ServiceState) { _cached_decoder_for_ServiceState = $._decodeEnumerated; }
    return _cached_decoder_for_ServiceState(el);
}

let _cached_encoder_for_ServiceState: $.ASN1Encoder<ServiceState> | null = null;

/**
 * @summary Encodes a(n) ServiceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceState, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceState (value: ServiceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceState) { _cached_encoder_for_ServiceState = $._encodeEnumerated; }
    return _cached_encoder_for_ServiceState(value, elGetter);
}


/* eslint-enable */
