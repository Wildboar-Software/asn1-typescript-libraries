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
 * @summary SWMF_TRANSFER
 * @description
 *
 * Information-object class for a software-delivery transfer protocol
 * (X.721 `DMI-TYPE-IDENTIFIER`). Each object binds a protocol OID
 * (`&id`) to protocol-specific value syntax (`&Value`). Introduced
 * by Cor.2, which removed `TransferProtocol ::= OBJECT IDENTIFIER`
 * and the `ANY DEFINED BY` form of `TransferInfo`. ITU-T Rec. X.744
 * Cor.2 (02/2000)
 * [item 5](https://www.itu.int/rec/T-REC-X.744-200002-I_Cor2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SWMF-TRANSFER ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type SWMF_TRANSFER = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
