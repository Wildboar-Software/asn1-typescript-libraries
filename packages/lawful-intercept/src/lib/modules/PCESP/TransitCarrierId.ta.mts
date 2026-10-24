/* eslint-disable */
import {
    type VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCarrierId
 * @description
 *
 * Carrier identifier carried on `Origination` and `Redirection`. A
 * `VisibleString` of size 3 to 7, extensible.
 *
 * This edition does not define the numbering plan or which carrier is
 * identified. Annex A defers parameter definitions to PacketCable
 * PKT-SP-ESP-I04-040723.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCarrierId  ::=  VisibleString (SIZE(3..7, ...))
 * ```
 */
export
type TransitCarrierId = VisibleString; // VisibleString
export const _decode_TransitCarrierId: $.ASN1Decoder<TransitCarrierId> = $._decodeVisibleString;
export const _encode_TransitCarrierId: $.ASN1Encoder<TransitCarrierId> = $._encodeVisibleString;


/* eslint-enable */
