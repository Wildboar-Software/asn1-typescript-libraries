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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary MessageAuthenticationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export type MessageAuthenticationCode = OCTET_STRING; // OctetStringType




export const _decode_MessageAuthenticationCode = $._decodeOctetString;




export const _encode_MessageAuthenticationCode = $._encodeOctetString;


/* eslint-enable */
