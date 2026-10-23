/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExecuteArgument, _decode_ExecuteArgument, _encode_ExecuteArgument } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument.ta.mjs";
// export { ExecuteArgument, _decode_ExecuteArgument, _encode_ExecuteArgument } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument.ta.mjs";


/**
 * @summary IN_ExecuteArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ExecuteArgument  ::= 
 *   ExecuteArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          serviceControls  (IN-ServiceControls),
 *                          aliasedRDNs      ABSENT
 *                        })
 *      })
 * ```
 */
export
type IN_ExecuteArgument = ExecuteArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ExecuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_ExecuteArgument: $.ASN1Decoder<IN_ExecuteArgument> = _decode_ExecuteArgument;

/**
 * @summary Encodes a(n) IN_ExecuteArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ExecuteArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_ExecuteArgument: $.ASN1Encoder<IN_ExecuteArgument> = _encode_ExecuteArgument;


/* eslint-enable */
