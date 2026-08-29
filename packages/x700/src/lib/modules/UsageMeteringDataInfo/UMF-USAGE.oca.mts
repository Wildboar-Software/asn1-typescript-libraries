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
import { type DMI_TYPE_IDENTIFIER } from '@wildboar/attribute-asn1module';
/**
 * @summary UMF_USAGE
 * @description
 *
 * Open type for service-specific usage data. `&id` is the
 * registered service type; `&Value` is that specialization's
 * usage-data syntax (the `XxxUsageData` prototype in A.9).
 * Replaces 1995 `ServiceType` / `ANY DEFINED BY serviceType`.
 * ITU-T Rec. X.742 (1995)/Cor.2 (02/2000)
 * [§5](https://www.itu.int/rec/T-REC-X.742-200002-I); X.742
 * (04/95) [A.9](https://www.itu.int/rec/T-REC-X.742-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UMF-USAGE ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type UMF_USAGE = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
