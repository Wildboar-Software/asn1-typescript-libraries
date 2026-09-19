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
 * @summary PTCListManagementAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementAction {
    create = 1,
    modify = 2,
    retrieve = 3,
    delete_ = 4,
    notify = 5,
}

/**
 * @summary PTCListManagementAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementAction = _enum_for_PTCListManagementAction;

/**
 * @summary PTCListManagementAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementAction   ::=  ENUMERATED
 * {
 *     create(1),
 *     modify(2),
 *     retrieve(3),
 *     delete(4),
 *     notify(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementAction = _enum_for_PTCListManagementAction;

/**
 * @summary PTCListManagementAction_create
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_create: PTCListManagementAction = PTCListManagementAction.create; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @constant
 * @type {number}
 */
export
const create: PTCListManagementAction = PTCListManagementAction.create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_modify
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_modify: PTCListManagementAction = PTCListManagementAction.modify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @constant
 * @type {number}
 */
export
const modify: PTCListManagementAction = PTCListManagementAction.modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_retrieve
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_retrieve: PTCListManagementAction = PTCListManagementAction.retrieve; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve
 * @constant
 * @type {number}
 */
export
const retrieve: PTCListManagementAction = PTCListManagementAction.retrieve; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_delete_
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_delete_: PTCListManagementAction = PTCListManagementAction.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: PTCListManagementAction = PTCListManagementAction.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementAction_notify
 * @constant
 * @type {number}
 */
export
const PTCListManagementAction_notify: PTCListManagementAction = PTCListManagementAction.notify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notify
 * @constant
 * @type {number}
 */
export
const notify: PTCListManagementAction = PTCListManagementAction.notify; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCListManagementAction: $.ASN1Decoder<PTCListManagementAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCListManagementAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCListManagementAction (el: _Element): PTCListManagementAction {
    if (!_cached_decoder_for_PTCListManagementAction) { _cached_decoder_for_PTCListManagementAction = $._decodeEnumerated; }
    return _cached_decoder_for_PTCListManagementAction(el);
}

let _cached_encoder_for_PTCListManagementAction: $.ASN1Encoder<PTCListManagementAction> | null = null;

/**
 * @summary Encodes a(n) PTCListManagementAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCListManagementAction, encoded as an ASN.1 Element.
 */
export
function _encode_PTCListManagementAction (value: PTCListManagementAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCListManagementAction) { _cached_encoder_for_PTCListManagementAction = $._encodeEnumerated; }
    return _cached_encoder_for_PTCListManagementAction(value, elGetter);
}


/* eslint-enable */
