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
import { id_mst } from '../IPMSObjectIdentifiers/id-mst.va';
export { id_mst } from '../IPMSObjectIdentifiers/id-mst.va';

/* START_OF_SYMBOL_DEFINITION id_mst_prevent_nrn_generation */
/**
 * @summary id_mst_prevent_nrn_generation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-prevent-nrn-generation ID ::= {id-mst  4}
 * ```
 *
 * @constant
 */
export const id_mst_prevent_nrn_generation: ID = new _OID([4], id_mst);
/* END_OF_SYMBOL_DEFINITION id_mst_prevent_nrn_generation */

/* eslint-enable */
