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
 * @summary accessControl_Attribute
 * @description
 *
 * Arc for X.741 attribute OIDs:
 * `{joint-iso-itu-t ms(9) function(2) part9(9)
 * attribute(7)}`. Leaves (Table 2):
 * `accessControlList`(1), `accessControlFilter`(2),
 * `accessControlObjectName`(3), `actionFilterList`(4),
 * `attributeFilterList`(5), `authenticationContext`(6),
 * `capabilityIdentitiesList`(7), `defaultAccess`(8),
 * `defaultDenialResponse`(9), `denialGranularity`(10),
 * `domainIdentity`(11), `enforcementAction`(12),
 * `filter`(13), `initiatorACImandated`(14),
 * `initiatorsList`(15), `invalidAccessAttempts`(16),
 * `labelName`(17), `managedObjectClasses`(18),
 * `managedObjectInstances`(19), `operationType`(20),
 * `operationsList`(21), `scope`(22), `scopeFilter`(23),
 * `securityLabel`(24), `stateConditions`(25),
 * `synchronization`(26), `synchronizationFilter`(27),
 * `targetsList`(28), `validAccessAttempts`(29). ITU-T Rec.
 * X.741 (04/95)
 * [§A.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * Table 2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-Attribute OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) attribute(7)}
 * ```
 *
 * @constant
 */
export const accessControl_Attribute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* attribute */ 7,
]);

/* eslint-enable */
