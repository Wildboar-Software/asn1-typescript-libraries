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
 * @summary NIDD_Mechanism
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDD-Mechanism  ::=  ENUMERATED {
 *     sGi-based-data-delivery    (0),
 *     sCEF-based-data-delivery    (1)
 *     -- The default value, when this information element is not present, is
 *     -- sGi-based-data-delivery (0)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NIDD_Mechanism {
    sGi_based_data_delivery = 0,
    sCEF_based_data_delivery = 1,
}

/**
 * @summary NIDD_Mechanism
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDD-Mechanism  ::=  ENUMERATED {
 *     sGi-based-data-delivery    (0),
 *     sCEF-based-data-delivery    (1)
 *     -- The default value, when this information element is not present, is
 *     -- sGi-based-data-delivery (0)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
type NIDD_Mechanism = _enum_for_NIDD_Mechanism;

/**
 * @summary NIDD_Mechanism
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDD-Mechanism  ::=  ENUMERATED {
 *     sGi-based-data-delivery    (0),
 *     sCEF-based-data-delivery    (1)
 *     -- The default value, when this information element is not present, is
 *     -- sGi-based-data-delivery (0)
 *  }
 * ```
 * 
 * @enum {number}
 */
export
const NIDD_Mechanism = _enum_for_NIDD_Mechanism;

/**
 * @summary NIDD_Mechanism_sGi_based_data_delivery
 * @constant
 * @type {number}
 */
export
const NIDD_Mechanism_sGi_based_data_delivery: NIDD_Mechanism = NIDD_Mechanism.sGi_based_data_delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGi_based_data_delivery
 * @constant
 * @type {number}
 */
export
const sGi_based_data_delivery: NIDD_Mechanism = NIDD_Mechanism.sGi_based_data_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NIDD_Mechanism_sCEF_based_data_delivery
 * @constant
 * @type {number}
 */
export
const NIDD_Mechanism_sCEF_based_data_delivery: NIDD_Mechanism = NIDD_Mechanism.sCEF_based_data_delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCEF_based_data_delivery
 * @constant
 * @type {number}
 */
export
const sCEF_based_data_delivery: NIDD_Mechanism = NIDD_Mechanism.sCEF_based_data_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NIDD_Mechanism: $.ASN1Decoder<NIDD_Mechanism> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NIDD_Mechanism
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NIDD_Mechanism (el: _Element): NIDD_Mechanism {
    if (!_cached_decoder_for_NIDD_Mechanism) { _cached_decoder_for_NIDD_Mechanism = $._decodeEnumerated; }
    return _cached_decoder_for_NIDD_Mechanism(el);
}

let _cached_encoder_for_NIDD_Mechanism: $.ASN1Encoder<NIDD_Mechanism> | null = null;

/**
 * @summary Encodes a(n) NIDD_Mechanism into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NIDD_Mechanism, encoded as an ASN.1 Element.
 */
export
function _encode_NIDD_Mechanism (value: NIDD_Mechanism, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NIDD_Mechanism) { _cached_encoder_for_NIDD_Mechanism = $._encodeEnumerated; }
    return _cached_encoder_for_NIDD_Mechanism(value, elGetter);
}


/* eslint-enable */
