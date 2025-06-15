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
    RedirectionHistory,
    _decode_RedirectionHistory,
    _encode_RedirectionHistory,
} from '../MTSAbstractService/RedirectionHistory.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary redirection_history
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * redirection-history EXTENSION ::= {
 *   RedirectionHistory,
 *   IDENTIFIED BY  standard-extension:25
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RedirectionHistory>}
 * @implements {EXTENSION<RedirectionHistory>}
 */
export const redirection_history: EXTENSION<RedirectionHistory> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RedirectionHistory,
    },
    encoderFor: {
        '&Type': _encode_RedirectionHistory,
    },
    '&id': {
        standard_extension: 25,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
