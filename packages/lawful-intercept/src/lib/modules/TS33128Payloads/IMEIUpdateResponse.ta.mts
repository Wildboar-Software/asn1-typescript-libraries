/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";


/**
 * @summary IMEIUpdateResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIUpdateResponse ::= SEQUENCE
 * {
 *     previousIMEI    [1] IMEI OPTIONAL,
 *     previousIMEISV  [2] IMEISV OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMEIUpdateResponse {
    /**
     * @summary `previousIMEI`.
     * @public
     * @readonly
     */
    readonly previousIMEI: OPTIONAL<IMEI>;
    /**
     * @summary `previousIMEISV`.
     * @public
     * @readonly
     */
    readonly previousIMEISV: OPTIONAL<IMEISV>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        previousIMEI: OPTIONAL<IMEI>,
        previousIMEISV: OPTIONAL<IMEISV>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.previousIMEI = previousIMEI;
        this.previousIMEISV = previousIMEISV;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMEIUpdateResponse
     * @description
     * 
     * This takes an `object` and converts it to a `IMEIUpdateResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMEIUpdateResponse`.
     * @returns {IMEIUpdateResponse}
     */
    public static _from_object (_o: { [_K in keyof (IMEIUpdateResponse)]: (IMEIUpdateResponse)[_K] }): IMEIUpdateResponse {
        return new IMEIUpdateResponse(_o.previousIMEI, _o.previousIMEISV, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("previousIMEI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("previousIMEISV", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMEIUpdateResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMEIUpdateResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMEIUpdateResponse: $.ASN1Decoder<IMEIUpdateResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEIUpdateResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEIUpdateResponse (el: _Element): IMEIUpdateResponse {
    if (!_cached_decoder_for_IMEIUpdateResponse) { _cached_decoder_for_IMEIUpdateResponse = function (el: _Element): IMEIUpdateResponse {
    let previousIMEI: OPTIONAL<IMEI>;
    let previousIMEISV: OPTIONAL<IMEISV>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "previousIMEI": (_el: _Element): void => { previousIMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "previousIMEISV": (_el: _Element): void => { previousIMEISV = $._decode_implicit<IMEISV>(() => _decode_IMEISV)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMEIUpdateResponse,
        _extension_additions_list_spec_for_IMEIUpdateResponse,
        _root_component_type_list_2_spec_for_IMEIUpdateResponse,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMEIUpdateResponse(
        previousIMEI,
        previousIMEISV,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMEIUpdateResponse(el);
}

let _cached_encoder_for_IMEIUpdateResponse: $.ASN1Encoder<IMEIUpdateResponse> | null = null;

/**
 * @summary Encodes a(n) IMEIUpdateResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEIUpdateResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IMEIUpdateResponse (value: IMEIUpdateResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEIUpdateResponse) { _cached_encoder_for_IMEIUpdateResponse = function (value: IMEIUpdateResponse, elGetter: $.ASN1Encoder<IMEIUpdateResponse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.previousIMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMEI, $.BER)(value.previousIMEI, $.BER);
    }
    if (value.previousIMEISV !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEISV, $.BER)(value.previousIMEISV, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMEIUpdateResponse(value, elGetter);
}


/* eslint-enable */
