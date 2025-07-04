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
    RecipientCertificate,
    _decode_RecipientCertificate,
    _encode_RecipientCertificate,
} from '../MTSAbstractService/RecipientCertificate.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary recipient_certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-certificate EXTENSION ::= {
 *   RecipientCertificate,
 *   IDENTIFIED BY  standard-extension:28
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RecipientCertificate>}
 * @implements {EXTENSION<RecipientCertificate>}
 */
export const recipient_certificate: EXTENSION<RecipientCertificate> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RecipientCertificate,
    },
    encoderFor: {
        '&Type': _encode_RecipientCertificate,
    },
    '&id': {
        standard_extension: 28,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
