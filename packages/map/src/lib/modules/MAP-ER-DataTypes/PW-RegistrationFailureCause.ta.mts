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
 * @summary PW_RegistrationFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PW-RegistrationFailureCause  ::=  ENUMERATED {
 *     undetermined  (0),
 *     invalidFormat  (1),
 *     newPasswordsMismatch  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PW_RegistrationFailureCause {
    undetermined = 0,
    invalidFormat = 1,
    newPasswordsMismatch = 2,
}

/**
 * @summary PW_RegistrationFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PW-RegistrationFailureCause  ::=  ENUMERATED {
 *     undetermined  (0),
 *     invalidFormat  (1),
 *     newPasswordsMismatch  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type PW_RegistrationFailureCause = _enum_for_PW_RegistrationFailureCause;

/**
 * @summary PW_RegistrationFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PW-RegistrationFailureCause  ::=  ENUMERATED {
 *     undetermined  (0),
 *     invalidFormat  (1),
 *     newPasswordsMismatch  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const PW_RegistrationFailureCause = _enum_for_PW_RegistrationFailureCause;

/**
 * @summary PW_RegistrationFailureCause_undetermined
 * @constant
 * @type {number}
 */
export
const PW_RegistrationFailureCause_undetermined: PW_RegistrationFailureCause = PW_RegistrationFailureCause.undetermined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undetermined
 * @constant
 * @type {number}
 */
export
const undetermined: PW_RegistrationFailureCause = PW_RegistrationFailureCause.undetermined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PW_RegistrationFailureCause_invalidFormat
 * @constant
 * @type {number}
 */
export
const PW_RegistrationFailureCause_invalidFormat: PW_RegistrationFailureCause = PW_RegistrationFailureCause.invalidFormat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFormat
 * @constant
 * @type {number}
 */
export
const invalidFormat: PW_RegistrationFailureCause = PW_RegistrationFailureCause.invalidFormat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PW_RegistrationFailureCause_newPasswordsMismatch
 * @constant
 * @type {number}
 */
export
const PW_RegistrationFailureCause_newPasswordsMismatch: PW_RegistrationFailureCause = PW_RegistrationFailureCause.newPasswordsMismatch; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newPasswordsMismatch
 * @constant
 * @type {number}
 */
export
const newPasswordsMismatch: PW_RegistrationFailureCause = PW_RegistrationFailureCause.newPasswordsMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PW_RegistrationFailureCause: $.ASN1Decoder<PW_RegistrationFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PW_RegistrationFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PW_RegistrationFailureCause (el: _Element): PW_RegistrationFailureCause {
    if (!_cached_decoder_for_PW_RegistrationFailureCause) { _cached_decoder_for_PW_RegistrationFailureCause = $._decodeEnumerated; }
    return _cached_decoder_for_PW_RegistrationFailureCause(el);
}

let _cached_encoder_for_PW_RegistrationFailureCause: $.ASN1Encoder<PW_RegistrationFailureCause> | null = null;

/**
 * @summary Encodes a(n) PW_RegistrationFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PW_RegistrationFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_PW_RegistrationFailureCause (value: PW_RegistrationFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PW_RegistrationFailureCause) { _cached_encoder_for_PW_RegistrationFailureCause = $._encodeEnumerated; }
    return _cached_encoder_for_PW_RegistrationFailureCause(value, elGetter);
}


/* eslint-enable */
