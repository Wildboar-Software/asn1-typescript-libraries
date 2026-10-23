/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
// export { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";


/**
 * @summary IN_EntryInformationSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-EntryInformationSelection  ::= 
 *   EntryInformationSelection
 *     (WITH COMPONENTS {
 *        ...,
 *        infoTypes  (attributeTypesAndValues)
 *      })
 * ```
 */
export
type IN_EntryInformationSelection = EntryInformationSelection; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_EntryInformationSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_EntryInformationSelection: $.ASN1Decoder<IN_EntryInformationSelection> = _decode_EntryInformationSelection;

/**
 * @summary Encodes a(n) IN_EntryInformationSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_EntryInformationSelection, encoded as an ASN.1 Element.
 */
export const _encode_IN_EntryInformationSelection: (value: IN_EntryInformationSelection, elGetter: $.ASN1Encoder<any>) => _Element = _encode_EntryInformationSelection;


/* eslint-enable */
