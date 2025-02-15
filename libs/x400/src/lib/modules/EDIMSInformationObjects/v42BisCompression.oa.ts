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
    V42BisCompressionParameter,
    _decode_V42BisCompressionParameter,
    _encode_V42BisCompressionParameter,
} from '../EDIMSInformationObjects/V42BisCompressionParameter.ta';
export {
    V42BisCompressionParameter,
    _decode_V42BisCompressionParameter,
    _encode_V42BisCompressionParameter,
} from '../EDIMSInformationObjects/V42BisCompressionParameter.ta';
import { id_edi_compression_v42bis } from '../EDIMSObjectIdentifiers/id-edi-compression-v42bis.va';
export { id_edi_compression_v42bis } from '../EDIMSObjectIdentifiers/id-edi-compression-v42bis.va';
import { COMPRESSION_ALGORITHM } from '../EDIMSInformationObjects/COMPRESSION-ALGORITHM.oca';
export { COMPRESSION_ALGORITHM } from '../EDIMSInformationObjects/COMPRESSION-ALGORITHM.oca';

/* START_OF_SYMBOL_DEFINITION v42BisCompression */
/**
 * @summary v42BisCompression
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * v42BisCompression COMPRESSION-ALGORITHM ::= {
 *   VALUE          V42BisCompressionParameter
 *   IDENTIFIED BY  id-edi-compression-v42bis
 * }
 * ```
 *
 * @constant
 * @type {COMPRESSION_ALGORITHM<V42BisCompressionParameter>}
 * @implements {COMPRESSION_ALGORITHM<V42BisCompressionParameter>}
 */
export const v42BisCompression: COMPRESSION_ALGORITHM<V42BisCompressionParameter> = {
    class: 'COMPRESSION-ALGORITHM',
    decoderFor: {
        '&Type': _decode_V42BisCompressionParameter,
    },
    encoderFor: {
        '&Type': _encode_V42BisCompressionParameter,
    },
    '&id': id_edi_compression_v42bis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION v42BisCompression */

/* eslint-enable */
