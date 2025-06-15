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
    ActualStopTime,
    _decode_ActualStopTime,
    _encode_ActualStopTime,
} from '../Test-ASN1Module/ActualStopTime.ta.mjs';
/**
 * @summary defaultActualStopTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultActualStopTime ActualStopTime ::= unknown:NULL
 * ```
 *
 * @constant
 */
export const defaultActualStopTime: ActualStopTime = { unknown: null };

/* eslint-enable */
