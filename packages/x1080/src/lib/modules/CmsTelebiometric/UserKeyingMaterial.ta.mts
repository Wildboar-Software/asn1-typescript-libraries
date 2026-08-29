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
 * @summary UserKeyingMaterial
 * @description
 *
 * Random UKM for static-static DH (SIZE (64)). Present when
 * static-static is used so the derived KEK is not constant.
 * Combined with the shared secret per RFC 2631.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.3.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING (SIZE (64))
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType




export const _decode_UserKeyingMaterial = $._decodeOctetString;




export const _encode_UserKeyingMaterial = $._encodeOctetString;


/* eslint-enable */
