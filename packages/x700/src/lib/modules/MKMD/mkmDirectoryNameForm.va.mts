/* eslint-disable */
import {
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
 * @summary mkmDirectoryNameForm
 * @description
 *
 * Arc for MKM Directory name forms. Allocation 1 is
 * `registeredInformationNameForm` (`commonName` = last OID arc of the
 * registered information object). ITU-T Rec. X.750 (10/96)
 * [A.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * B.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mkmDirectoryNameForm OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part16(16) standardSpecificExtension(0)
 *    directoryNameForms(7)}
 * ```
 *
 * @constant
 */
export const mkmDirectoryNameForm: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part16 */ 16,
    /* standardSpecificExtension */ 0,
    /* directoryNameForms */ 7,
]);

/* eslint-enable */
