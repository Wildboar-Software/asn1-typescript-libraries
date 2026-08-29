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
 * @summary accessControl_NameBinding
 * @description
 *
 * Arc for X.741 name-binding OIDs:
 * `{joint-iso-itu-t ms(9) function(2) part9(9)
 * nameBinding(6)}`. Leaves:
 * `rule-accessControlRules`(1) (named by
 * `accessControlObjectName`), `operations-targets`(2)
 * (named by `operationType`),
 * `notificationEmitter-accessControlRules`(3),
 * `attributeLabel-assignedLabels`(4),
 * `instanceLabel-assignedLabels`(5),
 * `classLabel-assignedLabels`(6) (label bindings named by
 * `labelName`). ITU-T Rec. X.741 (04/95)
 * [§A.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-NameBinding OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const accessControl_NameBinding: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* nameBinding */ 6,
]);

/* eslint-enable */
