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
import { TFCcriteria, _decode_TFCcriteria, _encode_TFCcriteria } from "../IN-CS3-SCF-SDF-datatypes/TFCcriteria.ta.mjs";
// export { TFCcriteria, _decode_TFCcriteria, _encode_TFCcriteria } from "../IN-CS3-SCF-SDF-datatypes/TFCcriteria.ta.mjs";
import { Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
import { ControlType, _decode_ControlType, _encode_ControlType } from "../IN-CS3-SSF-SCF-datatypes/ControlType.ta.mjs";
// export { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_destinationOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, destinationOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../IN-CS3-SSF-SCF-datatypes/ControlType.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary TFCArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {tfcCriteria  [0]  TFCcriteria,
 *                duration     [1] IMPLICIT Duration,
 *                controlType  [2] IMPLICIT ControlType,
 *                security     [3] IMPLICIT SecurityParameters,
 *                wasChained   [4] IMPLICIT BOOLEAN DEFAULT FALSE,
 *                ...,
 *                ...}}
 * ```
 */
export
type TFCArgument = OPTIONALLY_PROTECTED<{ tfcCriteria: OPTIONAL<TFCcriteria>; duration: OPTIONAL<Duration>; controlType: OPTIONAL<ControlType>; security: OPTIONAL<SecurityParameters>; wasChained: BOOLEAN }>; // DefinedType

let _cached_decoder_for_TFCArgument: $.ASN1Decoder<TFCArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCArgument (el: _Element): TFCArgument {
    if (!_cached_decoder_for_TFCArgument) { _cached_decoder_for_TFCArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ tfcCriteria: OPTIONAL<TFCcriteria>; duration: OPTIONAL<Duration>; controlType: OPTIONAL<ControlType>; security: OPTIONAL<SecurityParameters>; wasChained: BOOLEAN }>(function (el: _Element): OPTIONALLY_PROTECTED {
    let tfcCriteria!: TFCcriteria;
    let duration!: Duration;
    let controlType!: ControlType;
    let security!: SecurityParameters;
    let wasChained: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_wasChained;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tfcCriteria": (_el: _Element): void => { tfcCriteria = $._decode_explicit<TFCcriteria>(() => _decode_TFCcriteria)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "security": (_el: _Element): void => { security = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "wasChained": (_el: _Element): void => { wasChained = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OPTIONALLY_PROTECTED(
        tfcCriteria,
        duration,
        controlType,
        security,
        wasChained,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_TFCArgument(el);
}

let _cached_encoder_for_TFCArgument: $.ASN1Encoder<TFCArgument> | null = null;

/**
 * @summary Encodes a(n) TFCArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCArgument, encoded as an ASN.1 Element.
 */
export
function _encode_TFCArgument (value: TFCArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCArgument) { _cached_encoder_for_TFCArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ tfcCriteria: OPTIONAL<TFCcriteria>; duration: OPTIONAL<Duration>; controlType: OPTIONAL<ControlType>; security: OPTIONAL<SecurityParameters>; wasChained: BOOLEAN }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TFCcriteria, $.BER)(value.tfcCriteria, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Duration, $.BER)(value.duration, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SecurityParameters, $.BER)(value.security, $.BER);
    if (value.wasChained !== undefined && !$.deepEq(value.wasChained, OPTIONALLY_PROTECTED._default_value_for_wasChained)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.wasChained, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_TFCArgument(value, elGetter);
}


/* eslint-enable */
