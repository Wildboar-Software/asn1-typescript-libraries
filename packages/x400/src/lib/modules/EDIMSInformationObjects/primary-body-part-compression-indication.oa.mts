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
import {
    CompressionParameter,
    _decode_CompressionParameter,
    _encode_CompressionParameter,
} from '../IPMSFileTransferBodyPartType/CompressionParameter.ta.mjs';
export {
    CompressionParameter,
    _decode_CompressionParameter,
    _encode_CompressionParameter,
} from '../IPMSFileTransferBodyPartType/CompressionParameter.ta.mjs';
import { id_edi_compression } from '../EDIMSObjectIdentifiers/id-edi-compression.va.mjs';
export { id_edi_compression } from '../EDIMSObjectIdentifiers/id-edi-compression.va.mjs';
import { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';
export { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION primary_body_part_compression_indication */
/**
 * @summary primary_body_part_compression_indication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * primary-body-part-compression-indication EDIM-EXTENSION ::= {
 *   VALUE          CompressionParameter, -- as defined for IPM File Transfer Body
 *
 *
 *   -- Part
 *   CRITICALITY    TRUE
 *   IDENTIFIED BY  id-edi-compression
 * }
 * ```
 *
 * @constant
 * @type {EDIM_EXTENSION<CompressionParameter>}
 * @implements {EDIM_EXTENSION<CompressionParameter>}
 */
export const primary_body_part_compression_indication: EDIM_EXTENSION<CompressionParameter> = {
    class: 'EDIM-EXTENSION',
    decoderFor: {
        '&Type': _decode_CompressionParameter,
    },
    encoderFor: {
        '&Type': _encode_CompressionParameter,
    },
    '&criticality': false /* OBJECT_FIELD_SETTING */,
    '&id': id_edi_compression /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION primary_body_part_compression_indication */

/* eslint-enable */
