/* eslint-disable */
import {
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
import { StatusResponse, _decode_StatusResponse, _encode_StatusResponse } from "../ISO-9506-MMS-1/StatusResponse.ta.mjs";


/**
 * @summary Status_Response
 * @description
 * 
 * Confirmed Result(+) of Status: the Status Response parameter
 * (logical/physical status and optional local detail; companion-standard extras
 * if `csr`). ISO 9506-1:2003 §10.3.1.2; ISO 9506-2:2003 §10.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status-Response  ::=  StatusResponse
 * ```
 */
export
type Status_Response = StatusResponse; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Status_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Status_Response: $.ASN1Decoder<Status_Response> = _decode_StatusResponse;

/**
 * @summary Encodes a(n) Status_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Status_Response, encoded as an ASN.1 Element.
 */
export const _encode_Status_Response: $.ASN1Encoder<Status_Response> = _encode_StatusResponse;


/* eslint-enable */
