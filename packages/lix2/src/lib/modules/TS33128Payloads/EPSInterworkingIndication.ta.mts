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
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSInterworkingIndication {
    none = 1,
    withN26 = 2,
    withoutN26 = 3,
    iwkNon3GPP = 4,
}

/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSInterworkingIndication = _enum_for_EPSInterworkingIndication;

/**
 * @summary EPSInterworkingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSInterworkingIndication  ::=  ENUMERATED
 * {
 *     none(1),
 *     withN26(2),
 *     withoutN26(3),
 *     iwkNon3GPP(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSInterworkingIndication = _enum_for_EPSInterworkingIndication;

/**
 * @summary EPSInterworkingIndication_none
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_none: EPSInterworkingIndication = EPSInterworkingIndication.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: EPSInterworkingIndication = EPSInterworkingIndication.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withN26: EPSInterworkingIndication = EPSInterworkingIndication.withN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withN26
 * @constant
 * @type {number}
 */
export
const withN26: EPSInterworkingIndication = EPSInterworkingIndication.withN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_withoutN26
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_withoutN26: EPSInterworkingIndication = EPSInterworkingIndication.withoutN26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary withoutN26
 * @constant
 * @type {number}
 */
export
const withoutN26: EPSInterworkingIndication = EPSInterworkingIndication.withoutN26; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSInterworkingIndication_iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const EPSInterworkingIndication_iwkNon3GPP: EPSInterworkingIndication = EPSInterworkingIndication.iwkNon3GPP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iwkNon3GPP
 * @constant
 * @type {number}
 */
export
const iwkNon3GPP: EPSInterworkingIndication = EPSInterworkingIndication.iwkNon3GPP; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSInterworkingIndication: $.ASN1Decoder<EPSInterworkingIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSInterworkingIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSInterworkingIndication (el: _Element): EPSInterworkingIndication {
    if (!_cached_decoder_for_EPSInterworkingIndication) { _cached_decoder_for_EPSInterworkingIndication = $._decodeEnumerated; }
    return _cached_decoder_for_EPSInterworkingIndication(el);
}

let _cached_encoder_for_EPSInterworkingIndication: $.ASN1Encoder<EPSInterworkingIndication> | null = null;

/**
 * @summary Encodes a(n) EPSInterworkingIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSInterworkingIndication, encoded as an ASN.1 Element.
 */
export
function _encode_EPSInterworkingIndication (value: EPSInterworkingIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSInterworkingIndication) { _cached_encoder_for_EPSInterworkingIndication = $._encodeEnumerated; }
    return _cached_encoder_for_EPSInterworkingIndication(value, elGetter);
}


/* eslint-enable */
