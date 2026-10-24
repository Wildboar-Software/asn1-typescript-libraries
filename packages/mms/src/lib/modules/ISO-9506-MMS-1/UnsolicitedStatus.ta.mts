/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StatusResponse, _decode_StatusResponse, _encode_StatusResponse } from "../ISO-9506-MMS-1/StatusResponse.ta.mjs";


/**
 * @summary UnsolicitedStatus
 * @description
 * 
 * Unconfirmed UnsolicitedStatus: an MMS-user may spontaneously report status
 * when it can detect a change. Parameter meaning matches Status Result(+).
 * Shall not be sent if the peer did not indicate support in Initiate Services
 * Supported. Association selection is a local matter. Functionally similar to
 * an Event Notification with a Status Event Action, but conditions are not
 * visible or modifiable via MMS. ISO 9506-1:2003 §10.4; ISO 9506-2:2003 §10.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnsolicitedStatus  ::=  StatusResponse
 * ```
 */
export
type UnsolicitedStatus = StatusResponse; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UnsolicitedStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnsolicitedStatus: $.ASN1Decoder<UnsolicitedStatus> = _decode_StatusResponse;

/**
 * @summary Encodes a(n) UnsolicitedStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsolicitedStatus, encoded as an ASN.1 Element.
 */
export const _encode_UnsolicitedStatus: $.ASN1Encoder<UnsolicitedStatus> = _encode_StatusResponse;


/* eslint-enable */
