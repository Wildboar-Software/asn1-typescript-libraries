/* eslint-disable */
import {
    itu_t,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';

/**
 * @summary dialogue_as_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dialogue-as-id OBJECT IDENTIFIER ::= {itu-t recommendation q 773 as(1) dialogue-as(1) version1(1)}
 * ```
 *
 * @constant
 */
export const dialogue_as_id: OBJECT_IDENTIFIER = new _OID(
    [ 0 /* recommendation */, 17 /* q */, 773, /* as */ 1, /* dialogue-as */ 1, /* version1 */ 1],
    itu_t
);

/* eslint-enable */
