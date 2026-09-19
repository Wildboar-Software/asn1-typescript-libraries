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
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
    roamingN9HR = 3,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingN9HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingN9HR
 * @constant
 * @type {number}
 */
export
const roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VoIPRoamingIndication: $.ASN1Decoder<VoIPRoamingIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoIPRoamingIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoIPRoamingIndication (el: _Element): VoIPRoamingIndication {
    if (!_cached_decoder_for_VoIPRoamingIndication) { _cached_decoder_for_VoIPRoamingIndication = $._decodeEnumerated; }
    return _cached_decoder_for_VoIPRoamingIndication(el);
}

let _cached_encoder_for_VoIPRoamingIndication: $.ASN1Encoder<VoIPRoamingIndication> | null = null;

/**
 * @summary Encodes a(n) VoIPRoamingIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoIPRoamingIndication, encoded as an ASN.1 Element.
 */
export
function _encode_VoIPRoamingIndication (value: VoIPRoamingIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoIPRoamingIndication) { _cached_encoder_for_VoIPRoamingIndication = $._encodeEnumerated; }
    return _cached_encoder_for_VoIPRoamingIndication(value, elGetter);
}


/* eslint-enable */
