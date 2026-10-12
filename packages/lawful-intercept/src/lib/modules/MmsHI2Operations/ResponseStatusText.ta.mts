/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary ResponseStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseStatusText ::= SEQUENCE
 * {
 *     statusCount    [1]    EncodedString OPTIONAL,
 *     -- the statusCount shall only be included for the Delete event.
 *     actualResponseStatusText    [2] EncodedString,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ResponseStatusText {
    /**
     * @summary `statusCount`.
     * @public
     * @readonly
     */
    readonly statusCount: OPTIONAL<EncodedString>;
    /**
     * @summary `actualResponseStatusText`.
     * @public
     * @readonly
     */
    readonly actualResponseStatusText: EncodedString;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        statusCount: OPTIONAL<EncodedString>,
        actualResponseStatusText: EncodedString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.statusCount = statusCount;
        this.actualResponseStatusText = actualResponseStatusText;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ResponseStatusText
     * @description
     * 
     * This takes an `object` and converts it to a `ResponseStatusText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseStatusText`.
     * @returns {ResponseStatusText}
     */
    public static _from_object (_o: { [_K in keyof (ResponseStatusText)]: (ResponseStatusText)[_K] }): ResponseStatusText {
        return new ResponseStatusText(_o.statusCount, _o.actualResponseStatusText, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ResponseStatusText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResponseStatusText: $.ComponentSpec[] = [
    new $.ComponentSpec("statusCount", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("actualResponseStatusText", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ResponseStatusText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResponseStatusText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResponseStatusText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResponseStatusText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResponseStatusText: $.ASN1Decoder<ResponseStatusText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseStatusText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResponseStatusText (el: _Element): ResponseStatusText {
    if (!_cached_decoder_for_ResponseStatusText) { _cached_decoder_for_ResponseStatusText = function (el: _Element): ResponseStatusText {
    let statusCount: OPTIONAL<EncodedString>;
    let actualResponseStatusText!: EncodedString;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "statusCount": (_el: _Element): void => { statusCount = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(_el); },
        "actualResponseStatusText": (_el: _Element): void => { actualResponseStatusText = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResponseStatusText,
        _extension_additions_list_spec_for_ResponseStatusText,
        _root_component_type_list_2_spec_for_ResponseStatusText,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResponseStatusText(
        statusCount,
        actualResponseStatusText,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResponseStatusText(el);
}

let _cached_encoder_for_ResponseStatusText: $.ASN1Encoder<ResponseStatusText> | null = null;

/**
 * @summary Encodes a(n) ResponseStatusText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseStatusText, encoded as an ASN.1 Element.
 */
export
function _encode_ResponseStatusText (value: ResponseStatusText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResponseStatusText) { _cached_encoder_for_ResponseStatusText = function (value: ResponseStatusText, elGetter: $.ASN1Encoder<ResponseStatusText>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.statusCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_EncodedString, $.BER)(value.statusCount, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_EncodedString, $.BER)(value.actualResponseStatusText, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResponseStatusText(value, elGetter);
}


/* eslint-enable */
