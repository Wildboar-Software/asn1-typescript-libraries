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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary forwarding_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * forwarding-request EXTENSION ::= {
 *   SequenceNumber,
 *   IDENTIFIED BY  standard-extension:36
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<SequenceNumber>}
 * @implements {EXTENSION<SequenceNumber>}
 */
export const forwarding_request: EXTENSION<SequenceNumber> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_SequenceNumber,
    },
    encoderFor: {
        '&Type': _encode_SequenceNumber,
    },
    '&id': {
        standard_extension: 36,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
