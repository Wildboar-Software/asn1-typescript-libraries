/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { USIMonitorMode, _decode_USIMonitorMode, _encode_USIMonitorMode, _enum_for_USIMonitorMode } from "../IN-SSF-SCF-datatypes/USIMonitorMode.ta.mjs";
// export { USIMonitorMode, _enum_for_USIMonitorMode, USIMonitorMode_monitoringActive /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, USIMonitorMode_monitoringInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, monitoringInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_USIMonitorMode, _encode_USIMonitorMode } from "../IN-SSF-SCF-datatypes/USIMonitorMode.ta.mjs";


/**
 * @summary RequestedUTSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUTSI ::= SEQUENCE {
 *   uSIServiceIndicator  [0]  USIServiceIndicator,
 *   uSImonitorMode       [1]  USIMonitorMode,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestedUTSI {
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: USIServiceIndicator;
    /**
     * @summary `uSImonitorMode`.
     * @public
     * @readonly
     */
    readonly uSImonitorMode: USIMonitorMode;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uSIServiceIndicator: USIServiceIndicator,
        uSImonitorMode: USIMonitorMode,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSImonitorMode = uSImonitorMode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestedUTSI
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedUTSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedUTSI`.
     * @returns {RequestedUTSI}
     */
    public static _from_object (_o: { [_K in keyof (RequestedUTSI)]: (RequestedUTSI)[_K] }): RequestedUTSI {
        return new RequestedUTSI(_o.uSIServiceIndicator, _o.uSImonitorMode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `uSImonitorMode`
         * @public
         * @static
         */

    public static _enum_for_uSImonitorMode = _enum_for_USIMonitorMode;
}

/**
 * @summary The Leading Root Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    new $.ComponentSpec("uSIServiceIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uSImonitorMode", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedUTSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedUTSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestedUTSI: $.ASN1Decoder<RequestedUTSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedUTSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedUTSI (el: _Element): RequestedUTSI {
    if (!_cached_decoder_for_RequestedUTSI) { _cached_decoder_for_RequestedUTSI = function (el: _Element): RequestedUTSI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestedUTSI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "uSIServiceIndicator";
    sequence[1].name = "uSImonitorMode";
    const uSIServiceIndicator: USIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(sequence[0]);
    const uSImonitorMode: USIMonitorMode = $._decode_implicit<USIMonitorMode>(() => _decode_USIMonitorMode)(sequence[1]);
    return new RequestedUTSI(
        uSIServiceIndicator,
        uSImonitorMode,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RequestedUTSI(el);
}

let _cached_encoder_for_RequestedUTSI: $.ASN1Encoder<RequestedUTSI> | null = null;

/**
 * @summary Encodes a(n) RequestedUTSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedUTSI, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedUTSI (value: RequestedUTSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedUTSI) { _cached_encoder_for_RequestedUTSI = function (value: RequestedUTSI, elGetter: $.ASN1Encoder<RequestedUTSI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_USIMonitorMode, $.BER)(value.uSImonitorMode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestedUTSI(value, elGetter);
}


/* eslint-enable */
