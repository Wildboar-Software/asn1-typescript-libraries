/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";


/**
 * @summary HLR_Id
 * @description
 *
 * HLR identity: leading digits of IMSI (MCC, MNC, leading digits of MSIN)
 * forming the HLR Id defined in 3GPP TS 23.003 / CCITT E.212.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.15 and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HLR-Id  ::=  IMSI
 * ```
 */
export
type HLR_Id = IMSI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) HLR_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HLR_Id: $.ASN1Decoder<HLR_Id> = _decode_IMSI;

/**
 * @summary Encodes a(n) HLR_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HLR_Id, encoded as an ASN.1 Element.
 */
export const _encode_HLR_Id: (value: HLR_Id, elGetter: $.ASN1Encoder<any>) => _Element = _encode_IMSI;


/* eslint-enable */
