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
 * @summary ParamValueList_deliveryControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamValueList-deliveryControl ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParamValueList_deliveryControl = INTEGER;

/**
 * @summary ParamValueList_deliveryControl_none
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_none: ParamValueList_deliveryControl = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_none
 * @constant
 * @type {number}
 */
export
const none: ParamValueList_deliveryControl = ParamValueList_deliveryControl_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_simple
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_simple: ParamValueList_deliveryControl = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_simple
 * @constant
 * @type {number}
 */
export
const simple: ParamValueList_deliveryControl = ParamValueList_deliveryControl_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_quarantine
 * @constant
 * @type {number}
 */
export
const ParamValueList_deliveryControl_quarantine: ParamValueList_deliveryControl = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParamValueList_deliveryControl_quarantine
 * @constant
 * @type {number}
 */
export
const quarantine: ParamValueList_deliveryControl = ParamValueList_deliveryControl_quarantine; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ParamValueList_deliveryControl: $.ASN1Decoder<ParamValueList_deliveryControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParamValueList_deliveryControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParamValueList_deliveryControl (el: _Element): ParamValueList_deliveryControl {
    if (!_cached_decoder_for_ParamValueList_deliveryControl) { _cached_decoder_for_ParamValueList_deliveryControl = $._decodeInteger; }
    return _cached_decoder_for_ParamValueList_deliveryControl(el);
}

let _cached_encoder_for_ParamValueList_deliveryControl: $.ASN1Encoder<ParamValueList_deliveryControl> | null = null;

/**
 * @summary Encodes a(n) ParamValueList_deliveryControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamValueList_deliveryControl, encoded as an ASN.1 Element.
 */
export
function _encode_ParamValueList_deliveryControl (value: ParamValueList_deliveryControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParamValueList_deliveryControl) { _cached_encoder_for_ParamValueList_deliveryControl = $._encodeInteger; }
    return _cached_encoder_for_ParamValueList_deliveryControl(value, elGetter);
}


/* eslint-enable */
