/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
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
 * Wrapped content-encryption key (CEK).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.3.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export type EncryptedKey = OCTET_STRING; // OctetStringType




export const _decode_EncryptedKey: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_EncryptedKey: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
