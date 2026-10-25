/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TcVcid, _decode_TcVcid, _encode_TcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/TcVcid.ta.mjs";


/**
 * @summary RequestedTcVcid
 * @description
 * 
 * requested-tc-vcid as returned by ROCF-GET-PARAMETER. While the instance is
 * in state 3 (active), this is the telecommand VC from the most recent
 * ROCF-START. The value is null when a telecommand VC must not be selected,
 * for example because the delivered control words are not CLCWs. When the
 * instance is not active, the reported value is the first element of the
 * permitted telecommand-VC set.
 *
 * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedTcVcid          ::=    TcVcid
 * ```
 */
export
type RequestedTcVcid = TcVcid; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedTcVcid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestedTcVcid: $.ASN1Decoder<RequestedTcVcid> = _decode_TcVcid;

/**
 * @summary Encodes a(n) RequestedTcVcid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedTcVcid, encoded as an ASN.1 Element.
 */
export const _encode_RequestedTcVcid: $.ASN1Encoder<RequestedTcVcid> = _encode_TcVcid;


/* eslint-enable */
