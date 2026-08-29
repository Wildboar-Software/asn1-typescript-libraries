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
import {
    ActualStopTime,
    _decode_ActualStopTime,
    _encode_ActualStopTime,
} from '../Test-ASN1Module/ActualStopTime.ta.mjs';
/**
 * @summary defaultActualStopTime
 * @description
 *
 * DEFAULT VALUE of the actualStopTime attribute: unknown until the test
 * performer knows the actual or expected stop. Added by Technical Corrigendum
 * 1. ITU-T Rec. X.745 (11/93) §8.2.1.
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * X.745 Cor.1 (08/97) A.7.1.
 * https://www.itu.int/rec/T-REC-X.745-199708-I_Cor1
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
