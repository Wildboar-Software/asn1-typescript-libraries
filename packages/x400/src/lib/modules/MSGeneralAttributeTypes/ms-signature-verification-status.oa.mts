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
    SignatureVerificationStatus,
    _decode_SignatureVerificationStatus,
    _encode_SignatureVerificationStatus,
} from '../MSGeneralAttributeTypes/SignatureVerificationStatus.ta.mjs';
import { id_att_signature_verification_status } from '../MSObjectIdentifiers/id-att-signature-verification-status.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_signature_verification_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-signature-verification-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  SignatureVerificationStatus,
 *   NUMERATION             single-valued,
 *   ID                     id-att-signature-verification-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SignatureVerificationStatus>}
 * @implements {X413ATTRIBUTE<SignatureVerificationStatus>}
 */
export const ms_signature_verification_status: X413ATTRIBUTE<SignatureVerificationStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SignatureVerificationStatus,
    },
    encoderFor: {
        '&Type': _encode_SignatureVerificationStatus,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_signature_verification_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
