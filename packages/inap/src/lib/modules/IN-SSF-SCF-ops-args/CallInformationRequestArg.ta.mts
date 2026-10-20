/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformationTypeList, _decode_RequestedInformationTypeList, _encode_RequestedInformationTypeList } from "../IN-SSF-SCF-datatypes/RequestedInformationTypeList.ta.mjs";
// export { RequestedInformationTypeList, _decode_RequestedInformationTypeList, _encode_RequestedInformationTypeList } from "../IN-SSF-SCF-datatypes/RequestedInformationTypeList.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary CallInformationRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformationRequestArg ::= SEQUENCE {
 *   requestedInformationTypeList  [0]  RequestedInformationTypeList,
 *   correlationID                 [1]  CorrelationID OPTIONAL,
 *   extensions                    [2]  Extensions OPTIONAL,
 *   legID                         [3]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CallInformationRequestArg {
    /**
     * @summary `requestedInformationTypeList`.
     * @public
     * @readonly
     */
    readonly requestedInformationTypeList: RequestedInformationTypeList;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        requestedInformationTypeList: RequestedInformationTypeList,
        correlationID: OPTIONAL<CorrelationID>,
        extensions: OPTIONAL<Extensions>,
        legID: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedInformationTypeList = requestedInformationTypeList;
        this.correlationID = correlationID;
        this.extensions = extensions;
        this.legID = legID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallInformationRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallInformationRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallInformationRequestArg`.
     * @returns {CallInformationRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CallInformationRequestArg)]: (CallInformationRequestArg)[_K] }): CallInformationRequestArg {
        return new CallInformationRequestArg(_o.requestedInformationTypeList, _o.correlationID, _o.extensions, _o.legID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationTypeList", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallInformationRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallInformationRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallInformationRequestArg: $.ASN1Decoder<CallInformationRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformationRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformationRequestArg (el: _Element): CallInformationRequestArg {
    if (!_cached_decoder_for_CallInformationRequestArg) { _cached_decoder_for_CallInformationRequestArg = function (el: _Element): CallInformationRequestArg {
    let requestedInformationTypeList!: RequestedInformationTypeList;
    let correlationID: OPTIONAL<CorrelationID>;
    let extensions: OPTIONAL<Extensions>;
    let legID: OPTIONAL<LegID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInformationTypeList": (_el: _Element): void => { requestedInformationTypeList = $._decode_implicit<RequestedInformationTypeList>(() => _decode_RequestedInformationTypeList)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallInformationRequestArg,
        _extension_additions_list_spec_for_CallInformationRequestArg,
        _root_component_type_list_2_spec_for_CallInformationRequestArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallInformationRequestArg(
        requestedInformationTypeList,
        correlationID,
        extensions,
        legID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallInformationRequestArg(el);
}

let _cached_encoder_for_CallInformationRequestArg: $.ASN1Encoder<CallInformationRequestArg> | null = null;

/**
 * @summary Encodes a(n) CallInformationRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformationRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformationRequestArg (value: CallInformationRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformationRequestArg) { _cached_encoder_for_CallInformationRequestArg = function (value: CallInformationRequestArg, elGetter: $.ASN1Encoder<CallInformationRequestArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationTypeList, $.BER)(value.requestedInformationTypeList, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallInformationRequestArg(value, elGetter);
}


/* eslint-enable */
