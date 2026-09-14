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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DfrObjectClassID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClassID  ::=  OBJECT IDENTIFIER (
 *     id-dfr-document
 *     | id-dfr-root-group
 *     | id-dfr-proper-group
 *     | id-dfr-search-result-list
 * )
 * ```
 */
export
type DfrObjectClassID = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_DfrObjectClassID = $._decodeObjectIdentifier;
export const _encode_DfrObjectClassID = $._encodeObjectIdentifier;


/* eslint-enable */
