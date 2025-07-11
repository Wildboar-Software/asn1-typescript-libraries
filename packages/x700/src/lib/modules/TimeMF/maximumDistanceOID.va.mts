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
 * @summary maximumDistanceOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumDistanceOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumDistance(19)}
 * ```
 *
 * @constant
 */
export const maximumDistanceOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* maximumDistance */ 19],
    timeManagement
);

/* eslint-enable */
