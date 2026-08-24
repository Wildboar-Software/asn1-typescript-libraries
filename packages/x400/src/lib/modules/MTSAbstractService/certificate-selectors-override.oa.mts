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
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary certificate_selectors_override
 * @description
 *
 * Information object `certificate_selectors_override`. This argument contains
 * information sufficient to identify one certificate where a user has more than one
 * certificate with the same algorithm-identifier. It allows a certificate of the
 * originator to be identified to validate specific digital signatures within the
 * content-integrity-check or message-token arguments, or to be used for key agreement
 * for encryption. See ITU-T X.411 (1999), §8.2.1.1.1.44.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificate-selectors-override EXTENSION ::= {
 *   CertificateSelectors
 *     (WITH COMPONENTS {
 *        ...,
 *        message-origin-authentication  ABSENT
 *      }),
 *   IDENTIFIED BY  standard-extension:46
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<CertificateSelectors>}
 * @implements {EXTENSION<CertificateSelectors>}
 */
export const certificate_selectors_override: EXTENSION<CertificateSelectors> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_CertificateSelectors,
    },
    encoderFor: {
        '&Type': _encode_CertificateSelectors,
    },
    '&id': {
        standard_extension: 46,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
