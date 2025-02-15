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



/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item */
/**
 * @summary AvailabilityStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvailabilityStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AvailabilityStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_inTest */
/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_inTest: AvailabilityStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_inTest */

/* START_OF_SYMBOL_DEFINITION inTest */
/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const inTest: AvailabilityStatus_Item = AvailabilityStatus_Item_inTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inTest */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_failed */
/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_failed: AvailabilityStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const failed: AvailabilityStatus_Item = AvailabilityStatus_Item_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_powerOff */
/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_powerOff: AvailabilityStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_powerOff */

/* START_OF_SYMBOL_DEFINITION powerOff */
/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const powerOff: AvailabilityStatus_Item = AvailabilityStatus_Item_powerOff; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION powerOff */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offLine */
/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offLine: AvailabilityStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offLine */

/* START_OF_SYMBOL_DEFINITION offLine */
/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const offLine: AvailabilityStatus_Item = AvailabilityStatus_Item_offLine; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION offLine */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offDuty */
/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offDuty: AvailabilityStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_offDuty */

/* START_OF_SYMBOL_DEFINITION offDuty */
/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const offDuty: AvailabilityStatus_Item = AvailabilityStatus_Item_offDuty; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION offDuty */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_dependency */
/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_dependency: AvailabilityStatus_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_dependency */

/* START_OF_SYMBOL_DEFINITION dependency */
/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const dependency: AvailabilityStatus_Item = AvailabilityStatus_Item_dependency; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dependency */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_degraded */
/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_degraded: AvailabilityStatus_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_degraded */

/* START_OF_SYMBOL_DEFINITION degraded */
/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const degraded: AvailabilityStatus_Item = AvailabilityStatus_Item_degraded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION degraded */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_notInstalled */
/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_notInstalled: AvailabilityStatus_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_notInstalled */

/* START_OF_SYMBOL_DEFINITION notInstalled */
/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const notInstalled: AvailabilityStatus_Item = AvailabilityStatus_Item_notInstalled; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION notInstalled */

/* START_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_logFull */
/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_logFull: AvailabilityStatus_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus_Item_logFull */

/* START_OF_SYMBOL_DEFINITION logFull */
/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const logFull: AvailabilityStatus_Item = AvailabilityStatus_Item_logFull; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION logFull */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus_Item */
let _cached_decoder_for_AvailabilityStatus_Item: $.ASN1Decoder<AvailabilityStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AvailabilityStatus_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailabilityStatus_Item} The decoded data structure.
 */
export
function _decode_AvailabilityStatus_Item (el: _Element) {
    if (!_cached_decoder_for_AvailabilityStatus_Item) { _cached_decoder_for_AvailabilityStatus_Item = $._decodeInteger; }
    return _cached_decoder_for_AvailabilityStatus_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus_Item */
let _cached_encoder_for_AvailabilityStatus_Item: $.ASN1Encoder<AvailabilityStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus_Item */
/**
 * @summary Encodes a(n) AvailabilityStatus_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailabilityStatus_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AvailabilityStatus_Item (value: AvailabilityStatus_Item, elGetter: $.ASN1Encoder<AvailabilityStatus_Item>) {
    if (!_cached_encoder_for_AvailabilityStatus_Item) { _cached_encoder_for_AvailabilityStatus_Item = $._encodeInteger; }
    return _cached_encoder_for_AvailabilityStatus_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus_Item */

/* eslint-enable */
