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
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.mjs';
import { id_ep_encrypted } from '../IPMSObjectIdentifiers/id-ep-encrypted.va.mjs';
/**
 * @summary encrypted_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<EncryptedParameters>}
 * @implements {TYPE_IDENTIFIER<EncryptedParameters>}
 */
export const encrypted_body_part_parameters: TYPE_IDENTIFIER<EncryptedParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_EncryptedParameters,
    },
    encoderFor: {
        '&Type': _encode_EncryptedParameters,
    },
    '&id': id_ep_encrypted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
