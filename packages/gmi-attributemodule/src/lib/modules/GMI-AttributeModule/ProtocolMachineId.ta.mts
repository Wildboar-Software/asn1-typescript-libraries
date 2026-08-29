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
 * @summary ProtocolMachineId
 * @description
 *
 * Naming syntax shared by `clProtocolMachineId` and
 * `coProtocolMachineId`. `clProtocolMachine` performs
 * connectionless-mode functions within an entity;
 * `coProtocolMachine` performs connection-mode functions.
 * Both are named under `communicationsEntity`. GDMO
 * MATCHES FOR EQUALITY. Registered as
 * `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * clProtocolMachineId(2)}` and `coProtocolMachineId(3)`.
 * ITU-T Rec. X.723 (11/1993)
 * [§9.5](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §9.6, §7.4, §7.5, §8.2, §8.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolMachineId  ::=  GraphicString
 * ```
 */
export
type ProtocolMachineId = GraphicString; // GraphicString




export const _decode_ProtocolMachineId = $._decodeGraphicString;




export const _encode_ProtocolMachineId = $._encodeGraphicString;


/* eslint-enable */
