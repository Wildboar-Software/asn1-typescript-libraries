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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary NAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress  ::=  OCTET STRING(SIZE (0..20))
 * ```
 */
export type NAddress = OCTET_STRING; // OctetStringType




export const _decode_NAddress = $._decodeOctetString;




export const _encode_NAddress = $._encodeOctetString;


/* eslint-enable */
