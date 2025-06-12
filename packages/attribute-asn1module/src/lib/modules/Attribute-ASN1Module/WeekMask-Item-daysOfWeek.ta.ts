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



/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek */
/**
 * @summary WeekMask_Item_daysOfWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WeekMask-Item-daysOfWeek ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type WeekMask_Item_daysOfWeek = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_sunday */
/**
 * @summary WeekMask_Item_daysOfWeek_sunday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_sunday: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_sunday */

/* START_OF_SYMBOL_DEFINITION sunday */
/**
 * @summary sunday
 * @constant
 */
export
const sunday: number = WeekMask_Item_daysOfWeek_sunday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sunday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_monday */
/**
 * @summary WeekMask_Item_daysOfWeek_monday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_monday: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_monday */

/* START_OF_SYMBOL_DEFINITION monday */
/**
 * @summary monday
 * @constant
 */
export
const monday: number = WeekMask_Item_daysOfWeek_monday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION monday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_tuesday */
/**
 * @summary WeekMask_Item_daysOfWeek_tuesday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_tuesday: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_tuesday */

/* START_OF_SYMBOL_DEFINITION tuesday */
/**
 * @summary tuesday
 * @constant
 */
export
const tuesday: number = WeekMask_Item_daysOfWeek_tuesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION tuesday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_wednesday */
/**
 * @summary WeekMask_Item_daysOfWeek_wednesday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_wednesday: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_wednesday */

/* START_OF_SYMBOL_DEFINITION wednesday */
/**
 * @summary wednesday
 * @constant
 */
export
const wednesday: number = WeekMask_Item_daysOfWeek_wednesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wednesday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_thursday */
/**
 * @summary WeekMask_Item_daysOfWeek_thursday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_thursday: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_thursday */

/* START_OF_SYMBOL_DEFINITION thursday */
/**
 * @summary thursday
 * @constant
 */
export
const thursday: number = WeekMask_Item_daysOfWeek_thursday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION thursday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_friday */
/**
 * @summary WeekMask_Item_daysOfWeek_friday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_friday: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_friday */

/* START_OF_SYMBOL_DEFINITION friday */
/**
 * @summary friday
 * @constant
 */
export
const friday: number = WeekMask_Item_daysOfWeek_friday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION friday */

/* START_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_saturday */
/**
 * @summary WeekMask_Item_daysOfWeek_saturday
 * @constant
 */
export
const WeekMask_Item_daysOfWeek_saturday: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WeekMask_Item_daysOfWeek_saturday */

/* START_OF_SYMBOL_DEFINITION saturday */
/**
 * @summary saturday
 * @constant
 */
export
const saturday: number = WeekMask_Item_daysOfWeek_saturday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION saturday */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_Item_daysOfWeek */
let _cached_decoder_for_WeekMask_Item_daysOfWeek: $.ASN1Decoder<WeekMask_Item_daysOfWeek> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_Item_daysOfWeek */

/* START_OF_SYMBOL_DEFINITION _decode_WeekMask_Item_daysOfWeek */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask_Item_daysOfWeek
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask_Item_daysOfWeek} The decoded data structure.
 */
export
function _decode_WeekMask_Item_daysOfWeek (el: _Element) {
    if (!_cached_decoder_for_WeekMask_Item_daysOfWeek) { _cached_decoder_for_WeekMask_Item_daysOfWeek = $._decodeBitString; }
    return _cached_decoder_for_WeekMask_Item_daysOfWeek(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekMask_Item_daysOfWeek */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_Item_daysOfWeek */
let _cached_encoder_for_WeekMask_Item_daysOfWeek: $.ASN1Encoder<WeekMask_Item_daysOfWeek> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_Item_daysOfWeek */

/* START_OF_SYMBOL_DEFINITION _encode_WeekMask_Item_daysOfWeek */
/**
 * @summary Encodes a(n) WeekMask_Item_daysOfWeek into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask_Item_daysOfWeek, encoded as an ASN.1 Element.
 */
export
function _encode_WeekMask_Item_daysOfWeek (value: WeekMask_Item_daysOfWeek, elGetter: $.ASN1Encoder<WeekMask_Item_daysOfWeek>) {
    if (!_cached_encoder_for_WeekMask_Item_daysOfWeek) { _cached_encoder_for_WeekMask_Item_daysOfWeek = $._encodeBitString; }
    return _cached_encoder_for_WeekMask_Item_daysOfWeek(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekMask_Item_daysOfWeek */

/* eslint-enable */
