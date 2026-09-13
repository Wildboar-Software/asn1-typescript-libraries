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
 * UpdateProblem  ::=  INTEGER {
 *   namingViolation                   (1),
 *   objectClassViolation              (2),
 *   notAllowedOnNonLeaf               (3),
 *   notAllowedOnRDN                   (4),
 *   entryAlreadyExists                (5),
 *   affectsMultipleDSAs               (6),
 *   objectClassModificationProhibited (7),
 *   noSuchSuperior                    (8),
 *   notAncestor                       (9),
 *   parentNotAncestor                 (10),
 *   hierarchyRuleViolation            (11),
 *   familyRuleViolation               (12),
 *   insufficientPasswordQuality       (13),
 *   passwordInHistory                 (14),
 *   noPasswordSlot                    (15) }
 * ```
 */
export
type UpdateProblem = INTEGER;

/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_namingViolation: UpdateProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export
const namingViolation: UpdateProblem = UpdateProblem_namingViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_objectClassViolation: UpdateProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export
const objectClassViolation: UpdateProblem = UpdateProblem_objectClassViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAllowedOnNonLeaf: UpdateProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export
const notAllowedOnNonLeaf: UpdateProblem = UpdateProblem_notAllowedOnNonLeaf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAllowedOnRDN: UpdateProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export
const notAllowedOnRDN: UpdateProblem = UpdateProblem_notAllowedOnRDN; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export
const UpdateProblem_entryAlreadyExists: UpdateProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export
const entryAlreadyExists: UpdateProblem = UpdateProblem_entryAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export
const UpdateProblem_affectsMultipleDSAs: UpdateProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export
const affectsMultipleDSAs: UpdateProblem = UpdateProblem_affectsMultipleDSAs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export
const UpdateProblem_objectClassModificationProhibited: UpdateProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export
const objectClassModificationProhibited: UpdateProblem = UpdateProblem_objectClassModificationProhibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @constant
 * @type {number}
 */
export
const UpdateProblem_noSuchSuperior: UpdateProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @constant
 * @type {number}
 */
export
const noSuchSuperior: UpdateProblem = UpdateProblem_noSuchSuperior; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAncestor: UpdateProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export
const notAncestor: UpdateProblem = UpdateProblem_notAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export
const UpdateProblem_parentNotAncestor: UpdateProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export
const parentNotAncestor: UpdateProblem = UpdateProblem_parentNotAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_hierarchyRuleViolation: UpdateProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export
const hierarchyRuleViolation: UpdateProblem = UpdateProblem_hierarchyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_familyRuleViolation: UpdateProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export
const familyRuleViolation: UpdateProblem = UpdateProblem_familyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @constant
 * @type {number}
 */
export
const UpdateProblem_insufficientPasswordQuality: UpdateProblem = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @constant
 * @type {number}
 */
export
const insufficientPasswordQuality: UpdateProblem = UpdateProblem_insufficientPasswordQuality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @constant
 * @type {number}
 */
export
const UpdateProblem_passwordInHistory: UpdateProblem = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @constant
 * @type {number}
 */
export
const passwordInHistory: UpdateProblem = UpdateProblem_passwordInHistory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @constant
 * @type {number}
 */
export
const UpdateProblem_noPasswordSlot: UpdateProblem = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @constant
 * @type {number}
 */
export
const noPasswordSlot: UpdateProblem = UpdateProblem_noPasswordSlot; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_UpdateProblem: $.ASN1Decoder<UpdateProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateProblem (el: _Element): UpdateProblem {
    if (!_cached_decoder_for_UpdateProblem) { _cached_decoder_for_UpdateProblem = $._decodeInteger; }
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
    if (!_cached_encoder_for_UpdateProblem) { _cached_encoder_for_UpdateProblem = $._encodeInteger; }
    return _cached_encoder_for_UpdateProblem(value, elGetter);
}


/* eslint-enable */
