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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary DefaultIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultIndex  ::=  INTEGER
 * ```
 */
export type DefaultIndex = INTEGER;




export const _decode_DefaultIndex = $._decodeInteger;




export const _encode_DefaultIndex = $._encodeInteger;


/* eslint-enable */
