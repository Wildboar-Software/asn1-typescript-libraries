/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyReference
 * @description
 * 
 * Card-specific INTEGER key reference for ISO/IEC 7816-4/8 DOs. ISO/IEC
 * 7816-15:2016 §8.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyReference  ::=  INTEGER
 * ```
 */
export
type KeyReference = INTEGER;
export const _decode_KeyReference = $._decodeInteger;
export const _encode_KeyReference = $._encodeInteger;


/* eslint-enable */
