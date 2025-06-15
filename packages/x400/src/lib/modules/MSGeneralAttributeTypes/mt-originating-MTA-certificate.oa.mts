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
    OriginatingMTACertificate,
    _decode_OriginatingMTACertificate,
    _encode_OriginatingMTACertificate,
} from '../MTSAbstractService/OriginatingMTACertificate.ta.mjs';
import { id_att_originating_MTA_certificate } from '../MSObjectIdentifiers/id-att-originating-MTA-certificate.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_originating_MTA_certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-originating-MTA-certificate X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  OriginatingMTACertificate,
 *   NUMERATION             single-valued,
 *   ID                     id-att-originating-MTA-certificate
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OriginatingMTACertificate>}
 * @implements {X413ATTRIBUTE<OriginatingMTACertificate>}
 */
export const mt_originating_MTA_certificate: X413ATTRIBUTE<OriginatingMTACertificate> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_OriginatingMTACertificate,
    },
    encoderFor: {
        '&Type': _encode_OriginatingMTACertificate,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_originating_MTA_certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
