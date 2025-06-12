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
import { id_mst_prevent_nrn_generation } from '../IPMSObjectIdentifiers/id-mst-prevent-nrn-generation.va.mjs';
export { id_mst_prevent_nrn_generation } from '../IPMSObjectIdentifiers/id-mst-prevent-nrn-generation.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
export { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION prevent_nrn_generation */
/**
 * @summary prevent_nrn_generation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prevent-nrn-generation MS-EXTENSION ::= {
 *   NULL
 *   IDENTIFIED BY  id-mst-prevent-nrn-generation
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<NULL>}
 * @implements {MS_EXTENSION<NULL>}
 */
export const prevent_nrn_generation: MS_EXTENSION<NULL> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_mst_prevent_nrn_generation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION prevent_nrn_generation */

/* eslint-enable */
