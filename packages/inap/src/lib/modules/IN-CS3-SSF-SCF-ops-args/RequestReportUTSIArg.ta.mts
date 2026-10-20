/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedUTSIList, _decode_RequestedUTSIList, _encode_RequestedUTSIList } from "../IN-CS3-SSF-SCF-datatypes/RequestedUTSIList.ta.mjs";
// export { RequestedUTSIList, _decode_RequestedUTSIList, _encode_RequestedUTSIList } from "../IN-CS3-SSF-SCF-datatypes/RequestedUTSIList.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";


/**
 * @summary RequestReportUTSIArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportUTSIArg ::= SEQUENCE {
 *   requestedUTSIList  [0]  RequestedUTSIList,
 *   extensions         [1]  Extensions OPTIONAL,
 *   legID              [2]  LegID DEFAULT sendingSideID:leg1,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestReportUTSIArg {
    /**
     * @summary `requestedUTSIList`.
     * @public
     * @readonly
     */
    readonly requestedUTSIList: RequestedUTSIList;
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
        requestedUTSIList: RequestedUTSIList,
        extensions: OPTIONAL<Extensions>,
        legID: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedUTSIList = requestedUTSIList;
        this.extensions = extensions;
        this.legID = legID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestReportUTSIArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportUTSIArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportUTSIArg`.
     * @returns {RequestReportUTSIArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportUTSIArg)]: (RequestReportUTSIArg)[_K] }): RequestReportUTSIArg {
        return new RequestReportUTSIArg(_o.requestedUTSIList, _o.extensions, _o.legID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { sendingSideID: leg1 }; }
}

/**
 * @summary The Leading Root Component Types of RequestReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportUTSIArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedUTSIList", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RequestReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportUTSIArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportUTSIArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportUTSIArg: $.ASN1Decoder<RequestReportUTSIArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportUTSIArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportUTSIArg (el: _Element): RequestReportUTSIArg {
    if (!_cached_decoder_for_RequestReportUTSIArg) { _cached_decoder_for_RequestReportUTSIArg = function (el: _Element): RequestReportUTSIArg {
    let requestedUTSIList!: RequestedUTSIList;
    let extensions: OPTIONAL<Extensions>;
    let legID: OPTIONAL<LegID> = RequestReportUTSIArg._default_value_for_legID;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedUTSIList": (_el: _Element): void => { requestedUTSIList = $._decode_implicit<RequestedUTSIList>(() => _decode_RequestedUTSIList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportUTSIArg,
        _extension_additions_list_spec_for_RequestReportUTSIArg,
        _root_component_type_list_2_spec_for_RequestReportUTSIArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportUTSIArg(
        requestedUTSIList,
        extensions,
        legID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportUTSIArg(el);
}

let _cached_encoder_for_RequestReportUTSIArg: $.ASN1Encoder<RequestReportUTSIArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportUTSIArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportUTSIArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportUTSIArg (value: RequestReportUTSIArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportUTSIArg) { _cached_encoder_for_RequestReportUTSIArg = function (value: RequestReportUTSIArg, elGetter: $.ASN1Encoder<RequestReportUTSIArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedUTSIList, $.BER)(value.requestedUTSIList, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.legID !== undefined && !$.deepEq(value.legID, RequestReportUTSIArg._default_value_for_legID)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestReportUTSIArg(value, elGetter);
}


/* eslint-enable */
