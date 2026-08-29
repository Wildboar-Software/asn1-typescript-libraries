/* eslint-disable */
import {
    GraphicString,
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
 * @summary networkSubsystemId_Value
 * @description
 *
 * Initial `subsystemId` of the single `networkSubsystem` MO:
 * `"NetworkSubsystem"`. That class is the container for network entity, nSAP,
 * and SNPA MOs; it is not created or deleted by management.
 * ITU-T Rec. X.283 (12/97)
 * [§5.3](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * networkSubsystemId-Value GraphicString ::= "NetworkSubsystem"
 * ```
 *
 * @constant
 */
export const networkSubsystemId_Value: GraphicString = 'NetworkSubsystem';

/* eslint-enable */
