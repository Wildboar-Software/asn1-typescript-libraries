/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceKPIs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKPIs ::= SEQUENCE
 * {
 *     connectionBandwidth      [1] INTEGER OPTIONAL,
 *     requestRate              [2] INTEGER OPTIONAL,
 *     responseTime             [3] INTEGER OPTIONAL,
 *     requestedAvailability    [4] INTEGER OPTIONAL,
 *     requestedCompute         [5] OCTET STRING OPTIONAL,
 *     requestedGraphCompute    [6] OCTET STRING OPTIONAL,
 *     requestedMemory          [7] OCTET STRING OPTIONAL,
 *     requestedStorage         [8] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceKPIs {
    /**
     * @summary `connectionBandwidth`.
     * @public
     * @readonly
     */
    readonly connectionBandwidth: OPTIONAL<INTEGER>;
    /**
     * @summary `requestRate`.
     * @public
     * @readonly
     */
    readonly requestRate: OPTIONAL<INTEGER>;
    /**
     * @summary `responseTime`.
     * @public
     * @readonly
     */
    readonly responseTime: OPTIONAL<INTEGER>;
    /**
     * @summary `requestedAvailability`.
     * @public
     * @readonly
     */
    readonly requestedAvailability: OPTIONAL<INTEGER>;
    /**
     * @summary `requestedCompute`.
     * @public
     * @readonly
     */
    readonly requestedCompute: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requestedGraphCompute`.
     * @public
     * @readonly
     */
    readonly requestedGraphCompute: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requestedMemory`.
     * @public
     * @readonly
     */
    readonly requestedMemory: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requestedStorage`.
     * @public
     * @readonly
     */
    readonly requestedStorage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        connectionBandwidth?: OPTIONAL<INTEGER>,
        requestRate?: OPTIONAL<INTEGER>,
        responseTime?: OPTIONAL<INTEGER>,
        requestedAvailability?: OPTIONAL<INTEGER>,
        requestedCompute?: OPTIONAL<OCTET_STRING>,
        requestedGraphCompute?: OPTIONAL<OCTET_STRING>,
        requestedMemory?: OPTIONAL<OCTET_STRING>,
        requestedStorage?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.connectionBandwidth = connectionBandwidth;
        this.requestRate = requestRate;
        this.responseTime = responseTime;
        this.requestedAvailability = requestedAvailability;
        this.requestedCompute = requestedCompute;
        this.requestedGraphCompute = requestedGraphCompute;
        this.requestedMemory = requestedMemory;
        this.requestedStorage = requestedStorage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServiceKPIs
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceKPIs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceKPIs`.
     * @returns {ServiceKPIs}
     */
    public static _from_object (_o: { [_K in keyof (ServiceKPIs)]: (ServiceKPIs)[_K] }): ServiceKPIs {
        return new ServiceKPIs(_o.connectionBandwidth, _o.requestRate, _o.responseTime, _o.requestedAvailability, _o.requestedCompute, _o.requestedGraphCompute, _o.requestedMemory, _o.requestedStorage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    new $.ComponentSpec("connectionBandwidth", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestRate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("responseTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("requestedAvailability", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestedCompute", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("requestedGraphCompute", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("requestedMemory", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("requestedStorage", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceKPIs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceKPIs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceKPIs: $.ASN1Decoder<ServiceKPIs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKPIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceKPIs (el: _Element): ServiceKPIs {
    if (!_cached_decoder_for_ServiceKPIs) { _cached_decoder_for_ServiceKPIs = function (el: _Element): ServiceKPIs {
    let connectionBandwidth: OPTIONAL<INTEGER>;
    let requestRate: OPTIONAL<INTEGER>;
    let responseTime: OPTIONAL<INTEGER>;
    let requestedAvailability: OPTIONAL<INTEGER>;
    let requestedCompute: OPTIONAL<OCTET_STRING>;
    let requestedGraphCompute: OPTIONAL<OCTET_STRING>;
    let requestedMemory: OPTIONAL<OCTET_STRING>;
    let requestedStorage: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "connectionBandwidth": (_el: _Element): void => { connectionBandwidth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestRate": (_el: _Element): void => { requestRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "responseTime": (_el: _Element): void => { responseTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestedAvailability": (_el: _Element): void => { requestedAvailability = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestedCompute": (_el: _Element): void => { requestedCompute = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedGraphCompute": (_el: _Element): void => { requestedGraphCompute = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedMemory": (_el: _Element): void => { requestedMemory = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestedStorage": (_el: _Element): void => { requestedStorage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceKPIs,
        _extension_additions_list_spec_for_ServiceKPIs,
        _root_component_type_list_2_spec_for_ServiceKPIs,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceKPIs(
        connectionBandwidth,
        requestRate,
        responseTime,
        requestedAvailability,
        requestedCompute,
        requestedGraphCompute,
        requestedMemory,
        requestedStorage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceKPIs(el);
}

let _cached_encoder_for_ServiceKPIs: $.ASN1Encoder<ServiceKPIs> | null = null;

/**
 * @summary Encodes a(n) ServiceKPIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKPIs, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceKPIs (value: ServiceKPIs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceKPIs) { _cached_encoder_for_ServiceKPIs = function (value: ServiceKPIs, elGetter: $.ASN1Encoder<ServiceKPIs>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.connectionBandwidth !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.connectionBandwidth, $.BER);
    }
    if (value.requestRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.requestRate, $.BER);
    }
    if (value.responseTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.responseTime, $.BER);
    }
    if (value.requestedAvailability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.requestedAvailability, $.BER);
    }
    if (value.requestedCompute !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.requestedCompute, $.BER);
    }
    if (value.requestedGraphCompute !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.requestedGraphCompute, $.BER);
    }
    if (value.requestedMemory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.requestedMemory, $.BER);
    }
    if (value.requestedStorage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.requestedStorage, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceKPIs(value, elGetter);
}


/* eslint-enable */
