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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




/**
 * @summary SubsystemId
 * @description
 *
 * Naming attribute of `subsystem`, a portion of a system
 * whose components are named independently of other
 * subsystems. Often used as a containment point for
 * objects of a given OSI layer; the external structure is
 * a system-design choice. Name binding `subsystem-system`
 * names it under `system`. GDMO MATCHES FOR EQUALITY.
 * Registered as `{joint-iso-ccitt ms(9) smi(3) part5(5)
 * attribute(7) subsystemId(11)}`. ITU-T Rec. X.723
 * (11/1993)
 * [§9.17](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.9, §8.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsystemId  ::=  GraphicString
 * ```
 */
export
type SubsystemId = GraphicString; // GraphicString




export const _decode_SubsystemId = $._decodeGraphicString;




export const _encode_SubsystemId = $._encodeGraphicString;


/* eslint-enable */
