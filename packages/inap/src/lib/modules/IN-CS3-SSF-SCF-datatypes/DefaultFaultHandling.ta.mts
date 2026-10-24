/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultFaultHandling_action, _decode_DefaultFaultHandling_action, _encode_DefaultFaultHandling_action, _enum_for_DefaultFaultHandling_action } from "../IN-CS3-SSF-SCF-datatypes/DefaultFaultHandling-action.ta.mjs";
// export { DefaultFaultHandling_action, _enum_for_DefaultFaultHandling_action, DefaultFaultHandling_action_resumeCallProcessing /* IMPORTED_LONG_ENUMERATION_ITEM */, resumeCallProcessing /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultFaultHandling_action_releaseCall /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultFaultHandling_action, _encode_DefaultFaultHandling_action } from "../IN-CS3-SSF-SCF-datatypes/DefaultFaultHandling-action.ta.mjs";
import { GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../IN-CS3-SSF-SCF-datatypes/GapTreatment.ta.mjs";
// export { GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../IN-CS3-SSF-SCF-datatypes/GapTreatment.ta.mjs";


/**
 * @summary DefaultFaultHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultFaultHandling ::= SEQUENCE {
 *   action     [0]  ENUMERATED {resumeCallProcessing(0), releaseCall(1), ...
 *                               },
 *   treatment  [1]  GapTreatment OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class DefaultFaultHandling {
    /**
     * @summary `action`.
     * @public
     * @readonly
     */
    readonly action: DefaultFaultHandling_action;
    /**
     * @summary `treatment`.
     * @public
     * @readonly
     */
    readonly treatment: OPTIONAL<GapTreatment>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        action: DefaultFaultHandling_action,
        treatment?: OPTIONAL<GapTreatment>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.action = action;
        this.treatment = treatment;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DefaultFaultHandling
     * @description
     * 
     * This takes an `object` and converts it to a `DefaultFaultHandling`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefaultFaultHandling`.
     * @returns {DefaultFaultHandling}
     */
    public static _from_object (_o: { [_K in keyof (DefaultFaultHandling)]: (DefaultFaultHandling)[_K] }): DefaultFaultHandling {
        return new DefaultFaultHandling(_o.action, _o.treatment, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `action`
         * @public
         * @static
         */

    public static _enum_for_action = _enum_for_DefaultFaultHandling_action;
}

/**
 * @summary The Leading Root Component Types of DefaultFaultHandling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefaultFaultHandling: $.ComponentSpec[] = [
    new $.ComponentSpec("action", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("treatment", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DefaultFaultHandling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefaultFaultHandling: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefaultFaultHandling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefaultFaultHandling: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefaultFaultHandling: $.ASN1Decoder<DefaultFaultHandling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultFaultHandling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultFaultHandling (el: _Element): DefaultFaultHandling {
    if (!_cached_decoder_for_DefaultFaultHandling) { _cached_decoder_for_DefaultFaultHandling = function (el: _Element): DefaultFaultHandling {
    let action!: DefaultFaultHandling_action;
    let treatment: OPTIONAL<GapTreatment>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "action": (_el: _Element): void => { action = $._decode_implicit<DefaultFaultHandling_action>(() => _decode_DefaultFaultHandling_action)(_el); },
        "treatment": (_el: _Element): void => { treatment = $._decode_explicit<GapTreatment>(() => _decode_GapTreatment)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefaultFaultHandling,
        _extension_additions_list_spec_for_DefaultFaultHandling,
        _root_component_type_list_2_spec_for_DefaultFaultHandling,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DefaultFaultHandling(
        action,
        treatment,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DefaultFaultHandling(el);
}

let _cached_encoder_for_DefaultFaultHandling: $.ASN1Encoder<DefaultFaultHandling> | null = null;

/**
 * @summary Encodes a(n) DefaultFaultHandling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultFaultHandling, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultFaultHandling (value: DefaultFaultHandling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultFaultHandling) { _cached_encoder_for_DefaultFaultHandling = function (value: DefaultFaultHandling, elGetter: $.ASN1Encoder<DefaultFaultHandling>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DefaultFaultHandling_action, $.BER)(value.action, $.BER);
    if (value.treatment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_GapTreatment, $.BER)(value.treatment, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DefaultFaultHandling(value, elGetter);
}


/* eslint-enable */
