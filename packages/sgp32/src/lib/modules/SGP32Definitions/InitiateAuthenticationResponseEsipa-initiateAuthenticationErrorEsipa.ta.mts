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
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponseEsipa-initiateAuthenticationErrorEsipa ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = INTEGER;

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress
 * @constant
 * @type {number}
 */
export
const invalidDpAddress: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const euiccVersionNotSupportedByDp: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const ciPKIdNotSupported: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch
 * @constant
 * @type {number}
 */
export
const smdpAddressMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 51; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch
 * @constant
 * @type {number}
 */
export
const smdpOidMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId
 * @constant
 * @type {number}
 */
export
const invalidEimTransactionId: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa: $.ASN1Decoder<InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa (el: _Element): InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa {
    if (!_cached_decoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa) { _cached_decoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = $._decodeInteger; }
    return _cached_decoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa(el);
}

let _cached_encoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa: $.ASN1Encoder<InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa (value: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa) { _cached_encoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = $._encodeInteger; }
    return _cached_encoder_for_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa(value, elGetter);
}


/* eslint-enable */
