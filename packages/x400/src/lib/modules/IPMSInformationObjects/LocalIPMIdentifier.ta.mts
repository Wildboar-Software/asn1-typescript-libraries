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
 * @summary LocalIPMIdentifier
 * @description
 *
 * `LocalIPMIdentifier`. An IPM identifier is an information item that unambiguously and
 * uniquely identifies an IPM, distinguishing it from all other IPMs ever conveyed by any
 * user. IPMIdentifier ::= [APPLICATION 11] SET { user ORName OPTIONAL,
 * user-relative-identifier LocalIPMIdentifier} An IPM identifier has the following
 * components: a) User (O): Identifies the user who originates the IPM. See ITU-T X.420
 * (1999), §7.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalIPMIdentifier  ::=  PrintableString(SIZE (0..ub-local-ipm-identifier))
 * ```
 */
export type LocalIPMIdentifier = PrintableString; // PrintableString


export const _decode_LocalIPMIdentifier = $._decodePrintableString;


export const _encode_LocalIPMIdentifier = $._encodePrintableString;


/* eslint-enable */
