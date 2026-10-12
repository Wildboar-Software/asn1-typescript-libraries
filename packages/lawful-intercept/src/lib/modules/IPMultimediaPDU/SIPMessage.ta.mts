/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";


/**
 * @summary SIPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPMessage ::= SEQUENCE
 * {
 *     iPSourceAddress             [0] LI-PS-PDU.IPAddress,
 *     iPDestinationAddress        [1] LI-PS-PDU.IPAddress,
 *     sIPContent                  [2] OCTET STRING,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SIPMessage {
    /**
     * @summary `iPSourceAddress`.
     * @public
     * @readonly
     */
    readonly iPSourceAddress: LI_PS_PDU.IPAddress;
    /**
     * @summary `iPDestinationAddress`.
     * @public
     * @readonly
     */
    readonly iPDestinationAddress: LI_PS_PDU.IPAddress;
    /**
     * @summary `sIPContent`.
     * @public
     * @readonly
     */
    readonly sIPContent: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPSourceAddress: LI_PS_PDU.IPAddress,
        iPDestinationAddress: LI_PS_PDU.IPAddress,
        sIPContent: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPSourceAddress = iPSourceAddress;
        this.iPDestinationAddress = iPDestinationAddress;
        this.sIPContent = sIPContent;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SIPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `SIPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPMessage`.
     * @returns {SIPMessage}
     */
    public static _from_object (_o: { [_K in keyof (SIPMessage)]: (SIPMessage)[_K] }): SIPMessage {
        return new SIPMessage(_o.iPSourceAddress, _o.iPDestinationAddress, _o.sIPContent, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("iPSourceAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPDestinationAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIPContent", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPMessage: $.ASN1Decoder<SIPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPMessage (el: _Element): SIPMessage {
    if (!_cached_decoder_for_SIPMessage) { _cached_decoder_for_SIPMessage = function (el: _Element): SIPMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SIPMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPSourceAddress";
    sequence[1].name = "iPDestinationAddress";
    sequence[2].name = "sIPContent";
    let iPSourceAddress!: LI_PS_PDU.IPAddress;
    let iPDestinationAddress!: LI_PS_PDU.IPAddress;
    let sIPContent!: OCTET_STRING;
    iPSourceAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(sequence[0]);
    iPDestinationAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(sequence[1]);
    sIPContent = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new SIPMessage(
        iPSourceAddress,
        iPDestinationAddress,
        sIPContent,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_SIPMessage(el);
}

let _cached_encoder_for_SIPMessage: $.ASN1Encoder<SIPMessage> | null = null;

/**
 * @summary Encodes a(n) SIPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_SIPMessage (value: SIPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPMessage) { _cached_encoder_for_SIPMessage = function (value: SIPMessage, elGetter: $.ASN1Encoder<SIPMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.iPSourceAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.iPDestinationAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sIPContent, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SIPMessage(value, elGetter);
}


/* eslint-enable */
