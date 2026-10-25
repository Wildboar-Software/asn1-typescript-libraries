/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GapCriteria, _decode_GapCriteria, _encode_GapCriteria } from "../IN-CS-1-Datatypes/GapCriteria.ta.mjs";
// export { GapCriteria, _decode_GapCriteria, _encode_GapCriteria } from "../IN-CS-1-Datatypes/GapCriteria.ta.mjs";
import { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-CS-1-Datatypes/GapIndicators.ta.mjs";
// export { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-CS-1-Datatypes/GapIndicators.ta.mjs";
import { ControlType, _decode_ControlType, _encode_ControlType, _enum_for_ControlType } from "../IN-CS-1-Datatypes/ControlType.ta.mjs";
// export { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_destinationOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, destinationOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../IN-CS-1-Datatypes/ControlType.ta.mjs";
import { type GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../IN-CS-1-Datatypes/GapTreatment.ta.mjs";
// export { GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../IN-CS-1-Datatypes/GapTreatment.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary CallGapArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallGapArg ::= SEQUENCE {
 *   gapCriteria    [0]  GapCriteria,
 *   gapIndicators  [1]  GapIndicators,
 *   controlType    [2]  ControlType OPTIONAL,
 *   gapTreatment   [3]  GapTreatment OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CallGapArg {
    /**
     * @summary `gapCriteria`.
     * @public
     * @readonly
     */
    readonly gapCriteria: GapCriteria;
    /**
     * @summary `gapIndicators`.
     * @public
     * @readonly
     */
    readonly gapIndicators: GapIndicators;
    /**
     * @summary `controlType`.
     * @public
     * @readonly
     */
    readonly controlType: OPTIONAL<ControlType>;
    /**
     * @summary `gapTreatment`.
     * @public
     * @readonly
     */
    readonly gapTreatment: OPTIONAL<GapTreatment>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gapCriteria: GapCriteria,
        gapIndicators: GapIndicators,
        controlType: OPTIONAL<ControlType>,
        gapTreatment: OPTIONAL<GapTreatment>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gapCriteria = gapCriteria;
        this.gapIndicators = gapIndicators;
        this.controlType = controlType;
        this.gapTreatment = gapTreatment;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallGapArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallGapArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallGapArg`.
     * @returns {CallGapArg}
     */
    public static _from_object (_o: { [_K in keyof (CallGapArg)]: (CallGapArg)[_K] }): CallGapArg {
        return new CallGapArg(_o.gapCriteria, _o.gapIndicators, _o.controlType, _o.gapTreatment, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `controlType`
         * @public
         * @static
         */

    public static _enum_for_controlType: typeof _enum_for_ControlType = _enum_for_ControlType;
}

/**
 * @summary The Leading Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallGapArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gapCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gapIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("controlType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gapTreatment", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallGapArg: $.ASN1Decoder<CallGapArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallGapArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallGapArg (el: _Element): CallGapArg {
    if (!_cached_decoder_for_CallGapArg) { _cached_decoder_for_CallGapArg = function (el: _Element): CallGapArg {
    let gapCriteria!: GapCriteria;
    let gapIndicators!: GapIndicators;
    let controlType: OPTIONAL<ControlType>;
    let gapTreatment: OPTIONAL<GapTreatment>;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gapCriteria": (_el: _Element): void => { gapCriteria = $._decode_explicit<GapCriteria>(() => _decode_GapCriteria)(_el); },
        "gapIndicators": (_el: _Element): void => { gapIndicators = $._decode_implicit<GapIndicators>(() => _decode_GapIndicators)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "gapTreatment": (_el: _Element): void => { gapTreatment = $._decode_explicit<GapTreatment>(() => _decode_GapTreatment)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallGapArg,
        _extension_additions_list_spec_for_CallGapArg,
        _root_component_type_list_2_spec_for_CallGapArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallGapArg(
        gapCriteria,
        gapIndicators,
        controlType,
        gapTreatment,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallGapArg(el);
}

let _cached_encoder_for_CallGapArg: $.ASN1Encoder<CallGapArg> | null = null;

/**
 * @summary Encodes a(n) CallGapArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallGapArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallGapArg (value: CallGapArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallGapArg) { _cached_encoder_for_CallGapArg = function (value: CallGapArg, elGetter: $.ASN1Encoder<CallGapArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_GapCriteria, $.BER)(value.gapCriteria, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GapIndicators, $.BER)(value.gapIndicators, $.BER);
    if (value.controlType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER);
    }
    if (value.gapTreatment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GapTreatment, $.BER)(value.gapTreatment, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallGapArg(value, elGetter);
}


/* eslint-enable */
