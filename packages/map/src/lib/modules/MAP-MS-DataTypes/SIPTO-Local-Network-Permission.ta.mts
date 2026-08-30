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
 * @summary SIPTO_Local_Network_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Local-Network-Permission  ::=  ENUMERATED {
 *     siptoAtLocalNetworkAllowed  (0),
 *     siptoAtLocalNetworkNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SIPTO_Local_Network_Permission {
    siptoAtLocalNetworkAllowed = 0,
    siptoAtLocalNetworkNotAllowed = 1,
}

/**
 * @summary SIPTO_Local_Network_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Local-Network-Permission  ::=  ENUMERATED {
 *     siptoAtLocalNetworkAllowed  (0),
 *     siptoAtLocalNetworkNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SIPTO_Local_Network_Permission = _enum_for_SIPTO_Local_Network_Permission;

/**
 * @summary SIPTO_Local_Network_Permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPTO-Local-Network-Permission  ::=  ENUMERATED {
 *     siptoAtLocalNetworkAllowed  (0),
 *     siptoAtLocalNetworkNotAllowed  (1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const SIPTO_Local_Network_Permission = _enum_for_SIPTO_Local_Network_Permission;

/**
 * @summary SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed
 * @constant
 * @type {number}
 */
export
const SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed: SIPTO_Local_Network_Permission = SIPTO_Local_Network_Permission.siptoAtLocalNetworkAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary siptoAtLocalNetworkAllowed
 * @constant
 * @type {number}
 */
export
const siptoAtLocalNetworkAllowed: SIPTO_Local_Network_Permission = SIPTO_Local_Network_Permission.siptoAtLocalNetworkAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed
 * @constant
 * @type {number}
 */
export
const SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed: SIPTO_Local_Network_Permission = SIPTO_Local_Network_Permission.siptoAtLocalNetworkNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary siptoAtLocalNetworkNotAllowed
 * @constant
 * @type {number}
 */
export
const siptoAtLocalNetworkNotAllowed: SIPTO_Local_Network_Permission = SIPTO_Local_Network_Permission.siptoAtLocalNetworkNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SIPTO_Local_Network_Permission: $.ASN1Decoder<SIPTO_Local_Network_Permission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPTO_Local_Network_Permission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPTO_Local_Network_Permission (el: _Element): SIPTO_Local_Network_Permission {
    if (!_cached_decoder_for_SIPTO_Local_Network_Permission) { _cached_decoder_for_SIPTO_Local_Network_Permission = $._decodeEnumerated; }
    return _cached_decoder_for_SIPTO_Local_Network_Permission(el);
}

let _cached_encoder_for_SIPTO_Local_Network_Permission: $.ASN1Encoder<SIPTO_Local_Network_Permission> | null = null;

/**
 * @summary Encodes a(n) SIPTO_Local_Network_Permission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPTO_Local_Network_Permission, encoded as an ASN.1 Element.
 */
export
function _encode_SIPTO_Local_Network_Permission (value: SIPTO_Local_Network_Permission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPTO_Local_Network_Permission) { _cached_encoder_for_SIPTO_Local_Network_Permission = $._encodeEnumerated; }
    return _cached_encoder_for_SIPTO_Local_Network_Permission(value, elGetter);
}


/* eslint-enable */
