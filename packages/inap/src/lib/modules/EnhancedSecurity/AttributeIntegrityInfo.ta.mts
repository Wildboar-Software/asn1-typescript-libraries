/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { Scope, _decode_Scope, _encode_Scope } from "../EnhancedSecurity/Scope.ta.mjs";
// export { Scope, _decode_Scope, _encode_Scope } from "../EnhancedSecurity/Scope.ta.mjs";
import { Signer, _decode_Signer, _encode_Signer } from "../EnhancedSecurity/Signer.ta.mjs";
// export { Signer, _decode_Signer, _encode_Signer } from "../EnhancedSecurity/Signer.ta.mjs";
import { AttribsHash, _decode_AttribsHash, _encode_AttribsHash } from "../EnhancedSecurity/AttribsHash.ta.mjs";
// export { AttribsHash, _decode_AttribsHash, _encode_AttribsHash } from "../EnhancedSecurity/AttribsHash.ta.mjs";


/**
 * @summary AttributeIntegrityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeIntegrityInfo  ::= 
 *   SIGNED
 *     {SEQUENCE {scope        Scope, -- Identifies the attributes protected
 *                signer       Signer OPTIONAL, -- Authority or data originators name
 *                attribsHash  AttribsHash}}
 * ```
 */
export
type AttributeIntegrityInfo = SIGNED<{ scope: OPTIONAL<Scope>; signer: Signer; attribsHash: OPTIONAL<AttribsHash> }>; // DefinedType

let _cached_decoder_for_AttributeIntegrityInfo: $.ASN1Decoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeIntegrityInfo (el: _Element): AttributeIntegrityInfo {
    if (!_cached_decoder_for_AttributeIntegrityInfo) { _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<{ scope: OPTIONAL<Scope>; signer: Signer; attribsHash: OPTIONAL<AttribsHash> }>(function (el: _Element): SIGNED {
    let scope!: Scope;
    let signer: OPTIONAL<Signer>;
    let attribsHash!: AttribsHash;
    const callbacks: $.DecodingMap = {
        "scope": (_el: _Element): void => { scope = _decode_Scope(_el); },
        "signer": (_el: _Element): void => { signer = _decode_Signer(_el); },
        "attribsHash": (_el: _Element): void => { attribsHash = _decode_AttribsHash(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        scope,
        signer,
        attribsHash
    );
}); }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}

let _cached_encoder_for_AttributeIntegrityInfo: $.ASN1Encoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeIntegrityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeIntegrityInfo (value: AttributeIntegrityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeIntegrityInfo) { _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<{ scope: OPTIONAL<Scope>; signer: Signer; attribsHash: OPTIONAL<AttribsHash> }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Scope(value.scope, $.BER));
    if (value.signer !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Signer(value.signer, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_AttribsHash(value.attribsHash, $.BER));
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}


/* eslint-enable */
