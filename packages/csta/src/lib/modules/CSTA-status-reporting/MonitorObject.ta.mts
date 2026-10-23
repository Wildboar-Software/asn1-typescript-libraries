/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { CSTAObject, _decode_CSTAObject, _encode_CSTAObject } from "../CSTA-switching-function-objects/CSTAObject.ta.mjs";



/**
 * @summary MonitorObject
 * @description
 *
 * What Monitor Start is placed on: a call/connection or a device (alias of
 * `CSTAObject`). ECMA-269 §6.6.2.2, Table 6-7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorObject  ::=  CSTAObject
 * ```
 */
export
type MonitorObject = CSTAObject; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MonitorObject: $.ASN1Decoder<MonitorObject> = _decode_CSTAObject;

/**
 * @summary Encodes a(n) MonitorObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorObject, encoded as an ASN.1 Element.
 */
export const _encode_MonitorObject: $.ASN1Encoder<MonitorObject> = _encode_CSTAObject;


/* eslint-enable */
