/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdMMessage ::= SEQUENCE
 * {
 *     idMRequest   [1] OCTET STRING,
 *     idMResponse  [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class IdMMessage {
    /**
     * @summary `idMRequest`.
     * @public
     * @readonly
     */
    readonly idMRequest: OCTET_STRING;
    /**
     * @summary `idMResponse`.
     * @public
     * @readonly
     */
    readonly idMResponse: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        idMRequest: OCTET_STRING,
        idMResponse: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.idMRequest = idMRequest;
        this.idMResponse = idMResponse;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IdMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IdMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdMMessage`.
     * @returns {IdMMessage}
     */
    public static _from_object (_o: { [_K in keyof (IdMMessage)]: (IdMMessage)[_K] }): IdMMessage {
        return new IdMMessage(_o.idMRequest, _o.idMResponse, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IdMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("idMRequest", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("idMResponse", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IdMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IdMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IdMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IdMMessage: $.ASN1Decoder<IdMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IdMMessage (el: _Element): IdMMessage {
    if (!_cached_decoder_for_IdMMessage) { _cached_decoder_for_IdMMessage = function (el: _Element): IdMMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IdMMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "idMRequest";
    sequence[1].name = "idMResponse";
    let idMRequest!: OCTET_STRING;
    let idMResponse!: OCTET_STRING;
    idMRequest = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    idMResponse = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new IdMMessage(
        idMRequest,
        idMResponse,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IdMMessage(el);
}

let _cached_encoder_for_IdMMessage: $.ASN1Encoder<IdMMessage> | null = null;

/**
 * @summary Encodes a(n) IdMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IdMMessage (value: IdMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IdMMessage) { _cached_encoder_for_IdMMessage = function (value: IdMMessage, elGetter: $.ASN1Encoder<IdMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.idMRequest, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.idMResponse, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IdMMessage(value, elGetter);
}


/* eslint-enable */
