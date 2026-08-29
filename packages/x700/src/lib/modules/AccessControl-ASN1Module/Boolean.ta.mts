/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary Boolean
 * @description
 *
 * Syntax of `initiatorACImandated` on initiators: TRUE
 * means initiator ACI is required on every management
 * operation request (else access is denied); FALSE means
 * none is required. Default of that attribute is `false`.
 * ITU-T Rec. X.741 (04/95)
 * [§A.5.14](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.7.1.1, A.2.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Boolean  ::=  BOOLEAN
 * ```
 */
export type Boolean = BOOLEAN; // BooleanType


export const _decode_Boolean = $._decodeBoolean;


export const _encode_Boolean = $._encodeBoolean;


/* eslint-enable */
