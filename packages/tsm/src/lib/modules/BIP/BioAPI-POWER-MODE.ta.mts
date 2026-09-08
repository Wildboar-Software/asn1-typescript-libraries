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



export
enum _enum_for_BioAPI_POWER_MODE {
    normal = 0,
    detect = 1,
    sleep = 2,
}

/**
 * @summary BioAPI_POWER_MODE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioAPI-POWER-MODE  ::=  ENUMERATED {normal, detect, sleep, ...
 *                                   }
 * ```
 * 
 * @enum {number}
 */
export
type BioAPI_POWER_MODE = _enum_for_BioAPI_POWER_MODE | ENUMERATED;

/**
 * @summary BioAPI_POWER_MODE_normal
 * @constant
 * @type {number}
 */
export
const BioAPI_POWER_MODE_normal: BioAPI_POWER_MODE = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: BioAPI_POWER_MODE = BioAPI_POWER_MODE_normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_POWER_MODE_detect
 * @constant
 * @type {number}
 */
export
const BioAPI_POWER_MODE_detect: BioAPI_POWER_MODE = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary detect
 * @constant
 * @type {number}
 */
export
const detect: BioAPI_POWER_MODE = BioAPI_POWER_MODE_detect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BioAPI_POWER_MODE_sleep
 * @constant
 * @type {number}
 */
export
const BioAPI_POWER_MODE_sleep: BioAPI_POWER_MODE = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sleep
 * @constant
 * @type {number}
 */
export
const sleep: BioAPI_POWER_MODE = BioAPI_POWER_MODE_sleep; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BioAPI_POWER_MODE: $.ASN1Decoder<BioAPI_POWER_MODE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_POWER_MODE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_POWER_MODE (el: _Element): BioAPI_POWER_MODE {
    if (!_cached_decoder_for_BioAPI_POWER_MODE) { _cached_decoder_for_BioAPI_POWER_MODE = $._decodeEnumerated; }
    return _cached_decoder_for_BioAPI_POWER_MODE(el);
}

let _cached_encoder_for_BioAPI_POWER_MODE: $.ASN1Encoder<BioAPI_POWER_MODE> | null = null;

/**
 * @summary Encodes a(n) BioAPI_POWER_MODE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_POWER_MODE, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_POWER_MODE (value: BioAPI_POWER_MODE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_POWER_MODE) { _cached_encoder_for_BioAPI_POWER_MODE = $._encodeEnumerated; }
    return _cached_encoder_for_BioAPI_POWER_MODE(value, elGetter);
}


/* eslint-enable */
