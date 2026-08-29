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
 * @summary ErrorInfo1
 * @description
 *
 * GDMO example (X.722 Annex A). Syntax of the example
 * `createErrorParameter` (CONTEXT SPECIFIC-ERROR). If the
 * maximum number of `exampleObjectClass` instances exist in
 * the containing object, a further create yields CMIP
 * processingFailure whose `SpecificErrorInfo.errorinfo` is
 * this type: the number of instances of that class that
 * currently exist in the containing object. ITU-T Rec. X.722
 * (01/92) [A.3](https://www.itu.int/rec/T-REC-X.722-199201-I),
 * A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorInfo1  ::=  INTEGER
 * ```
 */
export type ErrorInfo1 = INTEGER;


export const _decode_ErrorInfo1 = $._decodeInteger;


export const _encode_ErrorInfo1 = $._encodeInteger;


/* eslint-enable */
