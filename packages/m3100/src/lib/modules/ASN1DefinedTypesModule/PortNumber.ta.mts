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
 * @summary PortNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortNumber  ::=  INTEGER
 * ```
 */
export type PortNumber = INTEGER;




export const _decode_PortNumber = $._decodeInteger;




export const _encode_PortNumber = $._encodeInteger;


/* eslint-enable */
