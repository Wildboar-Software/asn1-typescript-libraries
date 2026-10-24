/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UDMProblemDetailsCause, _decode_UDMProblemDetailsCause, _encode_UDMProblemDetailsCause } from "../TS33128Payloads/UDMProblemDetailsCause.ta.mjs";
// export { UDMProblemDetailsCause, _decode_UDMProblemDetailsCause, _encode_UDMProblemDetailsCause } from "../TS33128Payloads/UDMProblemDetailsCause.ta.mjs";


/**
 * @summary UDMProblemDetails
 * @description
 * 
 * Shall Indicate reason for AuthenticationInfoResultfailure. Shall be included
 * if failure occurs. See TS 29.571 [17] clause 5.2.4.1.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProblemDetails ::= SEQUENCE
 * {
 *     cause        [1] UDMProblemDetailsCause OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMProblemDetails {
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<UDMProblemDetailsCause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cause?: OPTIONAL<UDMProblemDetailsCause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cause = cause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UDMProblemDetails
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProblemDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProblemDetails`.
     * @returns {UDMProblemDetails}
     */
    public static _from_object (_o: { [_K in keyof (UDMProblemDetails)]: (UDMProblemDetails)[_K] }): UDMProblemDetails {
        return new UDMProblemDetails(_o.cause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProblemDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProblemDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProblemDetails: $.ASN1Decoder<UDMProblemDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProblemDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProblemDetails (el: _Element): UDMProblemDetails {
    if (!_cached_decoder_for_UDMProblemDetails) { _cached_decoder_for_UDMProblemDetails = function (el: _Element): UDMProblemDetails {
    let cause: OPTIONAL<UDMProblemDetailsCause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cause": (_el: _Element): void => { cause = $._decode_explicit<UDMProblemDetailsCause>(() => _decode_UDMProblemDetailsCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMProblemDetails,
        _extension_additions_list_spec_for_UDMProblemDetails,
        _root_component_type_list_2_spec_for_UDMProblemDetails,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UDMProblemDetails(
        cause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UDMProblemDetails(el);
}

let _cached_encoder_for_UDMProblemDetails: $.ASN1Encoder<UDMProblemDetails> | null = null;

/**
 * @summary Encodes a(n) UDMProblemDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProblemDetails, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProblemDetails (value: UDMProblemDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProblemDetails) { _cached_encoder_for_UDMProblemDetails = function (value: UDMProblemDetails, elGetter: $.ASN1Encoder<UDMProblemDetails>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_UDMProblemDetailsCause, $.BER)(value.cause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UDMProblemDetails(value, elGetter);
}


/* eslint-enable */
