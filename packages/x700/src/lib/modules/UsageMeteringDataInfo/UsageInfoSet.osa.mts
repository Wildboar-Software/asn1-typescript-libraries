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
import { type UMF_USAGE } from '../UsageMeteringDataInfo/UMF-USAGE.oca.mjs';
/**
 * @summary UsageInfoSet
 * @description
 *
 * Extensible set of `UMF-USAGE` information objects. Empty in
 * this Recommendation; a specialization registers one member
 * per service type (OID plus `usageData` syntax). ITU-T Rec.
 * X.742 (1995)/Cor.2 (02/2000)
 * [§5](https://www.itu.int/rec/T-REC-X.742-200002-I); X.742
 * (04/95) [A.9](https://www.itu.int/rec/T-REC-X.742-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageInfoSet UMF-USAGE ::= {...}
 * ```
 *
 * @constant
 * @type {UMF_USAGE[]}
 *
 */
export const UsageInfoSet: UMF_USAGE[] = [];

/* eslint-enable */
