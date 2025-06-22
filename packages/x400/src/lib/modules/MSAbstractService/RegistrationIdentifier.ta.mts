/* eslint-disable */
import {
    PrintableString,
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
 * @summary RegistrationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationIdentifier  ::=
 *   PrintableString(SIZE (1..ub-ua-registration-identifier-length))
 * ```
 */
export type RegistrationIdentifier = PrintableString; // PrintableString


export const _decode_RegistrationIdentifier = $._decodePrintableString;


export const _encode_RegistrationIdentifier = $._encodePrintableString;


/* eslint-enable */
