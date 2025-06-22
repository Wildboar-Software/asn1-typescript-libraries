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
    ReportingMTACertificate,
    _decode_ReportingMTACertificate,
    _encode_ReportingMTACertificate,
} from '../MTSAbstractService/ReportingMTACertificate.ta.mjs';
import { id_att_reporting_MTA_certificate } from '../MSObjectIdentifiers/id-att-reporting-MTA-certificate.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_reporting_MTA_certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-reporting-MTA-certificate X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ReportingMTACertificate,
 *   NUMERATION             single-valued,
 *   ID                     id-att-reporting-MTA-certificate
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReportingMTACertificate>}
 * @implements {X413ATTRIBUTE<ReportingMTACertificate>}
 */
export const mt_reporting_MTA_certificate: X413ATTRIBUTE<ReportingMTACertificate> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReportingMTACertificate,
    },
    encoderFor: {
        '&Type': _encode_ReportingMTACertificate,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_reporting_MTA_certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
