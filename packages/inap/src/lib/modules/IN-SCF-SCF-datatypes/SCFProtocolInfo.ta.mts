/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";


/**
 * @summary SCFProtocolInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFProtocolInfo  ::=  AgreementID
 * ```
 */
export
type SCFProtocolInfo = AgreementID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SCFProtocolInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SCFProtocolInfo: $.ASN1Decoder<SCFProtocolInfo> = _decode_AgreementID;

/**
 * @summary Encodes a(n) SCFProtocolInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFProtocolInfo, encoded as an ASN.1 Element.
 */
export const _encode_SCFProtocolInfo: $.ASN1Encoder<SCFProtocolInfo> = _encode_AgreementID;


/* eslint-enable */
