/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SRFGapCriteria, _decode_SRFGapCriteria, _encode_SRFGapCriteria } from "../IN-CS3-SCF-SRF-datatypes/SRFGapCriteria.ta.mjs";
// export { SRFGapCriteria, _decode_SRFGapCriteria, _encode_SRFGapCriteria } from "../IN-CS3-SCF-SRF-datatypes/SRFGapCriteria.ta.mjs";
import { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-CS3-SSF-SCF-datatypes/GapIndicators.ta.mjs";
// export { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-CS3-SSF-SCF-datatypes/GapIndicators.ta.mjs";
import { ControlType, _decode_ControlType, _encode_ControlType, _enum_for_ControlType } from "../IN-CS3-SSF-SCF-datatypes/ControlType.ta.mjs";
// export { ControlType, _enum_for_ControlType, ControlType_sCPOverloaded /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverloaded /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_manuallyInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, manuallyInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlType_destinationOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, destinationOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlType, _encode_ControlType } from "../IN-CS3-SSF-SCF-datatypes/ControlType.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary SRFCallGapArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRFCallGapArg ::= SEQUENCE {
 *   sRFgapCriteria  [0]  SRFGapCriteria,
 *   gapIndicators   [1]  GapIndicators,
 *   controlType     [2]  ControlType OPTIONAL,
 *   ...,
 *   ...,
 *   extensions      [30]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SRFCallGapArg {
    /**
     * @summary `sRFgapCriteria`.
     * @public
     * @readonly
     */
    readonly sRFgapCriteria: SRFGapCriteria;
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        sRFgapCriteria: SRFGapCriteria,
        gapIndicators: GapIndicators,
        controlType?: OPTIONAL<ControlType>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.sRFgapCriteria = sRFgapCriteria;
        this.gapIndicators = gapIndicators;
        this.controlType = controlType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a SRFCallGapArg
     * @description
     * 
     * This takes an `object` and converts it to a `SRFCallGapArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SRFCallGapArg`.
     * @returns {SRFCallGapArg}
     */
    public static _from_object (_o: { [_K in keyof (SRFCallGapArg)]: (SRFCallGapArg)[_K] }): SRFCallGapArg {
        return new SRFCallGapArg(_o.sRFgapCriteria, _o.gapIndicators, _o.controlType, _o._unrecognizedExtensionsList, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `controlType`
         * @public
         * @static
         */

    public static _enum_for_controlType = _enum_for_ControlType;
}

/**
 * @summary The Leading Root Component Types of SRFCallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SRFCallGapArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sRFgapCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gapIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("controlType", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SRFCallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SRFCallGapArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of SRFCallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SRFCallGapArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SRFCallGapArg: $.ASN1Decoder<SRFCallGapArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SRFCallGapArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SRFCallGapArg (el: _Element): SRFCallGapArg {
    if (!_cached_decoder_for_SRFCallGapArg) { _cached_decoder_for_SRFCallGapArg = function (el: _Element): SRFCallGapArg {
    let sRFgapCriteria!: SRFGapCriteria;
    let gapIndicators!: GapIndicators;
    let controlType: OPTIONAL<ControlType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "sRFgapCriteria": (_el: _Element): void => { sRFgapCriteria = $._decode_explicit<SRFGapCriteria>(() => _decode_SRFGapCriteria)(_el); },
        "gapIndicators": (_el: _Element): void => { gapIndicators = $._decode_implicit<GapIndicators>(() => _decode_GapIndicators)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SRFCallGapArg,
        _extension_additions_list_spec_for_SRFCallGapArg,
        _root_component_type_list_2_spec_for_SRFCallGapArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SRFCallGapArg(
        sRFgapCriteria,
        gapIndicators,
        controlType,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_SRFCallGapArg(el);
}

let _cached_encoder_for_SRFCallGapArg: $.ASN1Encoder<SRFCallGapArg> | null = null;

/**
 * @summary Encodes a(n) SRFCallGapArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SRFCallGapArg, encoded as an ASN.1 Element.
 */
export
function _encode_SRFCallGapArg (value: SRFCallGapArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SRFCallGapArg) { _cached_encoder_for_SRFCallGapArg = function (value: SRFCallGapArg, elGetter: $.ASN1Encoder<SRFCallGapArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SRFGapCriteria, $.BER)(value.sRFgapCriteria, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GapIndicators, $.BER)(value.gapIndicators, $.BER);
    if (value.controlType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SRFCallGapArg(value, elGetter);
}


/* eslint-enable */
