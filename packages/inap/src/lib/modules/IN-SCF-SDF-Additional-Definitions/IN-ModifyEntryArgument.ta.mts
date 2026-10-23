/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";
// export { ModifyEntryArgument, _decode_ModifyEntryArgument, _encode_ModifyEntryArgument } from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";


/**
 * @summary IN_ModifyEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ModifyEntryArgument  ::= 
 *   ModifyEntryArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          selection        (IN-EntryInformationSelection),
 *                          serviceControls  (IN-ServiceControls),
 *                          aliasedRDNs      ABSENT
 *                        })
 *      })
 * ```
 */
export
type IN_ModifyEntryArgument = ModifyEntryArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ModifyEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_ModifyEntryArgument: $.ASN1Decoder<IN_ModifyEntryArgument> = _decode_ModifyEntryArgument;

/**
 * @summary Encodes a(n) IN_ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_ModifyEntryArgument: (value: IN_ModifyEntryArgument, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ModifyEntryArgument;


/* eslint-enable */
