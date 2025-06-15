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
} from 'asn1-ts';
import {
    RenameResult,
    _decode_RenameResult,
    _encode_RenameResult,
} from '../Pbact-access/RenameResult.ta.mjs';
import { id_renameResult } from '../Pbact-access/id-renameResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION renameResult */
/**
 * @summary renameResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * renameResult CONTENT-TYPE ::= {
 *               RenameResult
 * IDENTIFIED BY id-renameResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<RenameResult>}
 * @implements {CONTENT_TYPE<RenameResult>}
 */
export const renameResult: CONTENT_TYPE<RenameResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_RenameResult,
    },
    encoderFor: {
        '&Type': _encode_RenameResult,
    },
    '&id': id_renameResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION renameResult */

/* eslint-enable */
