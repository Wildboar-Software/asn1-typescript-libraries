/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateListContent,
    _decode_CertificateListContent,
    _encode_CertificateListContent,
} from "../AuthenticationFramework/CertificateListContent.ta.mjs";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta.mjs";
/**
 * @summary CertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateList  ::=  SIGNED{CertificateListContent}
 * ```
 */
export type CertificateList = SIGNED<CertificateListContent>; // DefinedType

let _cached_decoder_for_CertificateList: $.ASN1Decoder<CertificateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateList} The decoded data structure.
 */
export function _decode_CertificateList(el: _Element): CertificateList {
    if (!_cached_decoder_for_CertificateList) {
        _cached_decoder_for_CertificateList = _get_decoder_for_SIGNED<CertificateListContent>(
            _decode_CertificateListContent
        );
    }
    return _cached_decoder_for_CertificateList(el);
}

let _cached_encoder_for_CertificateList: $.ASN1Encoder<CertificateList> | null = null;

/**
 * @summary Encodes a(n) CertificateList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateList, encoded as an ASN.1 Element.
 */
export function _encode_CertificateList(
    value: CertificateList,
    elGetter: $.ASN1Encoder<CertificateList>
): _Element {
    if (!_cached_encoder_for_CertificateList) {
        _cached_encoder_for_CertificateList = _get_encoder_for_SIGNED<CertificateListContent>(
            _encode_CertificateListContent
        );
    }
    return _cached_encoder_for_CertificateList(value, elGetter);
}


/* eslint-enable */
