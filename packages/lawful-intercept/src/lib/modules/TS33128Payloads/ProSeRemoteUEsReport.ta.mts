/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";
// export { RemoteUEContextList, _decode_RemoteUEContextList, _encode_RemoteUEContextList } from "../TS33128Payloads/RemoteUEContextList.ta.mjs";


/**
 * @summary ProSeRemoteUEsReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeRemoteUEsReport ::= SEQUENCE
 * {
 *     remoteUEsContextConnected    [1] RemoteUEContextList OPTIONAL,
 *     remoteUEsContextDisconnected [2] RemoteUEContextList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProSeRemoteUEsReport {
    /**
     * @summary `remoteUEsContextConnected`.
     * @public
     * @readonly
     */
    readonly remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>;
    /**
     * @summary `remoteUEsContextDisconnected`.
     * @public
     * @readonly
     */
    readonly remoteUEsContextDisconnected: OPTIONAL<RemoteUEContextList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>,
        remoteUEsContextDisconnected: OPTIONAL<RemoteUEContextList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.remoteUEsContextConnected = remoteUEsContextConnected;
        this.remoteUEsContextDisconnected = remoteUEsContextDisconnected;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProSeRemoteUEsReport
     * @description
     * 
     * This takes an `object` and converts it to a `ProSeRemoteUEsReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProSeRemoteUEsReport`.
     * @returns {ProSeRemoteUEsReport}
     */
    public static _from_object (_o: { [_K in keyof (ProSeRemoteUEsReport)]: (ProSeRemoteUEsReport)[_K] }): ProSeRemoteUEsReport {
        return new ProSeRemoteUEsReport(_o.remoteUEsContextConnected, _o.remoteUEsContextDisconnected, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    new $.ComponentSpec("remoteUEsContextConnected", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEsContextDisconnected", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProSeRemoteUEsReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProSeRemoteUEsReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProSeRemoteUEsReport: $.ASN1Decoder<ProSeRemoteUEsReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeRemoteUEsReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeRemoteUEsReport (el: _Element): ProSeRemoteUEsReport {
    if (!_cached_decoder_for_ProSeRemoteUEsReport) { _cached_decoder_for_ProSeRemoteUEsReport = function (el: _Element): ProSeRemoteUEsReport {
    let remoteUEsContextConnected: OPTIONAL<RemoteUEContextList>;
    let remoteUEsContextDisconnected: OPTIONAL<RemoteUEContextList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "remoteUEsContextConnected": (_el: _Element): void => { remoteUEsContextConnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); },
        "remoteUEsContextDisconnected": (_el: _Element): void => { remoteUEsContextDisconnected = $._decode_implicit<RemoteUEContextList>(() => _decode_RemoteUEContextList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProSeRemoteUEsReport,
        _extension_additions_list_spec_for_ProSeRemoteUEsReport,
        _root_component_type_list_2_spec_for_ProSeRemoteUEsReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProSeRemoteUEsReport(
        remoteUEsContextConnected,
        remoteUEsContextDisconnected,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProSeRemoteUEsReport(el);
}

let _cached_encoder_for_ProSeRemoteUEsReport: $.ASN1Encoder<ProSeRemoteUEsReport> | null = null;

/**
 * @summary Encodes a(n) ProSeRemoteUEsReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeRemoteUEsReport, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeRemoteUEsReport (value: ProSeRemoteUEsReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeRemoteUEsReport) { _cached_encoder_for_ProSeRemoteUEsReport = function (value: ProSeRemoteUEsReport, _elGetter: $.ASN1Encoder<ProSeRemoteUEsReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.remoteUEsContextConnected !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEsContextConnected, $.BER);
    }
    if (value.remoteUEsContextDisconnected !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RemoteUEContextList, $.BER)(value.remoteUEsContextDisconnected, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProSeRemoteUEsReport(value, elGetter);
}


/* eslint-enable */
