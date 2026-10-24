/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary OAbandonArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OAbandonArg ::= SEQUENCE {
 *   dpSpecificCommonParameters  [0]  DpSpecificCommonParameters,
 *   callSegmentID               [1]  CallSegmentID,
 *   releaseCause                [2]  Cause OPTIONAL,
 *   extensions                  [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class OAbandonArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: CallSegmentID;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
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
        callSegmentID: CallSegmentID,
        releaseCause?: OPTIONAL<Cause>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.callSegmentID = callSegmentID;
        this.releaseCause = releaseCause;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OAbandonArg
     * @description
     * 
     * This takes an `object` and converts it to a `OAbandonArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OAbandonArg`.
     * @returns {OAbandonArg}
     */
    public static _from_object (_o: { [_K in keyof (OAbandonArg)]: (OAbandonArg)[_K] }): OAbandonArg {
        return new OAbandonArg(_o.dpSpecificCommonParameters, _o.callSegmentID, _o.releaseCause, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of OAbandonArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OAbandonArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSegmentID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of OAbandonArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OAbandonArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OAbandonArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OAbandonArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OAbandonArg: $.ASN1Decoder<OAbandonArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OAbandonArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OAbandonArg (el: _Element): OAbandonArg {
    if (!_cached_decoder_for_OAbandonArg) { _cached_decoder_for_OAbandonArg = function (el: _Element): OAbandonArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let callSegmentID!: CallSegmentID;
    let releaseCause: OPTIONAL<Cause>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OAbandonArg,
        _extension_additions_list_spec_for_OAbandonArg,
        _root_component_type_list_2_spec_for_OAbandonArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OAbandonArg(
        dpSpecificCommonParameters,
        callSegmentID,
        releaseCause,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_OAbandonArg(el);
}

let _cached_encoder_for_OAbandonArg: $.ASN1Encoder<OAbandonArg> | null = null;

/**
 * @summary Encodes a(n) OAbandonArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OAbandonArg, encoded as an ASN.1 Element.
 */
export
function _encode_OAbandonArg (value: OAbandonArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OAbandonArg) { _cached_encoder_for_OAbandonArg = function (value: OAbandonArg, elGetter: $.ASN1Encoder<OAbandonArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OAbandonArg(value, elGetter);
}


/* eslint-enable */
