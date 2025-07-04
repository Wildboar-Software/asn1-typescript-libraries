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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ProofOfSubmission,
    _decode_ProofOfSubmission,
    _encode_ProofOfSubmission,
} from '../MTSAbstractService/ProofOfSubmission.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary proof_of_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proof-of-submission EXTENSION ::= {
 *   ProofOfSubmission,
 *   IDENTIFIED BY  standard-extension:35
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProofOfSubmission>}
 * @implements {EXTENSION<ProofOfSubmission>}
 */
export const proof_of_submission: EXTENSION<ProofOfSubmission> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ProofOfSubmission,
    },
    encoderFor: {
        '&Type': _encode_ProofOfSubmission,
    },
    '&id': {
        standard_extension: 35,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
