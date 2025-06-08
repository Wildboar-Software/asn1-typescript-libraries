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



/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority */
/**
 * @summary PrioritisedObject_Item_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrioritisedObject-Item-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PrioritisedObject_Item_priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_highest */
/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_highest: PrioritisedObject_Item_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_highest */

/* START_OF_SYMBOL_DEFINITION highest */
/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const highest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_highest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION highest */

/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_lowest */
/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_lowest: PrioritisedObject_Item_priority = 127; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item_priority_lowest */

/* START_OF_SYMBOL_DEFINITION lowest */
/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const lowest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_lowest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION lowest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item_priority */
let _cached_decoder_for_PrioritisedObject_Item_priority: $.ASN1Decoder<PrioritisedObject_Item_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item_priority */
/**
 * @summary Decodes an ASN.1 element into a(n) PrioritisedObject_Item_priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrioritisedObject_Item_priority} The decoded data structure.
 */
export
function _decode_PrioritisedObject_Item_priority (el: _Element) {
    if (!_cached_decoder_for_PrioritisedObject_Item_priority) { _cached_decoder_for_PrioritisedObject_Item_priority = $._decodeInteger; }
    return _cached_decoder_for_PrioritisedObject_Item_priority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item_priority */
let _cached_encoder_for_PrioritisedObject_Item_priority: $.ASN1Encoder<PrioritisedObject_Item_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item_priority */

/* START_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item_priority */
/**
 * @summary Encodes a(n) PrioritisedObject_Item_priority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrioritisedObject_Item_priority, encoded as an ASN.1 Element.
 */
export
function _encode_PrioritisedObject_Item_priority (value: PrioritisedObject_Item_priority, elGetter: $.ASN1Encoder<PrioritisedObject_Item_priority>) {
    if (!_cached_encoder_for_PrioritisedObject_Item_priority) { _cached_encoder_for_PrioritisedObject_Item_priority = $._encodeInteger; }
    return _cached_encoder_for_PrioritisedObject_Item_priority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item_priority */

/* eslint-enable */
