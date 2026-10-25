/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SuppliedRecords, _decode_SuppliedRecords, _encode_SuppliedRecords } from "../ESFormat-Update/SuppliedRecords.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * The records the client supplies for the update. Not retained as
 * submitted. The task package instead carries a server structure per
 * record.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep  ::=  SuppliedRecords
 * ```
 */
export
type ClientPartNotToKeep = SuppliedRecords; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> = _decode_SuppliedRecords;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export const _encode_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> = _encode_SuppliedRecords;


/* eslint-enable */
