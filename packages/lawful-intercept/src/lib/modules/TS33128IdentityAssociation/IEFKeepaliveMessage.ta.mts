/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IEFKeepaliveMessage
 * @description
 * 
 * The IEF may transmit a keepalive request using the keepalive record defined
 * in Annex F. Upon receiving a keepalive request, the ICF shall respond with a
 * keepaliveResponse record containing the same sequence number used in the
 * request. The circumstances under which the IEF transmits keepalive requests
 * is out of scope of the present document.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IEFKeepaliveMessage ::= SEQUENCE
 * {
 *     sequenceNumber  [1] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class IEFKeepaliveMessage {
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Upon receiving a keepalive request, the ICF shall respond with a
     * keepaliveResponse record containing the same sequence number used in the
     * request.
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.3.
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sequenceNumber: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sequenceNumber = sequenceNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IEFKeepaliveMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IEFKeepaliveMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IEFKeepaliveMessage`.
     * @returns {IEFKeepaliveMessage}
     */
    public static _from_object (_o: { [_K in keyof (IEFKeepaliveMessage)]: (IEFKeepaliveMessage)[_K] }): IEFKeepaliveMessage {
        return new IEFKeepaliveMessage(_o.sequenceNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IEFKeepaliveMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IEFKeepaliveMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("sequenceNumber", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IEFKeepaliveMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IEFKeepaliveMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IEFKeepaliveMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IEFKeepaliveMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IEFKeepaliveMessage: $.ASN1Decoder<IEFKeepaliveMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IEFKeepaliveMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IEFKeepaliveMessage (el: _Element): IEFKeepaliveMessage {
    if (!_cached_decoder_for_IEFKeepaliveMessage) { _cached_decoder_for_IEFKeepaliveMessage = function (el: _Element): IEFKeepaliveMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IEFKeepaliveMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sequenceNumber";
    let sequenceNumber!: INTEGER;
    sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    return new IEFKeepaliveMessage(
        sequenceNumber,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_IEFKeepaliveMessage(el);
}

let _cached_encoder_for_IEFKeepaliveMessage: $.ASN1Encoder<IEFKeepaliveMessage> | null = null;

/**
 * @summary Encodes a(n) IEFKeepaliveMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IEFKeepaliveMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IEFKeepaliveMessage (value: IEFKeepaliveMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IEFKeepaliveMessage) { _cached_encoder_for_IEFKeepaliveMessage = function (value: IEFKeepaliveMessage, elGetter: $.ASN1Encoder<IEFKeepaliveMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IEFKeepaliveMessage(value, elGetter);
}


/* eslint-enable */
