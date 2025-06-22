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
 * @summary Channel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Channel  ::=  INTEGER
 * ```
 */
export type Channel = INTEGER;




export const _decode_Channel = $._decodeInteger;




export const _encode_Channel = $._encodeInteger;


/* eslint-enable */
