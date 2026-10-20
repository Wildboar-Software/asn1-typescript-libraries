/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
// export { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
import { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../BasicAccessControl/AttributeTypeAndValue.ta.mjs";
// export { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../BasicAccessControl/AttributeTypeAndValue.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { SecurityLabel, _decode_SecurityLabel, _encode_SecurityLabel } from "../EnhancedSecurity/SecurityLabel.ta.mjs";
// export { SecurityLabel, _decode_SecurityLabel, _encode_SecurityLabel } from "../EnhancedSecurity/SecurityLabel.ta.mjs";


/**
 * @summary SignedSecurityLabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignedSecurityLabel  ::= 
 *   SIGNED
 *     {SEQUENCE {attHash        HASH{AttributeTypeAndValue},
 *                issuer         Name OPTIONAL, -- name of labelling authority
 *                keyIdentifier  KeyIdentifier OPTIONAL,
 *                securityLabel  SecurityLabel}}
 * ```
 */
export
type SignedSecurityLabel = SIGNED<{ attHash: OPTIONAL<HASH<AttributeTypeAndValue>>; issuer: Name; keyIdentifier: KeyIdentifier; securityLabel: OPTIONAL<SecurityLabel> }>; // DefinedType

let _cached_decoder_for_SignedSecurityLabel: $.ASN1Decoder<SignedSecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedSecurityLabel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignedSecurityLabel (el: _Element): SignedSecurityLabel {
    if (!_cached_decoder_for_SignedSecurityLabel) { _cached_decoder_for_SignedSecurityLabel = _get_decoder_for_SIGNED<{ attHash: OPTIONAL<HASH<AttributeTypeAndValue>>; issuer: Name; keyIdentifier: KeyIdentifier; securityLabel: OPTIONAL<SecurityLabel> }>(function (el: _Element): SIGNED {
    let attHash!: HASH<AttributeTypeAndValue>;
    let issuer: OPTIONAL<Name>;
    let keyIdentifier: OPTIONAL<KeyIdentifier>;
    let securityLabel!: SecurityLabel;
    const callbacks: $.DecodingMap = {
        "attHash": (_el: _Element): void => { attHash = _get_decoder_for_HASH<AttributeTypeAndValue>(_decode_AttributeTypeAndValue)(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_Name(_el); },
        "keyIdentifier": (_el: _Element): void => { keyIdentifier = _decode_KeyIdentifier(_el); },
        "securityLabel": (_el: _Element): void => { securityLabel = _decode_SecurityLabel(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        undefined,
    );
    return new SIGNED(
        attHash,
        issuer,
        keyIdentifier,
        securityLabel
    );
}); }
    return _cached_decoder_for_SignedSecurityLabel(el);
}

let _cached_encoder_for_SignedSecurityLabel: $.ASN1Encoder<SignedSecurityLabel> | null = null;

/**
 * @summary Encodes a(n) SignedSecurityLabel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedSecurityLabel, encoded as an ASN.1 Element.
 */
export
function _encode_SignedSecurityLabel (value: SignedSecurityLabel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignedSecurityLabel) { _cached_encoder_for_SignedSecurityLabel = _get_encoder_for_SIGNED<{ attHash: OPTIONAL<HASH<AttributeTypeAndValue>>; issuer: Name; keyIdentifier: KeyIdentifier; securityLabel: OPTIONAL<SecurityLabel> }>(function (value: SIGNED, elGetter: $.ASN1Encoder<SIGNED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _get_encoder_for_HASH<AttributeTypeAndValue>(_encode_AttributeTypeAndValue)(value.attHash, $.BER));
    if (value.issuer !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.issuer, $.BER));
    }
    if (value.keyIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_KeyIdentifier(value.keyIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_SecurityLabel(value.securityLabel, $.BER));
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_SignedSecurityLabel(value, elGetter);
}


/* eslint-enable */
