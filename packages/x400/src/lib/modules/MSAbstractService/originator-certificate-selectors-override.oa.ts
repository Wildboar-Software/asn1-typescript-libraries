/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.js';
export {
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.js';
import { id_ext_originator_certificate_selectors_override } from '../MSObjectIdentifiers/id-ext-originator-certificate-selectors-override.va.js';
export { id_ext_originator_certificate_selectors_override } from '../MSObjectIdentifiers/id-ext-originator-certificate-selectors-override.va.js';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.js';
export { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION originator_certificate_selectors_override */
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
/* END_OF_SYMBOL_DEFINITION originator_certificate_selectors_override */

/* eslint-enable */
