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
 * @summary EncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export type EncryptedKey = OCTET_STRING; // OctetStringType




export const _decode_EncryptedKey = $._decodeOctetString;




export const _encode_EncryptedKey = $._encodeOctetString;


/* eslint-enable */
