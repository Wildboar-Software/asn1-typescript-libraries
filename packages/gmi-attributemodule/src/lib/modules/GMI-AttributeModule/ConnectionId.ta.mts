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
 * @summary ConnectionId
 * @description
 *
 * Naming attribute of `singlePeerConnection` (X.723 §9.4
 * calls this "the connection managed object class"). That
 * class is a view of a single peer connection or
 * association between a pair of entities for transfer of
 * service or protocol data. Name binding
 * `singlePeerConnection-coProtocolMachine` names it under
 * `coProtocolMachine`. GDMO MATCHES FOR EQUALITY.
 * Registered as `{joint-iso-ccitt ms(9) smi(3) part5(5)
 * attribute(7) connectionId(1)}`. ITU-T Rec. X.723
 * (11/1993)
 * [§9.4](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.8, §8.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionId  ::=  GraphicString
 * ```
 */
export
type ConnectionId = GraphicString; // GraphicString




export const _decode_ConnectionId = $._decodeGraphicString;




export const _encode_ConnectionId = $._encodeGraphicString;


/* eslint-enable */
