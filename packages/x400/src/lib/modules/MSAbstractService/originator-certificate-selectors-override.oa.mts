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
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.mjs';
import { id_ext_originator_certificate_selectors_override } from '../MSObjectIdentifiers/id-ext-originator-certificate-selectors-override.va.mjs';
import { type MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary originator_certificate_selectors_override
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-certificate-selectors-override MS-EXTENSION ::= {
 *   CertificateSelectors
 *     (WITH COMPONENTS {
 *        ...,
 *        message-origin-authentication  ABSENT
 *      })
 *   IDENTIFIED BY  id-ext-originator-certificate-selectors-override
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<CertificateSelectors>}
 * @implements {MS_EXTENSION<CertificateSelectors>}
 */
export const originator_certificate_selectors_override: MS_EXTENSION<CertificateSelectors> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_CertificateSelectors,
    },
    encoderFor: {
        '&Type': _encode_CertificateSelectors,
    },
    '&id': id_ext_originator_certificate_selectors_override /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
