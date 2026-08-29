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
 * @summary cLNSId_Value
 * @description
 *
 * Initial `clProtocolMachineId` of a `cLNS` MO: `"CLNS"`. At most one cLNS per
 * network entity.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cLNSId-Value GraphicString ::= "CLNS"
 * ```
 *
 * @constant
 */
export const cLNSId_Value: GraphicString = 'CLNS';

/* eslint-enable */
