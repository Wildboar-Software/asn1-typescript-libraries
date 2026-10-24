/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS2-datatypes/UserCredit.ta.mjs";
import { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS2-datatypes/ChargingParameters.ta.mjs";
// export { ChargingParameters, _decode_ChargingParameters, _encode_ChargingParameters } from "../IN-CS2-datatypes/ChargingParameters.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary EstablishChargingRecordArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishChargingRecordArg-Type ::=
 * SEQUENCE {
 *   userCredit [0] UserCredit OPTIONAL,
 *   chargingParameters [1] ChargingParameters OPTIONAL,
 *   reportExpected [2] BOOLEAN DEFAULT TRUE,
 *   securityParameters [3] SecurityParameters OPTIONAL,
 *   extensions [4] SEQUENCE OF ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EstablishChargingRecordArg_Type {
    /**
     * @summary `userCredit`.
     * @public
     * @readonly
     */
    readonly userCredit: OPTIONAL<UserCredit>;
    /**
     * @summary `chargingParameters`.
     * @public
     * @readonly
     */
    readonly chargingParameters: OPTIONAL<ChargingParameters>;
    /**
     * @summary `reportExpected`.
     * @public
     * @readonly
     */
    readonly reportExpected: OPTIONAL<BOOLEAN>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userCredit?: OPTIONAL<UserCredit>,
        chargingParameters?: OPTIONAL<ChargingParameters>,
        reportExpected?: OPTIONAL<BOOLEAN>,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userCredit = userCredit;
        this.chargingParameters = chargingParameters;
        this.reportExpected = reportExpected;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EstablishChargingRecordArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `EstablishChargingRecordArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishChargingRecordArg_Type`.
     * @returns {EstablishChargingRecordArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (EstablishChargingRecordArg_Type)]: (EstablishChargingRecordArg_Type)[_K] }): EstablishChargingRecordArg_Type {
        return new EstablishChargingRecordArg_Type(_o.userCredit, _o.chargingParameters, _o.reportExpected, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `reportExpected`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reportExpected () { return true; }
}

/**
 * @summary The Leading Root Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("userCredit", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingParameters", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reportExpected", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EstablishChargingRecordArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EstablishChargingRecordArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EstablishChargingRecordArg_Type: $.ASN1Decoder<EstablishChargingRecordArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishChargingRecordArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishChargingRecordArg_Type (el: _Element): EstablishChargingRecordArg_Type {
    if (!_cached_decoder_for_EstablishChargingRecordArg_Type) { _cached_decoder_for_EstablishChargingRecordArg_Type = function (el: _Element): EstablishChargingRecordArg_Type {
    let userCredit: OPTIONAL<UserCredit>;
    let chargingParameters: OPTIONAL<ChargingParameters>;
    let reportExpected: OPTIONAL<BOOLEAN> = EstablishChargingRecordArg_Type._default_value_for_reportExpected;
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
        _root_component_type_list_1_spec_for_EstablishChargingRecordArg_Type,
        _extension_additions_list_spec_for_EstablishChargingRecordArg_Type,
        _root_component_type_list_2_spec_for_EstablishChargingRecordArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EstablishChargingRecordArg_Type(
        userCredit,
        chargingParameters,
        reportExpected,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EstablishChargingRecordArg_Type(el);
}

let _cached_encoder_for_EstablishChargingRecordArg_Type: $.ASN1Encoder<EstablishChargingRecordArg_Type> | null = null;

/**
 * @summary Encodes a(n) EstablishChargingRecordArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishChargingRecordArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishChargingRecordArg_Type (value: EstablishChargingRecordArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishChargingRecordArg_Type) { _cached_encoder_for_EstablishChargingRecordArg_Type = function (value: EstablishChargingRecordArg_Type, elGetter: $.ASN1Encoder<EstablishChargingRecordArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userCredit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_UserCredit, $.BER)(value.userCredit, $.BER);
    }
    if (value.chargingParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ChargingParameters, $.BER)(value.chargingParameters, $.BER);
    }
    if (value.reportExpected !== undefined && !$.deepEq(value.reportExpected, EstablishChargingRecordArg_Type._default_value_for_reportExpected)) {
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
}; }
    return _cached_encoder_for_EstablishChargingRecordArg_Type(value, elGetter);
}


/* eslint-enable */
