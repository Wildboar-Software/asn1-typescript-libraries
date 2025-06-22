/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OSI_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OSI-PDU{APPLICATION-CONTEXT:protocol}  ::=  TYPE-IDENTIFIER.&Type (
 *   OsiBind{{protocol}} |
 *   OsiBindResult{{protocol}} |
 *   OsiBindError{{protocol}} |
 *   OsiOperation{{protocol.&Operations}} |
 *   OsiUnbind |
 *   PresentationAbort )
 * ```
 */
export type OSI_PDU = _Element; // ObjectClassFieldType


export const _decode_OSI_PDU = $._decodeAny;


export const _encode_OSI_PDU = $._encodeAny;


/* eslint-enable */
