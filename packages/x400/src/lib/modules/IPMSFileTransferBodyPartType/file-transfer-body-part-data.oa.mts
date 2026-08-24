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
} from '@wildboar/asn1';
import {
    FileTransferData,
    _decode_FileTransferData,
    _encode_FileTransferData,
} from '../IPMSFileTransferBodyPartType/FileTransferData.ta.mjs';
import { id_et_file_transfer } from '../IPMSObjectIdentifiers/id-et-file-transfer.va.mjs';
/**
 * @summary file_transfer_body_part_data
 * @description
 *
 * Information object `file_transfer_body_part_data`. The data component of the body part
 * contains the file contents being transferred. The syntax for representation of these
 * contents is implied by the contents-type parameter. See ITU-T X.420 (1999), §7.4.12.7.
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

/* eslint-enable */
