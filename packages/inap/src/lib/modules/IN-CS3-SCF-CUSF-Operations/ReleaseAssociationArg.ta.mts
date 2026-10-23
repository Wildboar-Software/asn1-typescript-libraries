/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary ReleaseAssociationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseAssociationArg  ::= 
 *   Cause
 * ```
 */
export
type ReleaseAssociationArg = Cause; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseAssociationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReleaseAssociationArg: $.ASN1Decoder<ReleaseAssociationArg> = _decode_Cause;

/**
 * @summary Encodes a(n) ReleaseAssociationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseAssociationArg, encoded as an ASN.1 Element.
 */
export const _encode_ReleaseAssociationArg: (value: ReleaseAssociationArg, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Cause;


/* eslint-enable */
