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
} from "@wildboar/asn1";
import { type CONTENT_TYPE } from "../TAI/CONTENT-TYPE.oca.mjs";
import { bpuReport } from "../TAI/bpuReport.oa.mjs";
/**
 * @summary ContentTypeBPUReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentTypeBPUReport CONTENT-TYPE ::= {bpuReport}
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE[]}
 * 
 */
export
const ContentTypeBPUReport: (CONTENT_TYPE<any>)[] = [ bpuReport, ];

/* eslint-enable */
