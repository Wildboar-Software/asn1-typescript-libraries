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
    ProofOfSubmission,
    _decode_ProofOfSubmission,
    _encode_ProofOfSubmission,
} from '../MTSAbstractService/ProofOfSubmission.ta.mjs';
import { id_att_proof_of_submission } from '../MSObjectIdentifiers/id-att-proof-of-submission.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_proof_of_submission */
/**
 * @summary mt_proof_of_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-proof-of-submission X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ProofOfSubmission,
 *   NUMERATION             single-valued,
 *   ID                     id-att-proof-of-submission
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ProofOfSubmission>}
 * @implements {X413ATTRIBUTE<ProofOfSubmission>}
 */
export const mt_proof_of_submission: X413ATTRIBUTE<ProofOfSubmission> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProofOfSubmission,
    },
    encoderFor: {
        '&Type': _encode_ProofOfSubmission,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_proof_of_submission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_proof_of_submission */

/* eslint-enable */
