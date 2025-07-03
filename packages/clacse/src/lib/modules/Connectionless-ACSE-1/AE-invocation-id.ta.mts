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

/**
 * @summary Decode an `AE_invocation_id` value
 * @param el The ASN.1 element to decode
 * @returns The decoded `AE_invocation_id` value
 * @function
 */
export const _decode_AE_invocation_id = $._decodeInteger;

/**
 * @summary Encode an `AE_invocation_id` value
 * @param value The `AE_invocation_id` value to encode
 * @param elGetter The function to get the ASN.1 element to encode
 * @returns The encoded ASN.1 element
 * @function
 */
export const _encode_AE_invocation_id = $._encodeInteger;

/* eslint-enable */
