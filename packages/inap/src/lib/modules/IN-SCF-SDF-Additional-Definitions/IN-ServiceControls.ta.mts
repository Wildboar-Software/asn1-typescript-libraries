/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceControls, _decode_ServiceControls, _encode_ServiceControls } from "../DirectoryAbstractService/ServiceControls.ta.mjs";
// export { ServiceControls, _decode_ServiceControls, _encode_ServiceControls } from "../DirectoryAbstractService/ServiceControls.ta.mjs";


/**
 * @summary IN_ServiceControls
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ServiceControls  ::= 
 *   ServiceControls
 *     (WITH COMPONENTS {
 *        ...,
 *        timeLimit           ABSENT,
 *        sizeLimit           ABSENT,
 *        scopeOfReferral     ABSENT,
 *        attributeSizeLimit  ABSENT
 *      })
 * ```
 */
export
type IN_ServiceControls = ServiceControls; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ServiceControls
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_ServiceControls: $.ASN1Decoder<IN_ServiceControls> = _decode_ServiceControls;

/**
 * @summary Encodes a(n) IN_ServiceControls into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ServiceControls, encoded as an ASN.1 Element.
 */
export const _encode_IN_ServiceControls: (value: IN_ServiceControls, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ServiceControls;


/* eslint-enable */
