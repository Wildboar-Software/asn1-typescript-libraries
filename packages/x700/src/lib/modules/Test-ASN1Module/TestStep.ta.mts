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
