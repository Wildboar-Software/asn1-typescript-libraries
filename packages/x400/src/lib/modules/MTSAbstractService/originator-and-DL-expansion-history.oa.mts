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
    OriginatorAndDLExpansionHistory,
    _decode_OriginatorAndDLExpansionHistory,
    _encode_OriginatorAndDLExpansionHistory,
} from '../MTSAbstractService/OriginatorAndDLExpansionHistory.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary originator_and_DL_expansion_history
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-and-DL-expansion-history EXTENSION ::= {
 *   OriginatorAndDLExpansionHistory,
 *   IDENTIFIED BY  standard-extension:30
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<OriginatorAndDLExpansionHistory>}
 * @implements {EXTENSION<OriginatorAndDLExpansionHistory>}
 */
export const originator_and_DL_expansion_history: EXTENSION<OriginatorAndDLExpansionHistory> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_OriginatorAndDLExpansionHistory,
    },
    encoderFor: {
        '&Type': _encode_OriginatorAndDLExpansionHistory,
    },
    '&id': {
        standard_extension: 30,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
