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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    DLExpansionHistory,
    _decode_DLExpansionHistory,
    _encode_DLExpansionHistory,
} from '../MTSAbstractService/DLExpansionHistory.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary dl_expansion_history
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-expansion-history EXTENSION ::= {
 *   DLExpansionHistory,
 *   IDENTIFIED BY  standard-extension:26
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<DLExpansionHistory>}
 * @implements {EXTENSION<DLExpansionHistory>}
 */
export const dl_expansion_history: EXTENSION<DLExpansionHistory> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_DLExpansionHistory,
    },
    encoderFor: {
        '&Type': _encode_DLExpansionHistory,
    },
    '&id': {
        standard_extension: 26,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
