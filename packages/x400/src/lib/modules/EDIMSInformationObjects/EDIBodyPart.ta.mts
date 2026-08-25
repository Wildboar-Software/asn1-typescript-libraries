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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EDIBodyPart
 * @description
 *
 * An EDI Body Part carries a single EDI Interchange. EDIBodyPart ::= OCTET STRING The
 * reference definition of EDI Interchange used is that used by EDIFACT (ISO 9735). See
 * ITU-T X.435 (1999), §8.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIBodyPart  ::=  OCTET STRING
 * ```
 */
export type EDIBodyPart = OCTET_STRING; // OctetStringType


export const _decode_EDIBodyPart = $._decodeOctetString;


export const _encode_EDIBodyPart = $._encodeOctetString;


/* eslint-enable */
