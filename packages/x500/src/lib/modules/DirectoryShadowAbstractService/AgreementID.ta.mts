/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
/**
 * @summary AgreementID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AgreementID  ::=  OperationalBindingID
 * ```
 */
export type AgreementID = OperationalBindingID; // DefinedType

let _cached_decoder_for_AgreementID: $.ASN1Decoder<AgreementID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgreementID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AgreementID} The decoded data structure.
 */
export function _decode_AgreementID(el: _Element): AgreementID {
    if (!_cached_decoder_for_AgreementID) {
        _cached_decoder_for_AgreementID = _decode_OperationalBindingID;
    }
    return _cached_decoder_for_AgreementID(el);
}

let _cached_encoder_for_AgreementID: $.ASN1Encoder<AgreementID> | null = null;

/**
 * @summary Encodes a(n) AgreementID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgreementID, encoded as an ASN.1 Element.
 */
export function _encode_AgreementID(
    value: AgreementID,
    elGetter: $.ASN1Encoder<AgreementID>
): _Element {
    if (!_cached_encoder_for_AgreementID) {
        _cached_encoder_for_AgreementID = _encode_OperationalBindingID;
    }
    return _cached_encoder_for_AgreementID(value, elGetter);
}


/* eslint-enable */
