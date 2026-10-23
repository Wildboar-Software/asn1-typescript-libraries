/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DirectoryAbstractService/SearchArgument.ta.mjs";
// export { SearchArgument, _decode_SearchArgument, _encode_SearchArgument } from "../DirectoryAbstractService/SearchArgument.ta.mjs";


/**
 * @summary IN_SearchArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-SearchArgument  ::= 
 *   SearchArgument
 *     ((WITH COMPONENTS {
 *         ...,
 *         toBeProtected  (WITH COMPONENTS {
 *                           ...,
 *                           searchAliases    (TRUE),
 *                           selection        (IN-EntryInformationSelection),
 *                           pagedResults     ABSENT,
 *                           extendedFilter   ABSENT,
 *                           serviceControls  (IN-ServiceControls),
 *                           aliasedRDNs      ABSENT
 *                         })
 *       }))
 * ```
 */
export
type IN_SearchArgument = SearchArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_SearchArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_SearchArgument: $.ASN1Decoder<IN_SearchArgument> = _decode_SearchArgument;

/**
 * @summary Encodes a(n) IN_SearchArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_SearchArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_SearchArgument: (value: IN_SearchArgument, elGetter: $.ASN1Encoder<any>) => _Element = _encode_SearchArgument;


/* eslint-enable */
