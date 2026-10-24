/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../IN-CS-1-Datatypes/RequestedInformationList.ta.mjs";
// export { RequestedInformationList, _decode_RequestedInformationList, _encode_RequestedInformationList } from "../IN-CS-1-Datatypes/RequestedInformationList.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


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
 *   extensions
 *     [2]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
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
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        requestedInformationList: RequestedInformationList,
        correlationID: OPTIONAL<CorrelationID>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedInformationList = requestedInformationList;
        this.correlationID = correlationID;
        this.extensions = extensions;
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
        return new CallInformationReportArg(_o.requestedInformationList, _o.correlationID, _o.extensions, _o._unrecognizedExtensionsList);
    }


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
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 2))
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
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInformationList": (_el: _Element): void => { requestedInformationList = $._decode_implicit<RequestedInformationList>(() => _decode_RequestedInformationList)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
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
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationList, $.BER)(value.requestedInformationList, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
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
