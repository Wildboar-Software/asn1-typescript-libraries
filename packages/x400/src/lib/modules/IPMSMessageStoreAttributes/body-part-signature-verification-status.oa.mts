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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    BodyPartSignatureVerification,
    _decode_BodyPartSignatureVerification,
    _encode_BodyPartSignatureVerification,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification.ta.mjs';
export {
    BodyPartSignatureVerification,
    _decode_BodyPartSignatureVerification,
    _encode_BodyPartSignatureVerification,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification.ta.mjs';
import { id_hat_body_part_signature_verification_status } from '../IPMSObjectIdentifiers/id-hat-body-part-signature-verification-status.va.mjs';
export { id_hat_body_part_signature_verification_status } from '../IPMSObjectIdentifiers/id-hat-body-part-signature-verification-status.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION body_part_signature_verification_status */
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
/* END_OF_SYMBOL_DEFINITION body_part_signature_verification_status */

/* eslint-enable */
