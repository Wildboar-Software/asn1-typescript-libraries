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
    FileTransferParameters,
    _decode_FileTransferParameters,
    _encode_FileTransferParameters,
} from '../IPMSFileTransferBodyPartType/FileTransferParameters.ta.mjs';
import { id_ep_file_transfer } from '../IPMSObjectIdentifiers/id-ep-file-transfer.va.mjs';
/* START_OF_SYMBOL_DEFINITION file_transfer_body_part_parameters */
/**
 * @summary file_transfer_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * file-transfer-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<FileTransferParameters>}
 * @implements {TYPE_IDENTIFIER<FileTransferParameters>}
 */
export const file_transfer_body_part_parameters: TYPE_IDENTIFIER<FileTransferParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_FileTransferParameters,
    },
    encoderFor: {
        '&Type': _encode_FileTransferParameters,
    },
    '&id': id_ep_file_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION file_transfer_body_part_parameters */

/* eslint-enable */
