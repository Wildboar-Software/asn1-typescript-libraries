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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.js';
export {
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.js';
import { id_ep_encrypted } from '../IPMSObjectIdentifiers/id-ep-encrypted.va.js';
export { id_ep_encrypted } from '../IPMSObjectIdentifiers/id-ep-encrypted.va.js';

/* START_OF_SYMBOL_DEFINITION encrypted_body_part_parameters */
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
/* END_OF_SYMBOL_DEFINITION encrypted_body_part_parameters */

/* eslint-enable */
