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
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13PSKKeyExchangeMode {
    pSKKE = 1,
    pSKDHEKE = 2,
}

/**
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13PSKKeyExchangeMode = _enum_for_TLS13PSKKeyExchangeMode;

/**
 * @summary TLS13PSKKeyExchangeMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKKeyExchangeMode  ::=  ENUMERATED
 * {
 *     pSKKE(1),
 *     pSKDHEKE(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13PSKKeyExchangeMode = _enum_for_TLS13PSKKeyExchangeMode;

/**
 * @summary TLS13PSKKeyExchangeMode_pSKKE
 * @constant
 * @type {number}
 */
export
const TLS13PSKKeyExchangeMode_pSKKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKKE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKKE
 * @constant
 * @type {number}
 */
export
const pSKKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKKE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKKeyExchangeMode_pSKDHEKE
 * @constant
 * @type {number}
 */
export
const TLS13PSKKeyExchangeMode_pSKDHEKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKDHEKE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pSKDHEKE
 * @constant
 * @type {number}
 */
export
const pSKDHEKE: TLS13PSKKeyExchangeMode = TLS13PSKKeyExchangeMode.pSKDHEKE; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLS13PSKKeyExchangeMode: $.ASN1Decoder<TLS13PSKKeyExchangeMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKKeyExchangeMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13PSKKeyExchangeMode (el: _Element): TLS13PSKKeyExchangeMode {
    if (!_cached_decoder_for_TLS13PSKKeyExchangeMode) { _cached_decoder_for_TLS13PSKKeyExchangeMode = $._decodeEnumerated; }
    return _cached_decoder_for_TLS13PSKKeyExchangeMode(el);
}

let _cached_encoder_for_TLS13PSKKeyExchangeMode: $.ASN1Encoder<TLS13PSKKeyExchangeMode> | null = null;

/**
 * @summary Encodes a(n) TLS13PSKKeyExchangeMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKKeyExchangeMode, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13PSKKeyExchangeMode (value: TLS13PSKKeyExchangeMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13PSKKeyExchangeMode) { _cached_encoder_for_TLS13PSKKeyExchangeMode = $._encodeEnumerated; }
    return _cached_encoder_for_TLS13PSKKeyExchangeMode(value, elGetter);
}


/* eslint-enable */
