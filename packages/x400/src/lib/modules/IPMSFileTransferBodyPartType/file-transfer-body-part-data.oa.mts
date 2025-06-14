/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    FileTransferData,
    _decode_FileTransferData,
    _encode_FileTransferData,
} from '../IPMSFileTransferBodyPartType/FileTransferData.ta.mjs';
import { id_et_file_transfer } from '../IPMSObjectIdentifiers/id-et-file-transfer.va.mjs';
/* START_OF_SYMBOL_DEFINITION file_transfer_body_part_data */
/**
 * @summary file_transfer_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * file-transfer-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<FileTransferData>}
 * @implements {TYPE_IDENTIFIER<FileTransferData>}
 */
export const file_transfer_body_part_data: TYPE_IDENTIFIER<FileTransferData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_FileTransferData,
    },
    encoderFor: {
        '&Type': _encode_FileTransferData,
    },
    '&id': id_et_file_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION file_transfer_body_part_data */

/* eslint-enable */
