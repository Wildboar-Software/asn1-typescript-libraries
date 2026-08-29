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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary InvalidTestOperation
 * @description
 *
 * Specific error: the requested test operation is not valid for this managed
 * object class. Syntax is the OID of the invalid operation (typically an
 * action). Used on suspend/resume and terminate. ITU-T Rec. X.745 (11/93)
 * §8.4.4.4, A.6.
 * [§8.4.4.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidTestOperation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InvalidTestOperation = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_InvalidTestOperation = $._decodeObjectIdentifier;


export const _encode_InvalidTestOperation = $._encodeObjectIdentifier;


/* eslint-enable */
