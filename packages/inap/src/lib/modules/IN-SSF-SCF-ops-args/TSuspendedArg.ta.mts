/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary TSuspendedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSuspendedArg ::= SEQUENCE {
 *   dpSpecificCommonParameters  [0]  DpSpecificCommonParameters,
 *   legID                       [1]  LegID OPTIONAL,
 *   extensions                  [2]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TSuspendedArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        legID: OPTIONAL<LegID>,
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.legID = legID;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TSuspendedArg
     * @description
     * 
     * This takes an `object` and converts it to a `TSuspendedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSuspendedArg`.
     * @returns {TSuspendedArg}
     */
    public static _from_object (_o: { [_K in keyof (TSuspendedArg)]: (TSuspendedArg)[_K] }): TSuspendedArg {
        return new TSuspendedArg(_o.dpSpecificCommonParameters, _o.legID, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSuspendedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSuspendedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSuspendedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSuspendedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSuspendedArg: $.ASN1Decoder<TSuspendedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSuspendedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSuspendedArg (el: _Element): TSuspendedArg {
    if (!_cached_decoder_for_TSuspendedArg) { _cached_decoder_for_TSuspendedArg = function (el: _Element): TSuspendedArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let legID: OPTIONAL<LegID>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSuspendedArg,
        _extension_additions_list_spec_for_TSuspendedArg,
        _root_component_type_list_2_spec_for_TSuspendedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TSuspendedArg(
        dpSpecificCommonParameters,
        legID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TSuspendedArg(el);
}

let _cached_encoder_for_TSuspendedArg: $.ASN1Encoder<TSuspendedArg> | null = null;

/**
 * @summary Encodes a(n) TSuspendedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSuspendedArg, encoded as an ASN.1 Element.
 */
export
function _encode_TSuspendedArg (value: TSuspendedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSuspendedArg) { _cached_encoder_for_TSuspendedArg = function (value: TSuspendedArg, elGetter: $.ASN1Encoder<TSuspendedArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TSuspendedArg(value, elGetter);
}


/* eslint-enable */
