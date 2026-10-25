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
 * @summary OptionRequest
 * @description
 * 
 * Request for session and transport options, sent as TRI. Only the delivery
 * function opens negotiation, after the connection is up. Either endpoint may
 * then request options from its peer. A later request from the same endpoint
 * replaces the options it had requested in this negotiation. At most one
 * request from an endpoint is outstanding. There is no renegotiation in the
 * same session-layer session.
 *
 * The sequence number increases for each `optionRequest` or `optionComplete`
 * that an endpoint sends on that transport connection. Those numbers are
 * independent of other TRI classes and independent between the delivery
 * function and the LGW. The delivery function should send a keep-alive as the
 * next message, so that an LGW which ignores the request and answers only the
 * keep-alive can be detected; negotiation then stops. Keep-alive is mandatory
 * when option negotiation is required. Endpoints process TRI in arrival order.
 * Messages other than the negotiation exchange, received before the endpoint
 * considers negotiation complete, cause the connection to be terminated. Annex
 * I shows example exchanges.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5, annex I.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OptionRequest ::= SEQUENCE
 * {
 *     requestedOptions    [0] SEQUENCE OF Option,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class OptionRequest {
    /**
     * @summary `requestedOptions`.
     * @description
     *
     * Options this endpoint wants its peer to provide. An empty sequence is a
     * legal request: the sender is opening negotiation without asking for
     * anything, so the peer can request options of its own.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.3.5.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly requestedOptions: Option[];
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
        requestedOptions: Option[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedOptions = requestedOptions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OptionRequest
     * @description
     * 
     * This takes an `object` and converts it to a `OptionRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionRequest`.
     * @returns {OptionRequest}
     */
    public static _from_object (_o: { [_K in keyof (OptionRequest)]: (OptionRequest)[_K] }): OptionRequest {
        return new OptionRequest(_o.requestedOptions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of OptionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OptionRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedOptions", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of OptionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OptionRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OptionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OptionRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OptionRequest: $.ASN1Decoder<OptionRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OptionRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OptionRequest (el: _Element): OptionRequest {
    if (!_cached_decoder_for_OptionRequest) { _cached_decoder_for_OptionRequest = function (el: _Element): OptionRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("OptionRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "requestedOptions";
    let requestedOptions!: Option[];
    requestedOptions = $._decode_implicit<Option[]>(() => $._decodeSequenceOf<Option>(() => _decode_Option))(sequence[0]);
    return new OptionRequest(
        requestedOptions,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_OptionRequest(el);
}

let _cached_encoder_for_OptionRequest: $.ASN1Encoder<OptionRequest> | null = null;

/**
 * @summary Encodes a(n) OptionRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionRequest, encoded as an ASN.1 Element.
 */
export
function _encode_OptionRequest (value: OptionRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OptionRequest) { _cached_encoder_for_OptionRequest = function (value: OptionRequest, elGetter: $.ASN1Encoder<OptionRequest>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Option>(() => _encode_Option, $.BER), $.BER)(value.requestedOptions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OptionRequest(value, elGetter);
}


/* eslint-enable */
