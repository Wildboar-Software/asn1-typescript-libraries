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
import { type SWMF_TRANSFER } from '../SWMF/SWMF-TRANSFER.oca.mjs';
/**
 * @summary TransferInfoSet
 * @description
 *
 * Extensible object set of `SWMF-TRANSFER` protocol identifiers
 * permitted in `TransferInfo.transferProtocol`. Published empty
 * (`{...}`); specializations add FTAM or other transfer mechanisms.
 * The softwareDistributor object does not itself model those
 * mechanisms. ITU-T Rec. X.744 (10/96)
 * [§8.1.4](https://www.itu.int/rec/T-REC-X.744-199610-I);
 * Cor.2 (02/2000)
 * [item 5](https://www.itu.int/rec/T-REC-X.744-200002-I_Cor2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferInfoSet SWMF-TRANSFER ::= {...}
 * ```
 *
 * @constant
 * @type {SWMF_TRANSFER[]}
 *
 */
export const TransferInfoSet: SWMF_TRANSFER[] = [];

/* eslint-enable */
