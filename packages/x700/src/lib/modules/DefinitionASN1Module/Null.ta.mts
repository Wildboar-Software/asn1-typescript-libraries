/* eslint-disable */
import {
    NULL,
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
 * @summary Null
 * @description
 *
 * Syntax of the `attributeNotAvailableViaThisAction` specific-error
 * parameter: retrieval of the requested attribute via
 * `getTextualRepresentation` is not supported. ITU-T Rec. X.750
 * (10/96) [A.3.4](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Null  ::=  NULL
 * ```
 */
export type Null = NULL; // NullType




export const _decode_Null = $._decodeNull;




export const _encode_Null = $._encodeNull;


/* eslint-enable */
