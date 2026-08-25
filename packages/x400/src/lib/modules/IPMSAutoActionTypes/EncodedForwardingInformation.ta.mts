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
 * @summary EncodedForwardingInformation
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§19).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedForwardingInformation  ::=
 *   OCTET STRING
 * ```
 */
export type EncodedForwardingInformation = OCTET_STRING; // OctetStringType


export const _decode_EncodedForwardingInformation = $._decodeOctetString;


export const _encode_EncodedForwardingInformation = $._encodeOctetString;


/* eslint-enable */
