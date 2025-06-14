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
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.mjs';
import { id_bat_encrypted_parameters } from '../IPMSObjectIdentifiers/id-bat-encrypted-parameters.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION encrypted_parameters */
/**
 * @summary encrypted_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EncryptedParameters,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-encrypted-parameters
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EncryptedParameters>}
 * @implements {X413ATTRIBUTE<EncryptedParameters>}
 */
export const encrypted_parameters: X413ATTRIBUTE<EncryptedParameters> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EncryptedParameters,
    },
    encoderFor: {
        '&Type': _encode_EncryptedParameters,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_encrypted_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION encrypted_parameters */

/* eslint-enable */
