/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlternateTrunkGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateTrunkGroup  ::=  [5] IMPLICIT OCTET STRING(SIZE(5))
 * ```
 */
export
type AlternateTrunkGroup = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AlternateTrunkGroup: $.ASN1Decoder<AlternateTrunkGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateTrunkGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateTrunkGroup (el: _Element): AlternateTrunkGroup {
    if (!_cached_decoder_for_AlternateTrunkGroup) { _cached_decoder_for_AlternateTrunkGroup = $._decode_implicit<AlternateTrunkGroup>(() => $._decodeOctetString); }
    return _cached_decoder_for_AlternateTrunkGroup(el);
}

let _cached_encoder_for_AlternateTrunkGroup: $.ASN1Encoder<AlternateTrunkGroup> | null = null;

/**
 * @summary Encodes a(n) AlternateTrunkGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateTrunkGroup, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateTrunkGroup (value: AlternateTrunkGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateTrunkGroup) { _cached_encoder_for_AlternateTrunkGroup = $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_AlternateTrunkGroup(value, elGetter);
}


/* eslint-enable */
