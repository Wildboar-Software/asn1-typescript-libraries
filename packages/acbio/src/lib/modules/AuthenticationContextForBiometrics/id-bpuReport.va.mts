/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';


/**
 * @summary id_bpuReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bpuReport OBJECT IDENTIFIER ::= {iso(1) standard(0) acbio(24761) contentType(2) bpuReport(4)}
 * ```
 *
 * @constant
 */
export const id_bpuReport: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* standard */ 0,
    /* acbio */ 24761,
    /* contentType */ 2,
    /* bpuReport */ 4,
]);

/* eslint-enable */
