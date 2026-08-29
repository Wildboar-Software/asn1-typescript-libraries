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
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
/**
 * @summary clockEstimatedErrorOID
 * @description
 *
 * Registers attribute `clockEstimatedError`: estimated error
 * of the clock. In `clockSourceDetailPkg` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.3](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockEstimatedErrorOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockEstimatedError(2)}
 * ```
 *
 * @constant
 */
export const clockEstimatedErrorOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockEstimatedError */ 2],
    timeManagement
);

/* eslint-enable */
