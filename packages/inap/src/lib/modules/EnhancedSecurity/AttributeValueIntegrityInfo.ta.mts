/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { Signer, _decode_Signer, _encode_Signer } from "../EnhancedSecurity/Signer.ta.mjs";
// export { Signer, _decode_Signer, _encode_Signer } from "../EnhancedSecurity/Signer.ta.mjs";
import { AVIHash, _decode_AVIHash, _encode_AVIHash } from "../EnhancedSecurity/AVIHash.ta.mjs";
// export { AVIHash, _decode_AVIHash, _encode_AVIHash } from "../EnhancedSecurity/AVIHash.ta.mjs";


/**
 * @summary AttributeValueIntegrityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValueIntegrityInfo  ::= 
 *   SIGNED
 *     {SEQUENCE {signer   Signer OPTIONAL, -- Authority or data originators name
 *                aVIHash  AVIHash}}
 * ```
 */
export
type AttributeValueIntegrityInfo = SIGNED<{ signer: Signer; aVIHash: OPTIONAL<AVIHash> }>; // DefinedType

let _cached_decoder_for_AttributeValueIntegrityInfo: $.ASN1Decoder<AttributeValueIntegrityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueIntegrityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValueIntegrityInfo (el: _Element): AttributeValueIntegrityInfo {
    if (!_cached_decoder_for_AttributeValueIntegrityInfo) { _cached_decoder_for_AttributeValueIntegrityInfo = _get_decoder_for_SIGNED<{ signer: Signer; aVIHash: OPTIONAL<AVIHash> }>(function (el: _Element): SIGNED {
    let signer: OPTIONAL<Signer>;
    let aVIHash!: AVIHash;
    const callbacks: $.DecodingMap = {
        "signer": (_el: _Element): void => { signer = _decode_Signer(_el); },
        "aVIHash": (_el: _Element): void => { aVIHash = _decode_AVIHash(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        signer,
        aVIHash
    );
}); }
    return _cached_decoder_for_AttributeValueIntegrityInfo(el);
}

let _cached_encoder_for_AttributeValueIntegrityInfo: $.ASN1Encoder<AttributeValueIntegrityInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeValueIntegrityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueIntegrityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValueIntegrityInfo (value: AttributeValueIntegrityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValueIntegrityInfo) { _cached_encoder_for_AttributeValueIntegrityInfo = _get_encoder_for_SIGNED<{ signer: Signer; aVIHash: OPTIONAL<AVIHash> }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    if (value.signer !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Signer(value.signer, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_AVIHash(value.aVIHash, $.BER));
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_AttributeValueIntegrityInfo(value, elGetter);
}


/* eslint-enable */
