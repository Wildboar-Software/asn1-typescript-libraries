/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OtherInformation_Item, _decode_OtherInformation_Item, _encode_OtherInformation_Item } from "../Z39-50-APDU-2001/OtherInformation-Item.ta.mjs";


/**
 * @summary OtherInformation
 * @description
 *
 * Additional information not specified by the standard. The parameter
 * appears on every APDU, and its use is valid only when version 3 is
 * in force. On Init, prefer `userInformationField` with UserInfo-1,
 * which has this same structure, because the version is not yet
 * known (USR.2). Each item may omit its category. No category values
 * are known to have been registered (comment 5). When encapsulation
 * is in effect, a nested APDU is carried as `externallyDefinedInfo`
 * with object identifier `1.2.840.10003.2.1`. §4.3, comment 5, USR.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherInformation  ::=  [201] IMPLICIT SEQUENCE OF SEQUENCE {
 *     category    [1] IMPLICIT InfoCategory OPTIONAL,
 *     information CHOICE {
 *         characterInfo         [2] IMPLICIT InternationalString,
 *         binaryInfo            [3] IMPLICIT OCTET STRING,
 *         externallyDefinedInfo [4] IMPLICIT EXTERNAL,
 *         oid                   [5] IMPLICIT OBJECT IDENTIFIER
 *     }
 * }
 * ```
 */
export
type OtherInformation = OtherInformation_Item[]; // SequenceOfType

let _cached_decoder_for_OtherInformation: $.ASN1Decoder<OtherInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherInformation (el: _Element): OtherInformation {
    if (!_cached_decoder_for_OtherInformation) { _cached_decoder_for_OtherInformation = $._decode_implicit<OtherInformation>(() => $._decodeSequenceOf<OtherInformation_Item>(() => _decode_OtherInformation_Item)); }
    return _cached_decoder_for_OtherInformation(el);
}

let _cached_encoder_for_OtherInformation: $.ASN1Encoder<OtherInformation> | null = null;

/**
 * @summary Encodes a(n) OtherInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInformation, encoded as an ASN.1 Element.
 */
export
function _encode_OtherInformation (value: OtherInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherInformation) { _cached_encoder_for_OtherInformation = $._encode_implicit(_TagClass.context, 201, () => $._encode_implicit(_TagClass.context, 201, () => $._encodeSequenceOf<OtherInformation_Item>(() => _encode_OtherInformation_Item, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_OtherInformation(value, elGetter);
}


/* eslint-enable */
