/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary BiometricProcessSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type BiometricProcessSecurity = OCTET_STRING; // OctetStringType




export const _decode_BiometricProcessSecurity = $._decodeOctetString;




export const _encode_BiometricProcessSecurity = $._encodeOctetString;


/* eslint-enable */
