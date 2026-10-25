/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Option, _decode_Option, _encode_Option } from "../LI-PS-PDU/Option.ta.mjs";
// export { Option, _decode_Option, _encode_Option } from "../LI-PS-PDU/Option.ta.mjs";


/**
 * @summary OptionResponse
 * @description
 * 
 * Answer to `optionRequest`. It uses the same sequence number as the request it
 * answers. It contains only a subset of the options that were requested.
 * Negotiation completes only after each side has both sent and received
 * `optionComplete`. Until then, accepted options are not used. After that,
 * further option messages are not used, and an option that was not successfully
 * negotiated may be ignored or may cause the connection to be terminated.
 * Support for the mechanism, for particular options, the overall timeout, and
 * what to do if negotiation fails are agreed by the CSP and the LEA.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5, annex I.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OptionResponse ::= SEQUENCE
 * {
 *     acceptedOptions     [0] SEQUENCE OF Option,
 *     declinedOptions     [1] SEQUENCE OF Option,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class OptionResponse {
    /**
     * @summary `acceptedOptions`.
     * @description
     *
     * Requested options this endpoint implements and will enable once
     * negotiation has completed.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly acceptedOptions: Option[];
    /**
     * @summary `declinedOptions`.
     * @description
     *
     * Requested options this endpoint recognizes from the specification and
     * does not implement. A requested option that appears in neither list is
     * one this endpoint's version of the specification does not define.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly declinedOptions: Option[];
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5, annex I.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        acceptedOptions: Option[],
        declinedOptions: Option[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.acceptedOptions = acceptedOptions;
        this.declinedOptions = declinedOptions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OptionResponse
     * @description
     * 
     * This takes an `object` and converts it to a `OptionResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionResponse`.
     * @returns {OptionResponse}
     */
    public static _from_object (_o: { [_K in keyof (OptionResponse)]: (OptionResponse)[_K] }): OptionResponse {
        return new OptionResponse(_o.acceptedOptions, _o.declinedOptions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of OptionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OptionResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("acceptedOptions", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("declinedOptions", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OptionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OptionResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OptionResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OptionResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OptionResponse: $.ASN1Decoder<OptionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OptionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OptionResponse (el: _Element): OptionResponse {
    if (!_cached_decoder_for_OptionResponse) { _cached_decoder_for_OptionResponse = function (el: _Element): OptionResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OptionResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "acceptedOptions";
    sequence[1].name = "declinedOptions";
    let acceptedOptions!: Option[];
    let declinedOptions!: Option[];
    acceptedOptions = $._decode_implicit<Option[]>(() => $._decodeSequenceOf<Option>(() => _decode_Option))(sequence[0]);
    declinedOptions = $._decode_implicit<Option[]>(() => $._decodeSequenceOf<Option>(() => _decode_Option))(sequence[1]);
    return new OptionResponse(
        acceptedOptions,
        declinedOptions,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_OptionResponse(el);
}

let _cached_encoder_for_OptionResponse: $.ASN1Encoder<OptionResponse> | null = null;

/**
 * @summary Encodes a(n) OptionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_OptionResponse (value: OptionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OptionResponse) { _cached_encoder_for_OptionResponse = function (value: OptionResponse, elGetter: $.ASN1Encoder<OptionResponse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Option>(() => _encode_Option, $.BER), $.BER)(value.acceptedOptions, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Option>(() => _encode_Option, $.BER), $.BER)(value.declinedOptions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OptionResponse(value, elGetter);
}


/* eslint-enable */
