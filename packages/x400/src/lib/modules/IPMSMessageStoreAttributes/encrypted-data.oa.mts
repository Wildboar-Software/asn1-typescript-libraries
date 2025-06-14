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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from '../IPMSInformationObjects/EncryptedData.ta.mjs';
import { id_bat_encrypted_data } from '../IPMSObjectIdentifiers/id-bat-encrypted-data.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION encrypted_data */
/**
 * @summary encrypted_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EncryptedData,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-encrypted-data
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EncryptedData>}
 * @implements {X413ATTRIBUTE<EncryptedData>}
 */
export const encrypted_data: X413ATTRIBUTE<EncryptedData> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EncryptedData,
    },
    encoderFor: {
        '&Type': _encode_EncryptedData,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_encrypted_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION encrypted_data */

/* eslint-enable */
