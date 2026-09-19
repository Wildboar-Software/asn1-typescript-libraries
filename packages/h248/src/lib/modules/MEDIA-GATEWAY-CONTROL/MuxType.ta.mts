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



export
enum _enum_for_MuxType {
    h221 = 0,
    h223 = 1,
    h226 = 2,
    v76 = 3,
    nx64k = 4,
}

/**
 * @summary MuxType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxType  ::=  ENUMERATED
 *     {
 *         h221(0),
 *         h223(1),
 *         h226(2),
 *         v76(3),
 *         ...,
 *         nx64k(4)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type MuxType = _enum_for_MuxType | ENUMERATED;

/**
 * @summary MuxType_h221
 * @constant
 * @type {number}
 */
export
const MuxType_h221: MuxType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h221
 * @constant
 * @type {number}
 */
export
const h221: MuxType = MuxType_h221; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h223
 * @constant
 * @type {number}
 */
export
const MuxType_h223: MuxType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h223
 * @constant
 * @type {number}
 */
export
const h223: MuxType = MuxType_h223; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_h226
 * @constant
 * @type {number}
 */
export
const MuxType_h226: MuxType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary h226
 * @constant
 * @type {number}
 */
export
const h226: MuxType = MuxType_h226; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_v76
 * @constant
 * @type {number}
 */
export
const MuxType_v76: MuxType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v76
 * @constant
 * @type {number}
 */
export
const v76: MuxType = MuxType_v76; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MuxType_nx64k
 * @constant
 * @type {number}
 */
export
const MuxType_nx64k: MuxType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nx64k
 * @constant
 * @type {number}
 */
export
const nx64k: MuxType = MuxType_nx64k; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MuxType: $.ASN1Decoder<MuxType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MuxType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MuxType (el: _Element): MuxType {
    if (!_cached_decoder_for_MuxType) { _cached_decoder_for_MuxType = $._decodeEnumerated; }
    return _cached_decoder_for_MuxType(el);
}

let _cached_encoder_for_MuxType: $.ASN1Encoder<MuxType> | null = null;

/**
 * @summary Encodes a(n) MuxType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MuxType, encoded as an ASN.1 Element.
 */
export
function _encode_MuxType (value: MuxType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MuxType) { _cached_encoder_for_MuxType = $._encodeEnumerated; }
    return _cached_encoder_for_MuxType(value, elGetter);
}


/* eslint-enable */
