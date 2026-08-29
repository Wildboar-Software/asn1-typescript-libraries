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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ConnectionId
 * @description
 *
 * Naming attribute of a `connection` managed object.
 * MATCHES FOR EQUALITY. Registered as `{… attribute(7)
 * connectionId(1)}`. ITU-T Rec. X.723 (11/93)
 * [§9.4](https://www.itu.int/rec/T-REC-X.723-199311-I), §13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionId  ::=  GraphicString
 * ```
 */
export type ConnectionId = GraphicString; // GraphicString




export const _decode_ConnectionId = $._decodeGraphicString;




export const _encode_ConnectionId = $._encodeGraphicString;


/* eslint-enable */
