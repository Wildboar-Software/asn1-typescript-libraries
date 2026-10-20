/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
// export { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary ReferralParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferralParameter  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {tryhere             [0]  AccessPointInformation,
 *                securityParameters  [1]  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
interface ReferralParameter_sequence {
    tryhere: AccessPointInformation;
    securityParameters?: OPTIONAL<SecurityParameters>;
}

export
type ReferralParameter = OPTIONALLY_PROTECTED<ReferralParameter_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("tryhere", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

let _cached_decoder_for_ReferralParameter: $.ASN1Decoder<ReferralParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReferralParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReferralParameter (el: _Element): ReferralParameter {
    if (!_cached_decoder_for_ReferralParameter) { _cached_decoder_for_ReferralParameter = _get_decoder_for_OPTIONALLY_PROTECTED<ReferralParameter_sequence>(function (el: _Element): ReferralParameter_sequence {
    let tryhere!: AccessPointInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "tryhere": (_el: _Element): void => { tryhere = $._decode_implicit<AccessPointInformation>(() => _decode_AccessPointInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return { tryhere, securityParameters };
}); }
    return _cached_decoder_for_ReferralParameter(el);
}

let _cached_encoder_for_ReferralParameter: $.ASN1Encoder<ReferralParameter> | null = null;

/**
 * @summary Encodes a(n) ReferralParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReferralParameter, encoded as an ASN.1 Element.
 */
export
function _encode_ReferralParameter (value: ReferralParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReferralParameter) { _cached_encoder_for_ReferralParameter = _get_encoder_for_OPTIONALLY_PROTECTED<ReferralParameter_sequence>(function (value: ReferralParameter_sequence, elGetter: $.ASN1Encoder<ReferralParameter_sequence>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessPointInformation, $.BER)(value.tryhere, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ReferralParameter(value, elGetter);
}


/* eslint-enable */
