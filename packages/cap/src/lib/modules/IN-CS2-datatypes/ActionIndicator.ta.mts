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
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActionIndicator {
    activate = 1,
    deactivate = 2,
    retrieve = 3,
}

/**
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActionIndicator = _enum_for_ActionIndicator;

/**
 * @summary ActionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionIndicator  ::=  ENUMERATED {activate(1), deactivate(2), retrieve(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ActionIndicator = _enum_for_ActionIndicator;

/**
 * @summary ActionIndicator_activate
 * @constant
 * @type {number}
 */
export
const ActionIndicator_activate: ActionIndicator = ActionIndicator.activate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @constant
 * @type {number}
 */
export
const activate: ActionIndicator = ActionIndicator.activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_deactivate
 * @constant
 * @type {number}
 */
export
const ActionIndicator_deactivate: ActionIndicator = ActionIndicator.deactivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @constant
 * @type {number}
 */
export
const deactivate: ActionIndicator = ActionIndicator.deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionIndicator_retrieve
 * @constant
 * @type {number}
 */
export
const ActionIndicator_retrieve: ActionIndicator = ActionIndicator.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: ActionIndicator = ActionIndicator.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActionIndicator: $.ASN1Decoder<ActionIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActionIndicator (el: _Element): ActionIndicator {
    if (!_cached_decoder_for_ActionIndicator) { _cached_decoder_for_ActionIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_ActionIndicator(el);
}

let _cached_encoder_for_ActionIndicator: $.ASN1Encoder<ActionIndicator> | null = null;

/**
 * @summary Encodes a(n) ActionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ActionIndicator (value: ActionIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActionIndicator) { _cached_encoder_for_ActionIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_ActionIndicator(value, elGetter);
}


/* eslint-enable */
