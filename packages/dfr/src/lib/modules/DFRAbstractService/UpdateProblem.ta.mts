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
 * @summary UpdateProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateProblem  ::=  ENUMERATED {
 *     inappropriate-object-class          (1),
 *     insufficient-access-rights          (2),
 *     reserved-by-a-user                  (3),
 *     illegal-content-modification        (4),
 *     group-membership-criteria-violation (5),
 *     reference-loop-detected             (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UpdateProblem {
    inappropriate_object_class = 1,
    insufficient_access_rights = 2,
    reserved_by_a_user = 3,
    illegal_content_modification = 4,
    group_membership_criteria_violation = 5,
    reference_loop_detected = 6,
}

/**
 * @summary UpdateProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateProblem  ::=  ENUMERATED {
 *     inappropriate-object-class          (1),
 *     insufficient-access-rights          (2),
 *     reserved-by-a-user                  (3),
 *     illegal-content-modification        (4),
 *     group-membership-criteria-violation (5),
 *     reference-loop-detected             (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UpdateProblem = _enum_for_UpdateProblem;

/**
 * @summary UpdateProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateProblem  ::=  ENUMERATED {
 *     inappropriate-object-class          (1),
 *     insufficient-access-rights          (2),
 *     reserved-by-a-user                  (3),
 *     illegal-content-modification        (4),
 *     group-membership-criteria-violation (5),
 *     reference-loop-detected             (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UpdateProblem = _enum_for_UpdateProblem;

/**
 * @summary UpdateProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const UpdateProblem_inappropriate_object_class: UpdateProblem = UpdateProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: UpdateProblem = UpdateProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UpdateProblem_insufficient_access_rights
 * @constant
 * @type {number}
 */
export
const UpdateProblem_insufficient_access_rights: UpdateProblem = UpdateProblem.insufficient_access_rights; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficient_access_rights
 * @constant
 * @type {number}
 */
export
const insufficient_access_rights: UpdateProblem = UpdateProblem.insufficient_access_rights; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UpdateProblem_reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const UpdateProblem_reserved_by_a_user: UpdateProblem = UpdateProblem.reserved_by_a_user; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const reserved_by_a_user: UpdateProblem = UpdateProblem.reserved_by_a_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UpdateProblem_illegal_content_modification
 * @constant
 * @type {number}
 */
export
const UpdateProblem_illegal_content_modification: UpdateProblem = UpdateProblem.illegal_content_modification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary illegal_content_modification
 * @constant
 * @type {number}
 */
export
const illegal_content_modification: UpdateProblem = UpdateProblem.illegal_content_modification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UpdateProblem_group_membership_criteria_violation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_group_membership_criteria_violation: UpdateProblem = UpdateProblem.group_membership_criteria_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary group_membership_criteria_violation
 * @constant
 * @type {number}
 */
export
const group_membership_criteria_violation: UpdateProblem = UpdateProblem.group_membership_criteria_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UpdateProblem_reference_loop_detected
 * @constant
 * @type {number}
 */
export
const UpdateProblem_reference_loop_detected: UpdateProblem = UpdateProblem.reference_loop_detected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reference_loop_detected
 * @constant
 * @type {number}
 */
export
const reference_loop_detected: UpdateProblem = UpdateProblem.reference_loop_detected; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UpdateProblem: $.ASN1Decoder<UpdateProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateProblem (el: _Element): UpdateProblem {
    if (!_cached_decoder_for_UpdateProblem) { _cached_decoder_for_UpdateProblem = $._decodeEnumerated; }
    return _cached_decoder_for_UpdateProblem(el);
}

let _cached_encoder_for_UpdateProblem: $.ASN1Encoder<UpdateProblem> | null = null;

/**
 * @summary Encodes a(n) UpdateProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateProblem, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateProblem (value: UpdateProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateProblem) { _cached_encoder_for_UpdateProblem = $._encodeEnumerated; }
    return _cached_encoder_for_UpdateProblem(value, elGetter);
}


/* eslint-enable */
