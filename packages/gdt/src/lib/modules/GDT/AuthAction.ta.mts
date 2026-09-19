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
 * @summary AuthAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAction  ::=  INTEGER {
 *     aa-auth-request (0),
 *     aa-auth-result  (1)
 * }
 * ```
 */
export
type AuthAction = INTEGER;

/**
 * @summary AuthAction_aa_auth_request
 * @constant
 * @type {number}
 */
export
const AuthAction_aa_auth_request: AuthAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_request
 * @constant
 * @type {number}
 */
export
const aa_auth_request: AuthAction = AuthAction_aa_auth_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_result
 * @constant
 * @type {number}
 */
export
const AuthAction_aa_auth_result: AuthAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_result
 * @constant
 * @type {number}
 */
export
const aa_auth_result: AuthAction = AuthAction_aa_auth_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AuthAction: $.ASN1Decoder<AuthAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthAction (el: _Element): AuthAction {
    if (!_cached_decoder_for_AuthAction) { _cached_decoder_for_AuthAction = $._decodeInteger; }
    return _cached_decoder_for_AuthAction(el);
}

let _cached_encoder_for_AuthAction: $.ASN1Encoder<AuthAction> | null = null;

/**
 * @summary Encodes a(n) AuthAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAction, encoded as an ASN.1 Element.
 */
export
function _encode_AuthAction (value: AuthAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthAction) { _cached_encoder_for_AuthAction = $._encodeInteger; }
    return _cached_encoder_for_AuthAction(value, elGetter);
}


/* eslint-enable */
