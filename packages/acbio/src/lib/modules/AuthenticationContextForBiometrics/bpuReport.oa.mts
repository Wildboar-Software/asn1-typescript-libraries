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
    BPUReport,
    _decode_BPUReport,
    _encode_BPUReport,
} from '../AuthenticationContextForBiometrics/BPUReport.ta.mjs';
import { id_bpuReport } from '../AuthenticationContextForBiometrics/id-bpuReport.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";


/**
 * @summary bpuReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bpuReport CONTENT-TYPE ::= {
 *     TYPE BPUReport
 *     IDENTIFIED BY id-bpuReport }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<BPUReport>}
 * @implements {CONTENT_TYPE<BPUReport>}
 */
export const bpuReport: CONTENT_TYPE<BPUReport> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_BPUReport,
    },
    encoderFor: {
        '&Type': _encode_BPUReport,
    },
    '&id': id_bpuReport /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
