/* eslint-disable */
import {
    joint_iso_itu_t,
    OBJECT_IDENTIFIER,
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
 * @summary eventReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReply OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) assertedValueIdentifier(13)
 *    eventReply(6)}
 * ```
 *
 * @constant
 */
export const eventReply: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part19 */ 19,
        /* assertedValueIdentifier */ 13,
        /* eventReply */ 6,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
