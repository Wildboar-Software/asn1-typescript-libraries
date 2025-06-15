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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary AP_invocation_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-id  ::=  INTEGER
 * ```
 */
export type AP_invocation_id = INTEGER;




export const _decode_AP_invocation_id = $._decodeInteger;




export const _encode_AP_invocation_id = $._encodeInteger;


/* eslint-enable */
