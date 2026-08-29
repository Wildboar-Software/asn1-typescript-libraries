/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TestStep
 * @description
 *
 * Read-only integer identifying a step within a TO test state. Step numbers are
 * defined by the TO class. Used with TestStepQualifier in the test step package
 * so the conductor can monitor progress. ITU-T Rec. X.745 (11/93) §7.3.4,
 * 8.2.4.
 * [§7.3.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestStep  ::=  INTEGER
 * ```
 */
export type TestStep = INTEGER;


export const _decode_TestStep = $._decodeInteger;


export const _encode_TestStep = $._encodeInteger;


/* eslint-enable */
