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
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RDSAction {
    reservePort = 1,
    releasePort = 2,
}

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSAction  ::=  ENUMERATED
 * {
 *     reservePort(1),
 *     releasePort(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RDSAction = _enum_for_RDSAction;

/**
 * @summary RDSAction_reservePort
 * @constant
 * @type {number}
 */
export
const RDSAction_reservePort: RDSAction = RDSAction.reservePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reservePort
 * @constant
 * @type {number}
 */
export
const reservePort: RDSAction = RDSAction.reservePort; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RDSAction_releasePort
 * @constant
 * @type {number}
 */
export
const RDSAction_releasePort: RDSAction = RDSAction.releasePort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releasePort
 * @constant
 * @type {number}
 */
export
const releasePort: RDSAction = RDSAction.releasePort; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RDSAction: $.ASN1Decoder<RDSAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDSAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RDSAction (el: _Element): RDSAction {
    if (!_cached_decoder_for_RDSAction) { _cached_decoder_for_RDSAction = $._decodeEnumerated; }
    return _cached_decoder_for_RDSAction(el);
}

let _cached_encoder_for_RDSAction: $.ASN1Encoder<RDSAction> | null = null;

/**
 * @summary Encodes a(n) RDSAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDSAction, encoded as an ASN.1 Element.
 */
export
function _encode_RDSAction (value: RDSAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RDSAction) { _cached_encoder_for_RDSAction = $._encodeEnumerated; }
    return _cached_encoder_for_RDSAction(value, elGetter);
}


/* eslint-enable */
