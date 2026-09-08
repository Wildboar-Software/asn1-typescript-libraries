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



/**
 * @summary V18Diag_Item_v18used
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V18Diag_Item_v18used {
    none = 0,
    v18_V21Hi = 1,
    v18_V21Lo = 2,
    v18_V61C = 3,
    v18_V61A = 4,
    v21Hi = 5,
    v21Lo = 6,
    dTMF = 7,
    eDT = 8,
    baudot45 = 9,
    baudot47 = 10,
    baudot50 = 11,
    v23Hi = 12,
    v23Lo = 13,
    bellHi = 14,
    bellLo = 15,
}

/**
 * @summary V18Diag_Item_v18used
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type V18Diag_Item_v18used = _enum_for_V18Diag_Item_v18used;

/**
 * @summary V18Diag_Item_v18used
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag-Item-v18used ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const V18Diag_Item_v18used = _enum_for_V18Diag_Item_v18used;

/**
 * @summary V18Diag_Item_v18used_none
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_none: V18Diag_Item_v18used = V18Diag_Item_v18used.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: V18Diag_Item_v18used = V18Diag_Item_v18used.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V21Hi
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V21Hi
 * @constant
 * @type {number}
 */
export
const v18_V21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V21Lo
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V21Lo
 * @constant
 * @type {number}
 */
export
const v18_V21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V21Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V61C
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V61C: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61C; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V61C
 * @constant
 * @type {number}
 */
export
const v18_V61C: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61C; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v18_V61A
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v18_V61A: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61A; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18_V61A
 * @constant
 * @type {number}
 */
export
const v18_V61A: V18Diag_Item_v18used = V18Diag_Item_v18used.v18_V61A; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v21Hi
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v21Hi
 * @constant
 * @type {number}
 */
export
const v21Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v21Lo
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v21Lo
 * @constant
 * @type {number}
 */
export
const v21Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v21Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_dTMF
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_dTMF: V18Diag_Item_v18used = V18Diag_Item_v18used.dTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMF
 * @constant
 * @type {number}
 */
export
const dTMF: V18Diag_Item_v18used = V18Diag_Item_v18used.dTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_eDT
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_eDT: V18Diag_Item_v18used = V18Diag_Item_v18used.eDT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eDT
 * @constant
 * @type {number}
 */
export
const eDT: V18Diag_Item_v18used = V18Diag_Item_v18used.eDT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot45
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot45: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot45; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot45
 * @constant
 * @type {number}
 */
export
const baudot45: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot45; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot47
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot47: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot47; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot47
 * @constant
 * @type {number}
 */
export
const baudot47: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot47; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_baudot50
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_baudot50: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baudot50
 * @constant
 * @type {number}
 */
export
const baudot50: V18Diag_Item_v18used = V18Diag_Item_v18used.baudot50; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v23Hi
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v23Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Hi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v23Hi
 * @constant
 * @type {number}
 */
export
const v23Hi: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Hi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_v23Lo
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_v23Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Lo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v23Lo
 * @constant
 * @type {number}
 */
export
const v23Lo: V18Diag_Item_v18used = V18Diag_Item_v18used.v23Lo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_bellHi
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_bellHi: V18Diag_Item_v18used = V18Diag_Item_v18used.bellHi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bellHi
 * @constant
 * @type {number}
 */
export
const bellHi: V18Diag_Item_v18used = V18Diag_Item_v18used.bellHi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V18Diag_Item_v18used_bellLo
 * @constant
 * @type {number}
 */
export
const V18Diag_Item_v18used_bellLo: V18Diag_Item_v18used = V18Diag_Item_v18used.bellLo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bellLo
 * @constant
 * @type {number}
 */
export
const bellLo: V18Diag_Item_v18used = V18Diag_Item_v18used.bellLo; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_V18Diag_Item_v18used: $.ASN1Decoder<V18Diag_Item_v18used> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V18Diag_Item_v18used
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V18Diag_Item_v18used (el: _Element): V18Diag_Item_v18used {
    if (!_cached_decoder_for_V18Diag_Item_v18used) { _cached_decoder_for_V18Diag_Item_v18used = $._decodeEnumerated; }
    return _cached_decoder_for_V18Diag_Item_v18used(el);
}

let _cached_encoder_for_V18Diag_Item_v18used: $.ASN1Encoder<V18Diag_Item_v18used> | null = null;

/**
 * @summary Encodes a(n) V18Diag_Item_v18used into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V18Diag_Item_v18used, encoded as an ASN.1 Element.
 */
export
function _encode_V18Diag_Item_v18used (value: V18Diag_Item_v18used, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V18Diag_Item_v18used) { _cached_encoder_for_V18Diag_Item_v18used = $._encodeEnumerated; }
    return _cached_encoder_for_V18Diag_Item_v18used(value, elGetter);
}


/* eslint-enable */
