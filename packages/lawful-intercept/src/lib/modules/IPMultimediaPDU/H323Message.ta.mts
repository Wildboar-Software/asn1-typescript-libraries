/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LI-PS-PDU/IPAddress.ta.mjs";
import { type H323MessageContent, _decode_H323MessageContent, _encode_H323MessageContent } from "../IPMultimediaPDU/H323MessageContent.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { H323MessageContent, _decode_H323MessageContent, _encode_H323MessageContent } from "../IPMultimediaPDU/H323MessageContent.ta.mjs";


/**
 * @summary H323Message
 * @description
 *
 * One intercepted H.323 message (ITU-T H.323) for HI2, together with
 * the network-layer addresses of that message.
 *
 * Subject to interception: H.225.0 call signalling, H.245 call
 * control, H.450.x supplementary-service signalling, and
 * subscriber-controlled input (activation, deactivation, and
 * interrogation). H.225.0 RAS is intercepted when those events are
 * available (clause 5.2.2). Messages of one call share a CIN. A call
 * is the set of messages associated with one H.225.0 Call ID
 * (clause 5.3.2). The specification does not define session direction
 * for H.323 (clause 5.7.2).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.2, 5.2.7, and 5.3.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * H323Message ::= SEQUENCE
 * {
 *     iPSourceAddress             [0] LI-PS-PDU.IPAddress,
 *     iPDestinationAddress        [1] LI-PS-PDU.IPAddress,
 *     h323Content                 [2] H323MessageContent,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class H323Message {
    /**
     * @summary `iPSourceAddress`.
     * @description
     *
     * Source IP address of this H.323 message as it was transmitted on
     * the network layer. It is not replaced by an address of the
     * signalling server or of any other element.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.7.
     *
     * @public
     * @readonly
     */
    readonly iPSourceAddress: LI_PS_PDU.IPAddress;
    /**
     * @summary `iPDestinationAddress`.
     * @description
     *
     * Destination IP address of this H.323 message as it was
     * transmitted on the network layer. It is not replaced by an
     * address of the signalling server or of any other element.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.7.
     *
     * @public
     * @readonly
     */
    readonly iPDestinationAddress: LI_PS_PDU.IPAddress;
    /**
     * @summary `h323Content`.
     * @description
     *
     * The intercepted H.323 PDU. Clause 5.2.2 requires interception of
     * H.450.x and of subscriber-controlled input, and does not say
     * which alternative of `H323MessageContent` carries them.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.2.
     *
     * @public
     * @readonly
     */
    readonly h323Content: H323MessageContent;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPSourceAddress: LI_PS_PDU.IPAddress,
        iPDestinationAddress: LI_PS_PDU.IPAddress,
        h323Content: H323MessageContent,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPSourceAddress = iPSourceAddress;
        this.iPDestinationAddress = iPDestinationAddress;
        this.h323Content = h323Content;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a H323Message
     * @description
     * 
     * This takes an `object` and converts it to a `H323Message`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `H323Message`.
     * @returns {H323Message}
     */
    public static _from_object (_o: { [_K in keyof (H323Message)]: (H323Message)[_K] }): H323Message {
        return new H323Message(_o.iPSourceAddress, _o.iPDestinationAddress, _o.h323Content, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of H323Message
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_H323Message: $.ComponentSpec[] = [
    new $.ComponentSpec("iPSourceAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPDestinationAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("h323Content", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of H323Message
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_H323Message: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of H323Message
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_H323Message: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_H323Message: $.ASN1Decoder<H323Message> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) H323Message
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_H323Message (el: _Element): H323Message {
    if (!_cached_decoder_for_H323Message) { _cached_decoder_for_H323Message = function (el: _Element): H323Message {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("H323Message contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPSourceAddress";
    sequence[1].name = "iPDestinationAddress";
    sequence[2].name = "h323Content";
    let iPSourceAddress!: LI_PS_PDU.IPAddress;
    let iPDestinationAddress!: LI_PS_PDU.IPAddress;
    let h323Content!: H323MessageContent;
    iPSourceAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(sequence[0]);
    iPDestinationAddress = $._decode_implicit<LI_PS_PDU.IPAddress>(() => LI_PS_PDU._decode_IPAddress)(sequence[1]);
    h323Content = $._decode_explicit<H323MessageContent>(() => _decode_H323MessageContent)(sequence[2]);
    return new H323Message(
        iPSourceAddress,
        iPDestinationAddress,
        h323Content,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_H323Message(el);
}

let _cached_encoder_for_H323Message: $.ASN1Encoder<H323Message> | null = null;

/**
 * @summary Encodes a(n) H323Message into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The H323Message, encoded as an ASN.1 Element.
 */
export
function _encode_H323Message (value: H323Message, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_H323Message) { _cached_encoder_for_H323Message = function (value: H323Message, elGetter: $.ASN1Encoder<H323Message>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.iPSourceAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => LI_PS_PDU._encode_IPAddress, $.BER)(value.iPDestinationAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_H323MessageContent, $.BER)(value.h323Content, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_H323Message(value, elGetter);
}


/* eslint-enable */
