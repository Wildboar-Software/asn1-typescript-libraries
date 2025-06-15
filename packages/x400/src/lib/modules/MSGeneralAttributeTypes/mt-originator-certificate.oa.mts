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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    OriginatorCertificate,
    _decode_OriginatorCertificate,
    _encode_OriginatorCertificate,
} from '../MTSAbstractService/OriginatorCertificate.ta.mjs';
import { id_att_originator_certificate } from '../MSObjectIdentifiers/id-att-originator-certificate.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";


/**
 * @summary mt_originator_certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-originator-certificate X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  OriginatorCertificate,
 *   NUMERATION             single-valued,
 *   ID                     id-att-originator-certificate
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OriginatorCertificate>}
 * @implements {X413ATTRIBUTE<OriginatorCertificate>}
 */
export const mt_originator_certificate: X413ATTRIBUTE<OriginatorCertificate> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_OriginatorCertificate,
    },
    encoderFor: {
        '&Type': _encode_OriginatorCertificate,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_originator_certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
