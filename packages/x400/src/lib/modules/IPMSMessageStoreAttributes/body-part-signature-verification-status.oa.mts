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
} from '@wildboar/asn1';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    BodyPartSignatureVerification,
    _decode_BodyPartSignatureVerification,
    _encode_BodyPartSignatureVerification,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification.ta.mjs';
import { id_hat_body_part_signature_verification_status } from '../IPMSObjectIdentifiers/id-hat-body-part-signature-verification-status.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary body_part_signature_verification_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body-part-signature-verification-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  BodyPartSignatureVerification,
 *   NUMERATION             single-valued,
 *   ID                     id-hat-body-part-signature-verification-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BodyPartSignatureVerification>}
 * @implements {X413ATTRIBUTE<BodyPartSignatureVerification>}
 */
export const body_part_signature_verification_status: X413ATTRIBUTE<BodyPartSignatureVerification> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_BodyPartSignatureVerification,
    },
    encoderFor: {
        '&Type': _encode_BodyPartSignatureVerification,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_body_part_signature_verification_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
