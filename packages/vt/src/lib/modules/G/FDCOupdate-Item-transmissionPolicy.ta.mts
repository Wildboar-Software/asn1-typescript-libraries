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
 * @summary FDCOupdate_Item_transmissionPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item-transmissionPolicy ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FDCOupdate_Item_transmissionPolicy = INTEGER;

/**
 * @summary FDCOupdate_Item_transmissionPolicy_all
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_all: FDCOupdate_Item_transmissionPolicy = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_all
 * @constant
 * @type {number}
 */
export
const all: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_all; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedAllContent: FDCOupdate_Item_transmissionPolicy = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedAllContent
 * @constant
 * @type {number}
 */
export
const modifiedAllContent: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_modifiedAllContent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_modifiedPart: FDCOupdate_Item_transmissionPolicy = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_modifiedPart
 * @constant
 * @type {number}
 */
export
const modifiedPart: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_modifiedPart; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_none: FDCOupdate_Item_transmissionPolicy = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_none
 * @constant
 * @type {number}
 */
export
const none: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @constant
 * @type {number}
 */
export
const FDCOupdate_Item_transmissionPolicy_refTPCO: FDCOupdate_Item_transmissionPolicy = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FDCOupdate_Item_transmissionPolicy_refTPCO
 * @constant
 * @type {number}
 */
export
const refTPCO: FDCOupdate_Item_transmissionPolicy = FDCOupdate_Item_transmissionPolicy_refTPCO; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FDCOupdate_Item_transmissionPolicy: $.ASN1Decoder<FDCOupdate_Item_transmissionPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate_Item_transmissionPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate_Item_transmissionPolicy (el: _Element): FDCOupdate_Item_transmissionPolicy {
    if (!_cached_decoder_for_FDCOupdate_Item_transmissionPolicy) { _cached_decoder_for_FDCOupdate_Item_transmissionPolicy = $._decodeInteger; }
    return _cached_decoder_for_FDCOupdate_Item_transmissionPolicy(el);
}

let _cached_encoder_for_FDCOupdate_Item_transmissionPolicy: $.ASN1Encoder<FDCOupdate_Item_transmissionPolicy> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate_Item_transmissionPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate_Item_transmissionPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate_Item_transmissionPolicy (value: FDCOupdate_Item_transmissionPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate_Item_transmissionPolicy) { _cached_encoder_for_FDCOupdate_Item_transmissionPolicy = $._encodeInteger; }
    return _cached_encoder_for_FDCOupdate_Item_transmissionPolicy(value, elGetter);
}


/* eslint-enable */
