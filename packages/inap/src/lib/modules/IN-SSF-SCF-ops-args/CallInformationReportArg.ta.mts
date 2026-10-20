/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../IN-SSF-SCF-datatypes/RequestedInformationList.ta.mjs";
// export { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../IN-SSF-SCF-datatypes/RequestedInformationList.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary CallInformationReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformationReportArg ::= SEQUENCE {
 *   requestedInformationList  [0]  RequestedInformationList,
 *   correlationID             [1]  CorrelationID OPTIONAL,
 *   extensions                [2]  Extensions OPTIONAL,
 *   legID                     [3]  LegID OPTIONAL,
 *   lastEventIndicator        [4]  BOOLEAN DEFAULT FALSE,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CallInformationReportArg {
    /**
     * @summary `requestedInformationList`.
     * @public
     * @readonly
     */
    readonly requestedInformationList: RequestedInformationList;
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
     * @summary `lastEventIndicator`.
     * @public
     * @readonly
     */
    readonly lastEventIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        requestedInformationList: RequestedInformationList,
        correlationID: OPTIONAL<CorrelationID>,
        extensions: OPTIONAL<Extensions>,
        legID: OPTIONAL<LegID>,
        lastEventIndicator: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedInformationList = requestedInformationList;
        this.correlationID = correlationID;
        this.extensions = extensions;
        this.legID = legID;
        this.lastEventIndicator = lastEventIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallInformationReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallInformationReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallInformationReportArg`.
     * @returns {CallInformationReportArg}
     */
    public static _from_object (_o: { [_K in keyof (CallInformationReportArg)]: (CallInformationReportArg)[_K] }): CallInformationReportArg {
        return new CallInformationReportArg(_o.requestedInformationList, _o.correlationID, _o.extensions, _o.legID, _o.lastEventIndicator, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `lastEventIndicator`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_lastEventIndicator () { return false; }
}

/**
 * @summary The Leading Root Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationList", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("lastEventIndicator", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallInformationReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallInformationReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallInformationReportArg: $.ASN1Decoder<CallInformationReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformationReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformationReportArg (el: _Element): CallInformationReportArg {
    if (!_cached_decoder_for_CallInformationReportArg) { _cached_decoder_for_CallInformationReportArg = function (el: _Element): CallInformationReportArg {
    let requestedInformationList!: RequestedInformationList;
    let correlationID: OPTIONAL<CorrelationID>;
    let extensions: OPTIONAL<Extensions>;
    let legID: OPTIONAL<LegID>;
    let lastEventIndicator: OPTIONAL<BOOLEAN> = CallInformationReportArg._default_value_for_lastEventIndicator;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInformationList": (_el: _Element): void => { requestedInformationList = $._decode_implicit<RequestedInformationList>(() => _decode_RequestedInformationList)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "lastEventIndicator": (_el: _Element): void => { lastEventIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallInformationReportArg,
        _extension_additions_list_spec_for_CallInformationReportArg,
        _root_component_type_list_2_spec_for_CallInformationReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallInformationReportArg(
        requestedInformationList,
        correlationID,
        extensions,
        legID,
        lastEventIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallInformationReportArg(el);
}

let _cached_encoder_for_CallInformationReportArg: $.ASN1Encoder<CallInformationReportArg> | null = null;

/**
 * @summary Encodes a(n) CallInformationReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformationReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformationReportArg (value: CallInformationReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformationReportArg) { _cached_encoder_for_CallInformationReportArg = function (value: CallInformationReportArg, elGetter: $.ASN1Encoder<CallInformationReportArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationList, $.BER)(value.requestedInformationList, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.lastEventIndicator !== undefined && !$.deepEq(value.lastEventIndicator, CallInformationReportArg._default_value_for_lastEventIndicator)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.lastEventIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallInformationReportArg(value, elGetter);
}


/* eslint-enable */
