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
 * @summary ReferentAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReferentAccessProblem {
    inappropriate_object_class = 1,
    insufficient_access_rights = 2,
    reserved_by_a_user = 3,
    referent_no_longer_exists = 4,
    referent_modified = 5,
    reference_content_empty = 6,
}

/**
 * @summary ReferentAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReferentAccessProblem = _enum_for_ReferentAccessProblem;

/**
 * @summary ReferentAccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentAccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     insufficient-access-rights  (2),
 *     reserved-by-a-user          (3),
 *     referent-no-longer-exists   (4),
 * 
 *     -- only used in the case a DFR-Group is copied or listed and only
 *     -- if warnings shall be reported, i.e. referent modified will not
 *     -- terminate the operation
 *     referent-modified           (5),
 *     reference-content-empty     (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReferentAccessProblem = _enum_for_ReferentAccessProblem;

/**
 * @summary ReferentAccessProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_inappropriate_object_class: ReferentAccessProblem = ReferentAccessProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: ReferentAccessProblem = ReferentAccessProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_insufficient_access_rights
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_insufficient_access_rights: ReferentAccessProblem = ReferentAccessProblem.insufficient_access_rights; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficient_access_rights
 * @constant
 * @type {number}
 */
export
const insufficient_access_rights: ReferentAccessProblem = ReferentAccessProblem.insufficient_access_rights; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_reserved_by_a_user: ReferentAccessProblem = ReferentAccessProblem.reserved_by_a_user; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const reserved_by_a_user: ReferentAccessProblem = ReferentAccessProblem.reserved_by_a_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_referent_no_longer_exists
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_referent_no_longer_exists: ReferentAccessProblem = ReferentAccessProblem.referent_no_longer_exists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_no_longer_exists
 * @constant
 * @type {number}
 */
export
const referent_no_longer_exists: ReferentAccessProblem = ReferentAccessProblem.referent_no_longer_exists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_referent_modified
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_referent_modified: ReferentAccessProblem = ReferentAccessProblem.referent_modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_modified
 * @constant
 * @type {number}
 */
export
const referent_modified: ReferentAccessProblem = ReferentAccessProblem.referent_modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentAccessProblem_reference_content_empty
 * @constant
 * @type {number}
 */
export
const ReferentAccessProblem_reference_content_empty: ReferentAccessProblem = ReferentAccessProblem.reference_content_empty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reference_content_empty
 * @constant
 * @type {number}
 */
export
const reference_content_empty: ReferentAccessProblem = ReferentAccessProblem.reference_content_empty; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReferentAccessProblem = $._decodeEnumerated;
export const _encode_ReferentAccessProblem = $._encodeEnumerated;


/* eslint-enable */
