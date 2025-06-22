/* eslint-disable */
import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Fixed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fixed  ::=  BOOLEAN
 * ```
 */
export type Fixed = BOOLEAN; // BooleanType




export const _decode_Fixed = $._decodeBoolean;




export const _encode_Fixed = $._encodeBoolean;


/* eslint-enable */
