/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ReceivedInformation, _decode_ReceivedInformation, _encode_ReceivedInformation } from "../IN-SCF-SCF-datatypes/ReceivedInformation.ta.mjs";
// export { ReceivedInformation, _decode_ReceivedInformation, _encode_ReceivedInformation } from "../IN-SCF-SCF-datatypes/ReceivedInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ProvideUserInformationResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideUserInformationResultArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {userInformation     [0]  ReceivedInformation,
 *                securityParameters  [1]  SecurityParameters OPTIONAL,
 *                extensions          [2]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type ProvideUserInformationResultArg = OPTIONALLY_PROTECTED<{ userInformation: OPTIONAL<ReceivedInformation>; securityParameters: SecurityParameters; extensions: Extensions }>; // DefinedType

let _cached_decoder_for_ProvideUserInformationResultArg: $.ASN1Decoder<ProvideUserInformationResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideUserInformationResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideUserInformationResultArg (el: _Element): ProvideUserInformationResultArg {
    if (!_cached_decoder_for_ProvideUserInformationResultArg) { _cached_decoder_for_ProvideUserInformationResultArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ userInformation: OPTIONAL<ReceivedInformation>; securityParameters: SecurityParameters; extensions: Extensions }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let userInformation!: ReceivedInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "userInformation": (_el: _Element): void => { userInformation = $._decode_implicit<ReceivedInformation>(() => _decode_ReceivedInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED(
        userInformation,
        securityParameters,
        extensions
    );
}); }
    return _cached_decoder_for_ProvideUserInformationResultArg(el);
}

let _cached_encoder_for_ProvideUserInformationResultArg: $.ASN1Encoder<ProvideUserInformationResultArg> | null = null;

/**
 * @summary Encodes a(n) ProvideUserInformationResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideUserInformationResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideUserInformationResultArg (value: ProvideUserInformationResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideUserInformationResultArg) { _cached_encoder_for_ProvideUserInformationResultArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ userInformation: OPTIONAL<ReceivedInformation>; securityParameters: SecurityParameters; extensions: Extensions }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReceivedInformation, $.BER)(value.userInformation, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER));
    }
    if (value.extensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_ProvideUserInformationResultArg(value, elGetter);
}


/* eslint-enable */
