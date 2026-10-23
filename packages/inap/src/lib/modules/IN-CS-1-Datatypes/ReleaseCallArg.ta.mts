/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-Datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-Datatypes/Cause.ta.mjs";


/**
 * @summary ReleaseCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg  ::=  Cause
 * ```
 */
export
type ReleaseCallArg = Cause; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReleaseCallArg: $.ASN1Decoder<ReleaseCallArg> = _decode_Cause;

/**
 * @summary Encodes a(n) ReleaseCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg, encoded as an ASN.1 Element.
 */
export const _encode_ReleaseCallArg: (value: ReleaseCallArg, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Cause;


/* eslint-enable */
