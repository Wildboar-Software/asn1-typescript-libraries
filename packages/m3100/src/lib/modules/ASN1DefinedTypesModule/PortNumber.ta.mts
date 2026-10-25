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




export const _decode_PortNumber: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_PortNumber: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
