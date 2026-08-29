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
 * @summary CEKReference
 * @description
 *
 * OCTET STRING identifier of a content-encryption key (RFC 3185).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CEKReference  ::=  OCTET STRING
 * ```
 */
export type CEKReference = OCTET_STRING; // OctetStringType




export const _decode_CEKReference = $._decodeOctetString;




export const _encode_CEKReference = $._encodeOctetString;


/* eslint-enable */
