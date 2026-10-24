/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DeleteEventAction_Response
 * @description
 *
 * Confirmed Result(+): count of candidates not deleted.
 *
 * [ISO 9506-1:2003 §20.3.1.2.1]
 * [ISO 9506-2:2003 §20.3.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventAction-Response  ::=  Unsigned32
 * ```
 */
export
type DeleteEventAction_Response = Unsigned32; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEventAction_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DeleteEventAction_Response: $.ASN1Decoder<DeleteEventAction_Response> = _decode_Unsigned32;

/**
 * @summary Encodes a(n) DeleteEventAction_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEventAction_Response, encoded as an ASN.1 Element.
 */
export const _encode_DeleteEventAction_Response: $.ASN1Encoder<DeleteEventAction_Response> = _encode_Unsigned32;


/* eslint-enable */
