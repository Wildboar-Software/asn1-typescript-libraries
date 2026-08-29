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
 * @summary GdmoObjectClass
 * @description
 *
 * Object identifier of a GDMO managed object class (actual or
 * allomorphic). Used in repertoire lists and in MIT-search class
 * fields. ITU-T Rec. X.750 (10/96)
 * [A.2.4](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GdmoObjectClass  ::=  OBJECT IDENTIFIER
 * ```
 */
export type GdmoObjectClass = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_GdmoObjectClass = $._decodeObjectIdentifier;




export const _encode_GdmoObjectClass = $._encodeObjectIdentifier;


/* eslint-enable */
