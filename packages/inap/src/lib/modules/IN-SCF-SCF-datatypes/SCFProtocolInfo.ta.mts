/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../IN-SCF-SCF-datatypes/AgreementID.ta.mjs";
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

let _cached_decoder_for_SCFProtocolInfo: $.ASN1Decoder<SCFProtocolInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCFProtocolInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCFProtocolInfo (el: _Element): SCFProtocolInfo {
    if (!_cached_decoder_for_SCFProtocolInfo) { _cached_decoder_for_SCFProtocolInfo = _decode_AgreementID; }
    return _cached_decoder_for_SCFProtocolInfo(el);
}

let _cached_encoder_for_SCFProtocolInfo: $.ASN1Encoder<SCFProtocolInfo> | null = null;

/**
 * @summary Encodes a(n) SCFProtocolInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFProtocolInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SCFProtocolInfo (value: SCFProtocolInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCFProtocolInfo) { _cached_encoder_for_SCFProtocolInfo = _encode_AgreementID; }
    return _cached_encoder_for_SCFProtocolInfo(value, elGetter);
}


/* eslint-enable */
