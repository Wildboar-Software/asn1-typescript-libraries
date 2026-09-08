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
 * @summary V34HdxDiag_Item_cCrate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V34HdxDiag_Item_cCrate {
    t12R12 = 0,
    t24R24 = 1,
    t12R24 = 2,
    t24R12 = 3,
}

/**
 * @summary V34HdxDiag_Item_cCrate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type V34HdxDiag_Item_cCrate = _enum_for_V34HdxDiag_Item_cCrate;

/**
 * @summary V34HdxDiag_Item_cCrate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag-Item-cCrate ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const V34HdxDiag_Item_cCrate = _enum_for_V34HdxDiag_Item_cCrate;

/**
 * @summary V34HdxDiag_Item_cCrate_t12R12
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t12R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t12R12
 * @constant
 * @type {number}
 */
export
const t12R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R12; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t24R24
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t24R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t24R24
 * @constant
 * @type {number}
 */
export
const t24R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t12R24
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t12R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t12R24
 * @constant
 * @type {number}
 */
export
const t12R24: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t12R24; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V34HdxDiag_Item_cCrate_t24R12
 * @constant
 * @type {number}
 */
export
const V34HdxDiag_Item_cCrate_t24R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary t24R12
 * @constant
 * @type {number}
 */
export
const t24R12: V34HdxDiag_Item_cCrate = V34HdxDiag_Item_cCrate.t24R12; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_V34HdxDiag_Item_cCrate: $.ASN1Decoder<V34HdxDiag_Item_cCrate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V34HdxDiag_Item_cCrate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V34HdxDiag_Item_cCrate (el: _Element): V34HdxDiag_Item_cCrate {
    if (!_cached_decoder_for_V34HdxDiag_Item_cCrate) { _cached_decoder_for_V34HdxDiag_Item_cCrate = $._decodeEnumerated; }
    return _cached_decoder_for_V34HdxDiag_Item_cCrate(el);
}

let _cached_encoder_for_V34HdxDiag_Item_cCrate: $.ASN1Encoder<V34HdxDiag_Item_cCrate> | null = null;

/**
 * @summary Encodes a(n) V34HdxDiag_Item_cCrate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V34HdxDiag_Item_cCrate, encoded as an ASN.1 Element.
 */
export
function _encode_V34HdxDiag_Item_cCrate (value: V34HdxDiag_Item_cCrate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V34HdxDiag_Item_cCrate) { _cached_encoder_for_V34HdxDiag_Item_cCrate = $._encodeEnumerated; }
    return _cached_encoder_for_V34HdxDiag_Item_cCrate(value, elGetter);
}


/* eslint-enable */
