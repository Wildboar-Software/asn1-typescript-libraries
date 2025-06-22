/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    V42BisCompressionParameter,
    _decode_V42BisCompressionParameter,
    _encode_V42BisCompressionParameter,
} from '../EDIMSInformationObjects/V42BisCompressionParameter.ta.mjs';
import { id_edi_compression_v42bis } from '../EDIMSObjectIdentifiers/id-edi-compression-v42bis.va.mjs';
import { COMPRESSION_ALGORITHM } from '../EDIMSInformationObjects/COMPRESSION-ALGORITHM.oca.mjs';
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

/* eslint-enable */
