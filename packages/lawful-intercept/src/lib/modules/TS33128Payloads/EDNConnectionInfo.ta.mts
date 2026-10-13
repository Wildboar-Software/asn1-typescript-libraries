/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary EDNConnectionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDNConnectionInfo ::= SEQUENCE
 * {
 *     dNN            [1] DNN OPTIONAL,
 *     sNSSAI         [2] SNSSAI OPTIONAL,
 *     serviceArea    [3] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EDNConnectionInfo {
    /**
     * @summary `dNN`.
     * @public
     * @readonly
     */
    readonly dNN: OPTIONAL<DNN>;
    /**
     * @summary `sNSSAI`.
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `serviceArea`.
     * @public
     * @readonly
     */
    readonly serviceArea: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dNN: OPTIONAL<DNN>,
        sNSSAI: OPTIONAL<SNSSAI>,
        serviceArea: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dNN = dNN;
        this.sNSSAI = sNSSAI;
        this.serviceArea = serviceArea;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EDNConnectionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EDNConnectionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDNConnectionInfo`.
     * @returns {EDNConnectionInfo}
     */
    public static _from_object (_o: { [_K in keyof (EDNConnectionInfo)]: (EDNConnectionInfo)[_K] }): EDNConnectionInfo {
        return new EDNConnectionInfo(_o.dNN, _o.sNSSAI, _o.serviceArea, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EDNConnectionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EDNConnectionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("dNN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceArea", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EDNConnectionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EDNConnectionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EDNConnectionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EDNConnectionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EDNConnectionInfo: $.ASN1Decoder<EDNConnectionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDNConnectionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDNConnectionInfo (el: _Element): EDNConnectionInfo {
    if (!_cached_decoder_for_EDNConnectionInfo) { _cached_decoder_for_EDNConnectionInfo = function (el: _Element): EDNConnectionInfo {
    let dNN: OPTIONAL<DNN>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let serviceArea: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "serviceArea": (_el: _Element): void => { serviceArea = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EDNConnectionInfo,
        _extension_additions_list_spec_for_EDNConnectionInfo,
        _root_component_type_list_2_spec_for_EDNConnectionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EDNConnectionInfo(
        dNN,
        sNSSAI,
        serviceArea,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EDNConnectionInfo(el);
}

let _cached_encoder_for_EDNConnectionInfo: $.ASN1Encoder<EDNConnectionInfo> | null = null;

/**
 * @summary Encodes a(n) EDNConnectionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDNConnectionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EDNConnectionInfo (value: EDNConnectionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDNConnectionInfo) { _cached_encoder_for_EDNConnectionInfo = function (value: EDNConnectionInfo, elGetter: $.ASN1Encoder<EDNConnectionInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.dNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    }
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.serviceArea !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Location, $.BER)(value.serviceArea, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EDNConnectionInfo(value, elGetter);
}


/* eslint-enable */
