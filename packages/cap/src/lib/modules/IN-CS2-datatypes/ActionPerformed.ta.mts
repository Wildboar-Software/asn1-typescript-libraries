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
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActionPerformed {
    activated = 1,
    deactivated = 2,
    alreadyActive = 3,
    alreadyInactive = 4,
    isActive = 5,
    isInactive = 6,
}

/**
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
type ActionPerformed = _enum_for_ActionPerformed;

/**
 * @summary ActionPerformed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionPerformed  ::=  ENUMERATED {
 *   activated(1), deactivated(2), alreadyActive(3), alreadyInactive(4),
 *   isActive(5), isInactive(6)}
 * ```
 * 
 * @enum {number}
 */
export
const ActionPerformed = _enum_for_ActionPerformed;

/**
 * @summary ActionPerformed_activated
 * @constant
 * @type {number}
 */
export
const ActionPerformed_activated: ActionPerformed = ActionPerformed.activated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activated
 * @constant
 * @type {number}
 */
export
const activated: ActionPerformed = ActionPerformed.activated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_deactivated
 * @constant
 * @type {number}
 */
export
const ActionPerformed_deactivated: ActionPerformed = ActionPerformed.deactivated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivated
 * @constant
 * @type {number}
 */
export
const deactivated: ActionPerformed = ActionPerformed.deactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyActive: ActionPerformed = ActionPerformed.alreadyActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyActive
 * @constant
 * @type {number}
 */
export
const alreadyActive: ActionPerformed = ActionPerformed.alreadyActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_alreadyInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_alreadyInactive: ActionPerformed = ActionPerformed.alreadyInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alreadyInactive
 * @constant
 * @type {number}
 */
export
const alreadyInactive: ActionPerformed = ActionPerformed.alreadyInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isActive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isActive: ActionPerformed = ActionPerformed.isActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isActive
 * @constant
 * @type {number}
 */
export
const isActive: ActionPerformed = ActionPerformed.isActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionPerformed_isInactive
 * @constant
 * @type {number}
 */
export
const ActionPerformed_isInactive: ActionPerformed = ActionPerformed.isInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isInactive
 * @constant
 * @type {number}
 */
export
const isInactive: ActionPerformed = ActionPerformed.isInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActionPerformed: $.ASN1Decoder<ActionPerformed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionPerformed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActionPerformed (el: _Element): ActionPerformed {
    if (!_cached_decoder_for_ActionPerformed) { _cached_decoder_for_ActionPerformed = $._decodeEnumerated; }
    return _cached_decoder_for_ActionPerformed(el);
}

let _cached_encoder_for_ActionPerformed: $.ASN1Encoder<ActionPerformed> | null = null;

/**
 * @summary Encodes a(n) ActionPerformed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionPerformed, encoded as an ASN.1 Element.
 */
export
function _encode_ActionPerformed (value: ActionPerformed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActionPerformed) { _cached_encoder_for_ActionPerformed = $._encodeEnumerated; }
    return _cached_encoder_for_ActionPerformed(value, elGetter);
}


/* eslint-enable */
