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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    CloseOutVerification,
    _enum_for_CloseOutVerification,
    CloseOutVerification_noAction /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noAction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_verified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    verified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_deniedActivityDurationDisputed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    deniedActivityDurationDisputed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_deniedCloseOutNarrDisputed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    deniedCloseOutNarrDisputed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CloseOutVerification,
    _encode_CloseOutVerification,
} from '../X790ASN1Module/CloseOutVerification.ta';
export {
    CloseOutVerification,
    _enum_for_CloseOutVerification,
    CloseOutVerification_noAction /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noAction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_verified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    verified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_deniedActivityDurationDisputed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    deniedActivityDurationDisputed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CloseOutVerification_deniedCloseOutNarrDisputed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    deniedCloseOutNarrDisputed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CloseOutVerification,
    _encode_CloseOutVerification,
} from '../X790ASN1Module/CloseOutVerification.ta';

/* START_OF_SYMBOL_DEFINITION closeOutVerificationCloseOutVerificationInitial */
/**
 * @summary closeOutVerificationCloseOutVerificationInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * closeOutVerificationCloseOutVerificationInitial CloseOutVerification ::= noAction
 * ```
 *
 * @constant
 */
export const closeOutVerificationCloseOutVerificationInitial: CloseOutVerification = CloseOutVerification_noAction;
/* END_OF_SYMBOL_DEFINITION closeOutVerificationCloseOutVerificationInitial */

/* eslint-enable */
