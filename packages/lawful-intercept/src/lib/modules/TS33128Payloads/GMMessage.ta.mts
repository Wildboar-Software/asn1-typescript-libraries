/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GMMessage ::= SEQUENCE
 * {
 *     gMRequest   [1] OCTET STRING,
 *     gMResponse  [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class GMMessage {
    /**
     * @summary `gMRequest`.
     * @description
     *
     * Contains the HTTP GET, POST, PUT or DELETE request received by the Group
     * Management Server.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly gMRequest: OCTET_STRING;
    /**
     * @summary `gMResponse`.
     * @description
     *
     * Contains the HTTP response returned by the Group Management Server.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly gMResponse: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        gMRequest: OCTET_STRING,
        gMResponse: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.gMRequest = gMRequest;
        this.gMResponse = gMResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `GMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GMMessage`.
     * @returns {GMMessage}
     */
    public static _from_object (_o: { [_K in keyof (GMMessage)]: (GMMessage)[_K] }): GMMessage {
        return new GMMessage(_o.gMRequest, _o.gMResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("gMRequest", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gMResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GMMessage: $.ASN1Decoder<GMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GMMessage (el: _Element): GMMessage {
    if (!_cached_decoder_for_GMMessage) { _cached_decoder_for_GMMessage = function (el: _Element): GMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gMRequest";
    sequence[1].name = "gMResponse";
    let gMRequest!: OCTET_STRING;
    let gMResponse!: OCTET_STRING;
    gMRequest = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    gMResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new GMMessage(
        gMRequest,
        gMResponse,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_GMMessage(el);
}

let _cached_encoder_for_GMMessage: $.ASN1Encoder<GMMessage> | null = null;

/**
 * @summary Encodes a(n) GMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_GMMessage (value: GMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GMMessage) { _cached_encoder_for_GMMessage = function (value: GMMessage, elGetter: $.ASN1Encoder<GMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.gMRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.gMResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GMMessage(value, elGetter);
}


/* eslint-enable */
