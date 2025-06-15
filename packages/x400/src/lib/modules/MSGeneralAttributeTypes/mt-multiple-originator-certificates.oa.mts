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
    ExtendedCertificates,
    _decode_ExtendedCertificates,
    _encode_ExtendedCertificates,
} from '../MTSAbstractService/ExtendedCertificates.ta.mjs';
import { id_att_multiple_originator_certificates } from '../MSObjectIdentifiers/id-att-multiple-originator-certificates.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";


/**
 * @summary mt_multiple_originator_certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-multiple-originator-certificates X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ExtendedCertificates,
 *   NUMERATION             single-valued,
 *   ID                     id-att-multiple-originator-certificates
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ExtendedCertificates>}
 * @implements {X413ATTRIBUTE<ExtendedCertificates>}
 */
export const mt_multiple_originator_certificates: X413ATTRIBUTE<ExtendedCertificates> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtendedCertificates,
    },
    encoderFor: {
        '&Type': _encode_ExtendedCertificates,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_multiple_originator_certificates /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
