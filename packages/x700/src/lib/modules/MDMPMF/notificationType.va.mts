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
} from 'asn1-ts';

/* START_OF_SYMBOL_DEFINITION notificationType */
/**
 * @summary notificationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notificationType OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part19(19) assertedValueIdentifier(13)
 *    notificationType(3)}
 * ```
 *
 * @constant
 */
export const notificationType: OBJECT_IDENTIFIER = new _OID(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part19 */ 19,
        /* assertedValueIdentifier */ 13,
        /* notificationType */ 3,
    ],
    joint_iso_itu_t
);
/* END_OF_SYMBOL_DEFINITION notificationType */

/* eslint-enable */
