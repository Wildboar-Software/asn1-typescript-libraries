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
    BlindCopyRecipientsField,
    _decode_BlindCopyRecipientsField,
    _encode_BlindCopyRecipientsField,
} from '../IPMSInformationObjects/BlindCopyRecipientsField.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary blind_copy_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * blind-copy-recipients EXTENSION ::= {
 *   BlindCopyRecipientsField,
 *   IDENTIFIED BY  standard-extension:41
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<BlindCopyRecipientsField>}
 * @implements {EXTENSION<BlindCopyRecipientsField>}
 */
export const blind_copy_recipients: EXTENSION<BlindCopyRecipientsField> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_BlindCopyRecipientsField,
    },
    encoderFor: {
        '&Type': _encode_BlindCopyRecipientsField,
    },
    '&id': {
        standard_extension: 41,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
