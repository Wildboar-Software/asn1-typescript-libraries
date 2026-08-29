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
 * @summary EncryptedContent
 * @description
 *
 * Ciphertext of the encapsulated content, as in RFC 5652.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
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
