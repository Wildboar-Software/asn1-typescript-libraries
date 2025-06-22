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
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from '../IPMSInformationObjects/EncryptedData.ta.mjs';
import { id_et_encrypted } from '../IPMSObjectIdentifiers/id-et-encrypted.va.mjs';
/**
 * @summary encrypted_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<EncryptedData>}
 * @implements {TYPE_IDENTIFIER<EncryptedData>}
 */
export const encrypted_body_part_data: TYPE_IDENTIFIER<EncryptedData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_EncryptedData,
    },
    encoderFor: {
        '&Type': _encode_EncryptedData,
    },
    '&id': id_et_encrypted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
