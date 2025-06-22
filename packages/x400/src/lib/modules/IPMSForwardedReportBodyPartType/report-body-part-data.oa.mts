/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    ReportDeliveryArgument,
    _decode_ReportDeliveryArgument,
    _encode_ReportDeliveryArgument,
} from '../MTSAbstractService/ReportDeliveryArgument.ta.mjs';
import { id_et_report } from '../IPMSObjectIdentifiers/id-et-report.va.mjs';
/**
 * @summary report_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * report-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<ReportDeliveryArgument>}
 * @implements {TYPE_IDENTIFIER<ReportDeliveryArgument>}
 */
export const report_body_part_data: TYPE_IDENTIFIER<ReportDeliveryArgument> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ReportDeliveryArgument,
    },
    encoderFor: {
        '&Type': _encode_ReportDeliveryArgument,
    },
    '&id': id_et_report /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
