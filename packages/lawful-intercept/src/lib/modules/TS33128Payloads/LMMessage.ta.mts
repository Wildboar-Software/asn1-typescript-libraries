/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LMMessage ::= SEQUENCE
 * {
 *     lMRequest   [1] OCTET STRING,
 *     lMResponse  [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class LMMessage {
    /**
     * @summary `lMRequest`.
     * @description
     *
     * Contains the HTTP request.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly lMRequest: OCTET_STRING;
    /**
     * @summary `lMResponse`.
     * @description
     *
     * Contains the HTTP response.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly lMResponse: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lMRequest: OCTET_STRING,
        lMResponse: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lMRequest = lMRequest;
        this.lMResponse = lMResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `LMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LMMessage`.
     * @returns {LMMessage}
     */
    public static _from_object (_o: { [_K in keyof (LMMessage)]: (LMMessage)[_K] }): LMMessage {
        return new LMMessage(_o.lMRequest, _o.lMResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("lMRequest", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lMResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LMMessage: $.ASN1Decoder<LMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LMMessage (el: _Element): LMMessage {
    if (!_cached_decoder_for_LMMessage) { _cached_decoder_for_LMMessage = function (el: _Element): LMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lMRequest";
    sequence[1].name = "lMResponse";
    let lMRequest!: OCTET_STRING;
    let lMResponse!: OCTET_STRING;
    lMRequest = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    lMResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new LMMessage(
        lMRequest,
        lMResponse,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_LMMessage(el);
}

let _cached_encoder_for_LMMessage: $.ASN1Encoder<LMMessage> | null = null;

/**
 * @summary Encodes a(n) LMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_LMMessage (value: LMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LMMessage) { _cached_encoder_for_LMMessage = function (value: LMMessage, elGetter: $.ASN1Encoder<LMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.lMRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.lMResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LMMessage(value, elGetter);
}


/* eslint-enable */
