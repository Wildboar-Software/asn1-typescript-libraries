/* eslint-disable */
import {
    GraphicString,
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
 * @summary TestStepQualifier
 * @description
 *
 * Read-only text about the current test step: enabling conditions (e.g.
 * awaiting external event / management input), a procedural statement (stop on
 * error, loop on error, loop at end), or status (fault detected). Defined by
 * the TO class. ITU-T Rec. X.745 (11/93) §7.3.4, 8.2.4.
 * [§7.3.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestStepQualifier  ::=  GraphicString
 * ```
 */
export type TestStepQualifier = GraphicString; // GraphicString


export const _decode_TestStepQualifier = $._decodeGraphicString;


export const _encode_TestStepQualifier = $._encodeGraphicString;


/* eslint-enable */
