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
 * @summary PotentialUse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PotentialUse  ::=  ENUMERATED{
 *         notApplicable(0),
 *         callForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PotentialUse {
    notApplicable = 0,
    callForwarding = 1,
}

/**
 * @summary PotentialUse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PotentialUse  ::=  ENUMERATED{
 *         notApplicable(0),
 *         callForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type PotentialUse = _enum_for_PotentialUse;

/**
 * @summary PotentialUse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PotentialUse  ::=  ENUMERATED{
 *         notApplicable(0),
 *         callForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const PotentialUse = _enum_for_PotentialUse;

/**
 * @summary PotentialUse_notApplicable
 * @constant
 * @type {number}
 */
export
const PotentialUse_notApplicable: PotentialUse = PotentialUse.notApplicable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export
const notApplicable: PotentialUse = PotentialUse.notApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PotentialUse_callForwarding
 * @constant
 * @type {number}
 */
export
const PotentialUse_callForwarding: PotentialUse = PotentialUse.callForwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwarding
 * @constant
 * @type {number}
 */
export
const callForwarding: PotentialUse = PotentialUse.callForwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PotentialUse: $.ASN1Decoder<PotentialUse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PotentialUse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PotentialUse (el: _Element): PotentialUse {
    if (!_cached_decoder_for_PotentialUse) { _cached_decoder_for_PotentialUse = $._decodeEnumerated; }
    return _cached_decoder_for_PotentialUse(el);
}

let _cached_encoder_for_PotentialUse: $.ASN1Encoder<PotentialUse> | null = null;

/**
 * @summary Encodes a(n) PotentialUse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PotentialUse, encoded as an ASN.1 Element.
 */
export
function _encode_PotentialUse (value: PotentialUse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PotentialUse) { _cached_encoder_for_PotentialUse = $._encodeEnumerated; }
    return _cached_encoder_for_PotentialUse(value, elGetter);
}


/* eslint-enable */
