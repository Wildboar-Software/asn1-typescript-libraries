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
    ProofOfDelivery,
    _decode_ProofOfDelivery,
    _encode_ProofOfDelivery,
} from '../MTSAbstractService/ProofOfDelivery.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary proof_of_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proof-of-delivery EXTENSION ::= {
 *   ProofOfDelivery,
 *   IDENTIFIED BY  standard-extension:29
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProofOfDelivery>}
 * @implements {EXTENSION<ProofOfDelivery>}
 */
export const proof_of_delivery: EXTENSION<ProofOfDelivery> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ProofOfDelivery,
    },
    encoderFor: {
        '&Type': _encode_ProofOfDelivery,
    },
    '&id': {
        standard_extension: 29,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
