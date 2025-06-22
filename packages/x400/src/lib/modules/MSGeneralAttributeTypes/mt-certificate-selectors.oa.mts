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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.mjs';
import { id_att_certificate_selectors } from '../MSObjectIdentifiers/id-att-certificate-selectors.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_certificate_selectors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-certificate-selectors X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  CertificateSelectors,
 *   NUMERATION             single-valued,
 *   ID                     id-att-certificate-selectors
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CertificateSelectors>}
 * @implements {X413ATTRIBUTE<CertificateSelectors>}
 */
export const mt_certificate_selectors: X413ATTRIBUTE<CertificateSelectors> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CertificateSelectors,
    },
    encoderFor: {
        '&Type': _encode_CertificateSelectors,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_certificate_selectors /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
