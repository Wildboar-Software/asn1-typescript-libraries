/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ContentType
 * @description
 *
 * Content-type OID field of `CONTENT-TYPE` (`&id`).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentType  ::=  CONTENT-TYPE.&id
 * ```
 */
export type ContentType = OBJECT_IDENTIFIER; // ObjectClassFieldType




export const _decode_ContentType = $._decodeObjectIdentifier;




export const _encode_ContentType = $._encodeObjectIdentifier;


/* eslint-enable */
