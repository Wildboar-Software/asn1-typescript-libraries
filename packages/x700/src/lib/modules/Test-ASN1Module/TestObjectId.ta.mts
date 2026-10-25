/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary TestObjectId
 * @description
 *
 * RDN attribute uniquely identifying a TO. Assigned by the test conductor or
 * the test performer. Mandatory on the testObject class. ITU-T Rec. X.745
 * (11/93) §8.1.4, A.3.11.
 * [§8.1.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestObjectId  ::=  INTEGER
 * ```
 */
export type TestObjectId = INTEGER;


export const _decode_TestObjectId: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_TestObjectId: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
