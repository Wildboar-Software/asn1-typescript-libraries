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
    BPUReportContentInformation,
    _decode_BPUReportContentInformation,
    _encode_BPUReportContentInformation,
} from '../AuthenticationContextForBiometrics/BPUReportContentInformation.ta.mjs';
import { id_bpuReportContentInformation } from '../AuthenticationContextForBiometrics/id-bpuReportContentInformation.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";

/* START_OF_SYMBOL_DEFINITION bpuReportContentInformation */
/**
 * @summary bpuReportContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bpuReportContentInformation CONTENT-TYPE ::= {
 *     TYPE BPUReportContentInformation
 *     IDENTIFIED BY id-bpuReportContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<BPUReportContentInformation>}
 * @implements {CONTENT_TYPE<BPUReportContentInformation>}
 */
export const bpuReportContentInformation: CONTENT_TYPE<BPUReportContentInformation> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_BPUReportContentInformation,
    },
    encoderFor: {
        '&Type': _encode_BPUReportContentInformation,
    },
    '&id': id_bpuReportContentInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION bpuReportContentInformation */

/* eslint-enable */
