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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.js';
export { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.js';
import { id_name_binding } from '../MhsMTAObjectIdentifiers/id-name-binding.va.js';
export { id_name_binding } from '../MhsMTAObjectIdentifiers/id-name-binding.va.js';

/* START_OF_SYMBOL_DEFINITION id_name_binding_secVerifGenMsgFunction_mta */
/**
 * @summary id_name_binding_secVerifGenMsgFunction_mta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding-secVerifGenMsgFunction-mta ID ::= {id-name-binding  29}
 * ```
 *
 * @constant
 */
export const id_name_binding_secVerifGenMsgFunction_mta: ID = new _OID(
    [29],
    id_name_binding
);
/* END_OF_SYMBOL_DEFINITION id_name_binding_secVerifGenMsgFunction_mta */

/* eslint-enable */
