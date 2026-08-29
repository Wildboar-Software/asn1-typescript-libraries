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
 * @summary accessControl_Package
 * @description
 *
 * Arc for X.741 GDMO package OIDs:
 * `{joint-iso-itu-t ms(9) function(2) part9(9)
 * package(4)}`. Leaves include
 * `stateConditionsPackage`(1),
 * `authenticationContextPackage`(2) (named in Cor.2),
 * security/time/operational-violation alarm pkgs (3–5),
 * `accessControlUsagePkg`(6),
 * `accessControlServiceReportPkg`(7),
 * `attributeIdsPackage`(8),
 * `attributeModificationPackage`(9), `actionsPackage`(10),
 * `scopePackage`(11), `aclPackage`(12),
 * `capabilityPackage`(13), `labelPackage`(14),
 * `operationsListPackage`(15). ITU-T Rec. X.741 (04/95)
 * [§A.1](https://www.itu.int/rec/T-REC-X.741-199504-I);
 * Cor.2 (06/98) A.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-Package OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) package(4)}
 * ```
 *
 * @constant
 */
export const accessControl_Package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* package */ 4,
]);

/* eslint-enable */
