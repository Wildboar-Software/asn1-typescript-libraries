/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMMessage ::= SEQUENCE
 * {
 *     cMRequest   [1] OCTET STRING,
 *     cMResponse  [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class CMMessage {
    /**
     * @summary `cMRequest`.
     * @description
     *
     * Contains the HTTP GET, PUT or DELETE request received by the
     * Configuration Management Server.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly cMRequest: OCTET_STRING;
    /**
     * @summary `cMResponse`.
     * @description
     *
     * Contains the HTTP response returned by the Configuration Management
     * Server.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly cMResponse: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cMRequest: OCTET_STRING,
        cMResponse: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cMRequest = cMRequest;
        this.cMResponse = cMResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `CMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CMMessage`.
     * @returns {CMMessage}
     */
    public static _from_object (_o: { [_K in keyof (CMMessage)]: (CMMessage)[_K] }): CMMessage {
        return new CMMessage(_o.cMRequest, _o.cMResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("cMRequest", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cMResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CMMessage: $.ASN1Decoder<CMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CMMessage (el: _Element): CMMessage {
    if (!_cached_decoder_for_CMMessage) { _cached_decoder_for_CMMessage = function (el: _Element): CMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cMRequest";
    sequence[1].name = "cMResponse";
    let cMRequest!: OCTET_STRING;
    let cMResponse!: OCTET_STRING;
    cMRequest = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    cMResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CMMessage(
        cMRequest,
        cMResponse,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CMMessage(el);
}

let _cached_encoder_for_CMMessage: $.ASN1Encoder<CMMessage> | null = null;

/**
 * @summary Encodes a(n) CMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_CMMessage (value: CMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CMMessage) { _cached_encoder_for_CMMessage = function (value: CMMessage, elGetter: $.ASN1Encoder<CMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cMRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.cMResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CMMessage(value, elGetter);
}


/* eslint-enable */
