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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AE_invocation_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-invocation-id  ::=  INTEGER
 * ```
 */
export type AE_invocation_id = INTEGER;




export const _decode_AE_invocation_id = $._decodeInteger;




export const _encode_AE_invocation_id = $._encodeInteger;


/* eslint-enable */
