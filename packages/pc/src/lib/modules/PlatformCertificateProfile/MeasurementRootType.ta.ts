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



/* START_OF_SYMBOL_DEFINITION _enum_for_MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
enum _enum_for_MeasurementRootType {
    static_ = 0,
    dynamic = 1,
    nonHost = 2,
    hybrid = 3,
    physical = 4,
    virtual = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
type MeasurementRootType = _enum_for_MeasurementRootType;
/* END_OF_SYMBOL_DEFINITION MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
const MeasurementRootType = _enum_for_MeasurementRootType;
/* END_OF_SYMBOL_DEFINITION MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_static_ */
/**
 * @summary MeasurementRootType_static_
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_static_: MeasurementRootType = MeasurementRootType.static_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_static_ */

/* START_OF_SYMBOL_DEFINITION static_ */
/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: MeasurementRootType = MeasurementRootType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION static_ */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_dynamic */
/**
 * @summary MeasurementRootType_dynamic
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_dynamic */

/* START_OF_SYMBOL_DEFINITION dynamic */
/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dynamic */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_nonHost */
/**
 * @summary MeasurementRootType_nonHost
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_nonHost */

/* START_OF_SYMBOL_DEFINITION nonHost */
/**
 * @summary nonHost
 * @constant
 * @type {number}
 */
export
const nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonHost */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_hybrid */
/**
 * @summary MeasurementRootType_hybrid
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_hybrid */

/* START_OF_SYMBOL_DEFINITION hybrid */
/**
 * @summary hybrid
 * @constant
 * @type {number}
 */
export
const hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hybrid */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_physical */
/**
 * @summary MeasurementRootType_physical
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_physical: MeasurementRootType = MeasurementRootType.physical; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_physical */

/* START_OF_SYMBOL_DEFINITION physical */
/**
 * @summary physical
 * @constant
 * @type {number}
 */
export
const physical: MeasurementRootType = MeasurementRootType.physical; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_virtual */
/**
 * @summary MeasurementRootType_virtual
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_virtual: MeasurementRootType = MeasurementRootType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_virtual */

/* START_OF_SYMBOL_DEFINITION virtual */
/**
 * @summary virtual
 * @constant
 * @type {number}
 */
export
const virtual: MeasurementRootType = MeasurementRootType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION virtual */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MeasurementRootType */
let _cached_decoder_for_MeasurementRootType: $.ASN1Decoder<MeasurementRootType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _decode_MeasurementRootType */
/**
 * @summary Decodes an ASN.1 element into a(n) MeasurementRootType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MeasurementRootType} The decoded data structure.
 */
export
function _decode_MeasurementRootType (el: _Element) {
    if (!_cached_decoder_for_MeasurementRootType) { _cached_decoder_for_MeasurementRootType = $._decodeEnumerated; }
    return _cached_decoder_for_MeasurementRootType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MeasurementRootType */
let _cached_encoder_for_MeasurementRootType: $.ASN1Encoder<MeasurementRootType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _encode_MeasurementRootType */
/**
 * @summary Encodes a(n) MeasurementRootType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MeasurementRootType, encoded as an ASN.1 Element.
 */
export
function _encode_MeasurementRootType (value: MeasurementRootType, elGetter: $.ASN1Encoder<MeasurementRootType>) {
    if (!_cached_encoder_for_MeasurementRootType) { _cached_encoder_for_MeasurementRootType = $._encodeEnumerated; }
    return _cached_encoder_for_MeasurementRootType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MeasurementRootType */

/* eslint-enable */
