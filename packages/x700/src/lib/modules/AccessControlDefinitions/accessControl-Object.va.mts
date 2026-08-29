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
 * @summary accessControl_Object
 * @description
 *
 * Arc for X.741 managed object class OIDs:
 * `{joint-iso-itu-t ms(9) function(2) part9(9)
 * managedObjectClass(3)}`. Leaves: `accessControl`(1)
 * (not instantiated), `accessControlRules`(2) (one per ADF
 * in a domain), `rule`(3) (global or item),
 * `notificationEmitter`(4), `targets`(5), `operations`(6),
 * `initiators`(7), `aclInitiators`(8),
 * `capabilityInitiators`(9), `labelInitiators`(10),
 * `assignedLabels`(11), `attributeLabel`(12),
 * `instanceLabel`(13), `classLabel`(14). ITU-T Rec. X.741
 * (04/95)
 * [§A.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControl-Object OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) ms(9) function(2) part9(9) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const accessControl_Object: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ms */ 9,
    /* function */ 2,
    /* part9 */ 9,
    /* managedObjectClass */ 3,
]);

/* eslint-enable */
