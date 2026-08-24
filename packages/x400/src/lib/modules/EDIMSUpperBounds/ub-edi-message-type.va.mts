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
} from '@wildboar/asn1';

/**
 * @summary ub_edi_message_type
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_edi_message_type`. Indicates the Message type(s) present
 * in the EDI Interchange. It consists of a set of distinct strings. See ITU-T X.435
 * (1999), §8.2.13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-edi-message-type INTEGER ::= 6
 * ```
 *
 * @constant
 */
export const ub_edi_message_type: INTEGER = 6;

/* eslint-enable */
