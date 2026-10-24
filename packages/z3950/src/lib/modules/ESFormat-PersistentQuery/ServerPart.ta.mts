/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * The actual query stored in the package. If the client supplied a query,
 * the server uses it. If the client supplied a task-package name, the
 * server copies the corresponding query.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart  ::=  Query
 * ```
 */
export
type ServerPart = Query; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServerPart: $.ASN1Decoder<ServerPart> = _decode_Query;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export const _encode_ServerPart: $.ASN1Encoder<ServerPart> = _encode_Query;


/* eslint-enable */
