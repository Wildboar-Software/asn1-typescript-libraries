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
 * @summary NetworkProtocolProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkProtocolProfile  ::=  [18] IMPLICIT INTEGER {acse(19), dse(32)}(0..254)
 * ```
 */
export
type NetworkProtocolProfile = INTEGER;

/**
 * @summary NetworkProtocolProfile_acse
 * @constant
 * @type {number}
 */
export
const NetworkProtocolProfile_acse: NetworkProtocolProfile = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_acse
 * @constant
 * @type {number}
 */
export
const acse: NetworkProtocolProfile = NetworkProtocolProfile_acse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_dse
 * @constant
 * @type {number}
 */
export
const NetworkProtocolProfile_dse: NetworkProtocolProfile = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NetworkProtocolProfile_dse
 * @constant
 * @type {number}
 */
export
const dse: NetworkProtocolProfile = NetworkProtocolProfile_dse; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_NetworkProtocolProfile: $.ASN1Decoder<NetworkProtocolProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkProtocolProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkProtocolProfile (el: _Element): NetworkProtocolProfile {
    if (!_cached_decoder_for_NetworkProtocolProfile) { _cached_decoder_for_NetworkProtocolProfile = $._decode_implicit<NetworkProtocolProfile>(() => $._decodeInteger); }
    return _cached_decoder_for_NetworkProtocolProfile(el);
}

let _cached_encoder_for_NetworkProtocolProfile: $.ASN1Encoder<NetworkProtocolProfile> | null = null;

/**
 * @summary Encodes a(n) NetworkProtocolProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkProtocolProfile, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkProtocolProfile (value: NetworkProtocolProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkProtocolProfile) { _cached_encoder_for_NetworkProtocolProfile = $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_NetworkProtocolProfile(value, elGetter);
}


/* eslint-enable */
