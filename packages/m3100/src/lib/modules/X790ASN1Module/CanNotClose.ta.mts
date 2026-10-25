/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary CanNotClose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CanNotClose  ::=  INTEGER {alreadyCleared(0)}
 * ```
 */
export type CanNotClose = INTEGER;


/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const CanNotClose_alreadyCleared: 0 = 0 satisfies CanNotClose; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const alreadyCleared: 0 = CanNotClose_alreadyCleared; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CanNotClose: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_CanNotClose: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
