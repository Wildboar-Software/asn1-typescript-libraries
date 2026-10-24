/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TFCcriteria, _decode_TFCcriteria, _encode_TFCcriteria } from "../IN-SCF-SDF-datatypes/TFCcriteria.ta.mjs";
// export { TFCcriteria, _decode_TFCcriteria, _encode_TFCcriteria } from "../IN-SCF-SDF-datatypes/TFCcriteria.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../IN-SSF-SCF-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-SSF-SCF-datatypes/Duration.ta.mjs";
import { ControlType, _decode_ControlType, _encode_ControlType, _enum_for_ControlType } from "../IN-SSF-SCF-datatypes/ControlType.ta.mjs";
// export { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_destinationOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, destinationOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../IN-SSF-SCF-datatypes/ControlType.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary TFCArgument_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCArgument-Type ::=
 * SEQUENCE {
 *   tfcCriteria [0] TFCcriteria,
 *   duration [1] IMPLICIT Duration,
 *   controlType [2] IMPLICIT ControlType,
 *   security [3] IMPLICIT SecurityParameters,
 *   wasChained [4] IMPLICIT BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TFCArgument_Type {
    /**
     * @summary `tfcCriteria`.
     * @public
     * @readonly
     */
    readonly tfcCriteria: TFCcriteria;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: Duration;
    /**
     * @summary `controlType`.
     * @public
     * @readonly
     */
    readonly controlType: ControlType;
    /**
     * @summary `security`.
     * @public
     * @readonly
     */
    readonly security: SecurityParameters;
    /**
     * @summary `wasChained`.
     * @public
     * @readonly
     */
    readonly wasChained: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tfcCriteria: TFCcriteria,
        duration: Duration,
        controlType: ControlType,
        security: SecurityParameters,
        wasChained?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tfcCriteria = tfcCriteria;
        this.duration = duration;
        this.controlType = controlType;
        this.security = security;
        this.wasChained = wasChained;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TFCArgument_Type
     * @description
     * 
     * This takes an `object` and converts it to a `TFCArgument_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TFCArgument_Type`.
     * @returns {TFCArgument_Type}
     */
    public static _from_object (_o: { [_K in keyof (TFCArgument_Type)]: (TFCArgument_Type)[_K] }): TFCArgument_Type {
        return new TFCArgument_Type(_o.tfcCriteria, _o.duration, _o.controlType, _o.security, _o.wasChained, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `wasChained`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_wasChained () { return false; }        /**
         * @summary The enum used as the type of the component `controlType`
         * @public
         * @static
         */

    public static _enum_for_controlType = _enum_for_ControlType;
}

/**
 * @summary The Leading Root Component Types of TFCArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TFCArgument_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("tfcCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("controlType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("security", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("wasChained", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TFCArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TFCArgument_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TFCArgument_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TFCArgument_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TFCArgument_Type: $.ASN1Decoder<TFCArgument_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCArgument_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCArgument_Type (el: _Element): TFCArgument_Type {
    if (!_cached_decoder_for_TFCArgument_Type) { _cached_decoder_for_TFCArgument_Type = function (el: _Element): TFCArgument_Type {
    let tfcCriteria!: TFCcriteria;
    let duration!: Duration;
    let controlType!: ControlType;
    let security!: SecurityParameters;
    let wasChained: OPTIONAL<BOOLEAN> = TFCArgument_Type._default_value_for_wasChained;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tfcCriteria": (_el: _Element): void => { tfcCriteria = $._decode_explicit<TFCcriteria>(() => _decode_TFCcriteria)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "security": (_el: _Element): void => { security = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "wasChained": (_el: _Element): void => { wasChained = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TFCArgument_Type,
        _extension_additions_list_spec_for_TFCArgument_Type,
        _root_component_type_list_2_spec_for_TFCArgument_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TFCArgument_Type(
        tfcCriteria,
        duration,
        controlType,
        security,
        wasChained,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TFCArgument_Type(el);
}

let _cached_encoder_for_TFCArgument_Type: $.ASN1Encoder<TFCArgument_Type> | null = null;

/**
 * @summary Encodes a(n) TFCArgument_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCArgument_Type, encoded as an ASN.1 Element.
 */
export
function _encode_TFCArgument_Type (value: TFCArgument_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCArgument_Type) { _cached_encoder_for_TFCArgument_Type = function (value: TFCArgument_Type, elGetter: $.ASN1Encoder<TFCArgument_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TFCcriteria, $.BER)(value.tfcCriteria, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Duration, $.BER)(value.duration, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SecurityParameters, $.BER)(value.security, $.BER);
    if (value.wasChained !== undefined && !$.deepEq(value.wasChained, TFCArgument_Type._default_value_for_wasChained)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.wasChained, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TFCArgument_Type(value, elGetter);
}


/* eslint-enable */
