/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary PDUString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUString  ::=  OCTET STRING
 * ```
 */
export type PDUString = OCTET_STRING; // OctetStringType


export const _decode_PDUString = $._decodeOctetString;


export const _encode_PDUString = $._encodeOctetString;


/* eslint-enable */
