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
 * @summary EncryptedContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContent  ::=  OCTET STRING
 * ```
 */
export type EncryptedContent = OCTET_STRING; // OctetStringType




export const _decode_EncryptedContent = $._decodeOctetString;




export const _encode_EncryptedContent = $._encodeOctetString;


/* eslint-enable */
