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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta';
export { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta';
import { id_hat } from '../IPMSObjectIdentifiers/id-hat.va';
export { id_hat } from '../IPMSObjectIdentifiers/id-hat.va';

/* START_OF_SYMBOL_DEFINITION id_hat_copy_recipients */
/**
 * @summary id_hat_copy_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-copy-recipients ID ::= {id-hat  12}
 * ```
 *
 * @constant
 */
export const id_hat_copy_recipients: ID = new _OID([12], id_hat);
/* END_OF_SYMBOL_DEFINITION id_hat_copy_recipients */

/* eslint-enable */
