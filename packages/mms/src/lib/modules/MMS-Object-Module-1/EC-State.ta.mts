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
 * @summary EC_State
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EC-State  ::=  INTEGER {
 *   disabled                            (0),
 *   idle                                (1),
 *   active                              (2)
 * } (0..2)
 * ```
 */
export
type EC_State = INTEGER;

/**
 * @summary EC_State_disabled
 * @constant
 * @type {number}
 */
export
const EC_State_disabled: EC_State = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_disabled
 * @constant
 * @type {number}
 */
export
const disabled: EC_State = EC_State_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_idle
 * @constant
 * @type {number}
 */
export
const EC_State_idle: EC_State = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_idle
 * @constant
 * @type {number}
 */
export
const idle: EC_State = EC_State_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_active
 * @constant
 * @type {number}
 */
export
const EC_State_active: EC_State = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_active
 * @constant
 * @type {number}
 */
export
const active: EC_State = EC_State_active; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EC_State: $.ASN1Decoder<EC_State> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EC_State
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EC_State (el: _Element): EC_State {
    if (!_cached_decoder_for_EC_State) { _cached_decoder_for_EC_State = $._decodeInteger; }
    return _cached_decoder_for_EC_State(el);
}

let _cached_encoder_for_EC_State: $.ASN1Encoder<EC_State> | null = null;

/**
 * @summary Encodes a(n) EC_State into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EC_State, encoded as an ASN.1 Element.
 */
export
function _encode_EC_State (value: EC_State, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EC_State) { _cached_encoder_for_EC_State = $._encodeInteger; }
    return _cached_encoder_for_EC_State(value, elGetter);
}


/* eslint-enable */
