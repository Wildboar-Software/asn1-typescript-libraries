/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
import { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS2-datatypes/ChargingParameters.ta.mjs";
// export { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS2-datatypes/ChargingParameters.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary EstablishChargingRecordArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishChargingRecordArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {[0]  SEQUENCE {userCredit          [0]  UserCredit OPTIONAL,
 *                     chargingParameters  [1]  ChargingParameters OPTIONAL,
 *                     reportExpected      [2]  BOOLEAN DEFAULT TRUE,
 *                     securityParameters  [3]  SecurityParameters OPTIONAL,
 *                     extensions
 *                       [4]  SEQUENCE OF
 *                              ExtensionField
 *                         OPTIONAL,
 *                     ...}}
 * ```
 */
export
type EstablishChargingRecordArg = OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: ExtensionField[] }>; // DefinedType

let _cached_decoder_for_EstablishChargingRecordArg: $.ASN1Decoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishChargingRecordArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishChargingRecordArg (el: _Element): EstablishChargingRecordArg {
    if (!_cached_decoder_for_EstablishChargingRecordArg) { _cached_decoder_for_EstablishChargingRecordArg = _get_decoder_for_OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: ExtensionField[] }>($._decode_implicit<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: ExtensionField[] }>(() => function (el: _Element): OPTIONALLY_PROTECTED {
    let userCredit: OPTIONAL<UserCredit>;
    let chargingParameters: OPTIONAL<ChargingParameters>;
    let reportExpected: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_reportExpected;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userCredit": (_el: _Element): void => { userCredit = $._decode_explicit<UserCredit>(() => _decode_UserCredit)(_el); },
        "chargingParameters": (_el: _Element): void => { chargingParameters = $._decode_implicit<ChargingParameters>(() => _decode_ChargingParameters)(_el); },
        "reportExpected": (_el: _Element): void => { reportExpected = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        userCredit,
        chargingParameters,
        reportExpected,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
})); }
    return _cached_decoder_for_EstablishChargingRecordArg(el);
}

let _cached_encoder_for_EstablishChargingRecordArg: $.ASN1Encoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Encodes a(n) EstablishChargingRecordArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishChargingRecordArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishChargingRecordArg (value: EstablishChargingRecordArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishChargingRecordArg) { _cached_encoder_for_EstablishChargingRecordArg = _get_encoder_for_OPTIONALLY_PROTECTED<{ userCredit: UserCredit; chargingParameters: ChargingParameters; reportExpected: BOOLEAN; securityParameters: SecurityParameters; extensions: ExtensionField[] }>($._encode_implicit(_TagClass.context, 0, () => function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userCredit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_UserCredit, $.BER)(value.userCredit, $.BER);
    }
    if (value.chargingParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ChargingParameters, $.BER)(value.chargingParameters, $.BER);
    }
    if (value.reportExpected !== undefined && !$.deepEq(value.reportExpected, OPTIONALLY_PROTECTED._default_value_for_reportExpected)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.reportExpected, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}, $.BER)); }
    return _cached_encoder_for_EstablishChargingRecordArg(value, elGetter);
}


/* eslint-enable */
