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
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';

/* START_OF_SYMBOL_DEFINITION op_cancel_deferred_delivery */
/**
 * @summary op_cancel_deferred_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * op-cancel-deferred-delivery Code ::= local:7
 * ```
 *
 * @constant
 */
export const op_cancel_deferred_delivery: Code = { local: 7 };
/* END_OF_SYMBOL_DEFINITION op_cancel_deferred_delivery */

/* eslint-enable */
