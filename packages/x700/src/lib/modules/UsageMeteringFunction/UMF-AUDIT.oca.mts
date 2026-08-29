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
 * @summary UMF_AUDIT
 * @description
 *
 * Open type for audit-information variants. `&id` selects the
 * service; `&Value` is the corresponding audit details. Replaces
 * the 1995 `ANY DEFINED BY service` form. ITU-T Rec. X.742
 * (1995)/Cor.2 (02/2000)
 * [§4](https://www.itu.int/rec/T-REC-X.742-200002-I); X.742
 * (04/95) [§8.2.4.2](https://www.itu.int/rec/T-REC-X.742-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UMF-AUDIT ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type UMF_AUDIT = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
