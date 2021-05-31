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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item */
/**
 * @summary ProceduralStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProceduralStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProceduralStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item */

/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item_initializationRequired */
/**
 * @summary ProceduralStatus_Item_initializationRequired
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializationRequired: ProceduralStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item_initializationRequired */

/* START_OF_SYMBOL_DEFINITION initializationRequired */
/**
 * @summary ProceduralStatus_Item_initializationRequired
 * @constant
 * @type {number}
 */
export
const initializationRequired: ProceduralStatus_Item = ProceduralStatus_Item_initializationRequired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION initializationRequired */

/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item_notInitialized */
/**
 * @summary ProceduralStatus_Item_notInitialized
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_notInitialized: ProceduralStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item_notInitialized */

/* START_OF_SYMBOL_DEFINITION notInitialized */
/**
 * @summary ProceduralStatus_Item_notInitialized
 * @constant
 * @type {number}
 */
export
const notInitialized: ProceduralStatus_Item = ProceduralStatus_Item_notInitialized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION notInitialized */

/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item_initializing */
/**
 * @summary ProceduralStatus_Item_initializing
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializing: ProceduralStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item_initializing */

/* START_OF_SYMBOL_DEFINITION initializing */
/**
 * @summary ProceduralStatus_Item_initializing
 * @constant
 * @type {number}
 */
export
const initializing: ProceduralStatus_Item = ProceduralStatus_Item_initializing; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION initializing */

/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item_reporting */
/**
 * @summary ProceduralStatus_Item_reporting
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_reporting: ProceduralStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item_reporting */

/* START_OF_SYMBOL_DEFINITION reporting */
/**
 * @summary ProceduralStatus_Item_reporting
 * @constant
 * @type {number}
 */
export
const reporting: ProceduralStatus_Item = ProceduralStatus_Item_reporting; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reporting */

/* START_OF_SYMBOL_DEFINITION ProceduralStatus_Item_terminating */
/**
 * @summary ProceduralStatus_Item_terminating
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_terminating: ProceduralStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProceduralStatus_Item_terminating */

/* START_OF_SYMBOL_DEFINITION terminating */
/**
 * @summary ProceduralStatus_Item_terminating
 * @constant
 * @type {number}
 */
export
const terminating: ProceduralStatus_Item = ProceduralStatus_Item_terminating; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION terminating */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatus_Item */
let _cached_decoder_for_ProceduralStatus_Item: $.ASN1Decoder<ProceduralStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ProceduralStatus_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatus_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatus_Item} The decoded data structure.
 */
export
function _decode_ProceduralStatus_Item (el: _Element) {
    if (!_cached_decoder_for_ProceduralStatus_Item) { _cached_decoder_for_ProceduralStatus_Item = $._decodeInteger; }
    return _cached_decoder_for_ProceduralStatus_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProceduralStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatus_Item */
let _cached_encoder_for_ProceduralStatus_Item: $.ASN1Encoder<ProceduralStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ProceduralStatus_Item */
/**
 * @summary Encodes a(n) ProceduralStatus_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatus_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ProceduralStatus_Item (value: ProceduralStatus_Item, elGetter: $.ASN1Encoder<ProceduralStatus_Item>) {
    if (!_cached_encoder_for_ProceduralStatus_Item) { _cached_encoder_for_ProceduralStatus_Item = $._encodeInteger; }
    return _cached_encoder_for_ProceduralStatus_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProceduralStatus_Item */

/* eslint-enable */
