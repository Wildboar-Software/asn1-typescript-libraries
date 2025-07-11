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
    DLExemptedRecipients,
    _decode_DLExemptedRecipients,
    _encode_DLExemptedRecipients,
} from '../MTSAbstractService/DLExemptedRecipients.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary dl_exempted_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-exempted-recipients EXTENSION ::= {
 *   DLExemptedRecipients,
 *   IDENTIFIED BY  standard-extension:42
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<DLExemptedRecipients>}
 * @implements {EXTENSION<DLExemptedRecipients>}
 */
export const dl_exempted_recipients: EXTENSION<DLExemptedRecipients> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_DLExemptedRecipients,
    },
    encoderFor: {
        '&Type': _encode_DLExemptedRecipients,
    },
    '&id': {
        standard_extension: 42,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
