/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Upstream, _decode_Upstream, _encode_Upstream } from "../GCSEHI2Operations/Upstream.ta.mjs";
// export { Upstream, _decode_Upstream, _encode_Upstream } from "../GCSEHI2Operations/Upstream.ta.mjs";
import { Downstream, _decode_Downstream, _encode_Downstream } from "../GCSEHI2Operations/Downstream.ta.mjs";
// export { Downstream, _decode_Downstream, _encode_Downstream } from "../GCSEHI2Operations/Downstream.ta.mjs";


/**
 * @summary TargetConnectionMethod
 * @description
 * 
 * The target's path to the GCS AS for sending and receiving. Required when that
 * path is modified; otherwise conditional when known. 3GPP TS 33.108, clause
 * 14.2.6 and annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetConnectionMethod ::= SEQUENCE
 * {
 *         connectionStatus [1] BOOLEAN, -- True indicates connected, false indicates not connected.
 *         upstream         [2] Upstream     OPTIONAL, -- Specifies the encoding format of
 *         downstream         [3] Downstream     OPTIONAL, -- Specifies the encoding format of
 *            -- upstream and downstream parameters are omitted if connectionStatus indicates false.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class TargetConnectionMethod {
    /**
     * @summary `connectionStatus`.
     * @description
     * 
     * True when the target is connected to the GCS AS, false when not. Upstream
     * and downstream are omitted when this is false. 3GPP TS 33.108, annex
     * B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly connectionStatus: BOOLEAN;
    /**
     * @summary `upstream`.
     * @description
     * 
     * How the target sends toward the GCS AS. Omitted when the target is not
     * connected. 3GPP TS 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly upstream: OPTIONAL<Upstream>;
    /**
     * @summary `downstream`.
     * @description
     * 
     * How the target receives from the GCS AS. Omitted when the target is not
     * connected. A UE may receive in more than one way, for example unicast EPS
     * and multicast. 3GPP TS 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly downstream: OPTIONAL<Downstream>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        connectionStatus: BOOLEAN,
        upstream: OPTIONAL<Upstream>,
        downstream: OPTIONAL<Downstream>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.connectionStatus = connectionStatus;
        this.upstream = upstream;
        this.downstream = downstream;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TargetConnectionMethod
     * @description
     * 
     * This takes an `object` and converts it to a `TargetConnectionMethod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetConnectionMethod`.
     * @returns {TargetConnectionMethod}
     */
    public static _from_object (_o: { [_K in keyof (TargetConnectionMethod)]: (TargetConnectionMethod)[_K] }): TargetConnectionMethod {
        return new TargetConnectionMethod(_o.connectionStatus, _o.upstream, _o.downstream, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TargetConnectionMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TargetConnectionMethod: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("upstream", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("downstream", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TargetConnectionMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TargetConnectionMethod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TargetConnectionMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TargetConnectionMethod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TargetConnectionMethod: $.ASN1Decoder<TargetConnectionMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetConnectionMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetConnectionMethod (el: _Element): TargetConnectionMethod {
    if (!_cached_decoder_for_TargetConnectionMethod) { _cached_decoder_for_TargetConnectionMethod = function (el: _Element): TargetConnectionMethod {
    let connectionStatus!: BOOLEAN;
    let upstream: OPTIONAL<Upstream>;
    let downstream: OPTIONAL<Downstream>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "connectionStatus": (_el: _Element): void => { connectionStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "upstream": (_el: _Element): void => { upstream = $._decode_implicit<Upstream>(() => _decode_Upstream)(_el); },
        "downstream": (_el: _Element): void => { downstream = $._decode_implicit<Downstream>(() => _decode_Downstream)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TargetConnectionMethod,
        _extension_additions_list_spec_for_TargetConnectionMethod,
        _root_component_type_list_2_spec_for_TargetConnectionMethod,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TargetConnectionMethod(
        connectionStatus,
        upstream,
        downstream,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TargetConnectionMethod(el);
}

let _cached_encoder_for_TargetConnectionMethod: $.ASN1Encoder<TargetConnectionMethod> | null = null;

/**
 * @summary Encodes a(n) TargetConnectionMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetConnectionMethod, encoded as an ASN.1 Element.
 */
export
function _encode_TargetConnectionMethod (value: TargetConnectionMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetConnectionMethod) { _cached_encoder_for_TargetConnectionMethod = function (value: TargetConnectionMethod, elGetter: $.ASN1Encoder<TargetConnectionMethod>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.connectionStatus, $.BER);
    if (value.upstream !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Upstream, $.BER)(value.upstream, $.BER);
    }
    if (value.downstream !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Downstream, $.BER)(value.downstream, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TargetConnectionMethod(value, elGetter);
}


/* eslint-enable */
