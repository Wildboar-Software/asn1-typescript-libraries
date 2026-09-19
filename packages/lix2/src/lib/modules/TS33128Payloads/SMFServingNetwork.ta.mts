/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";
// export { NID, _decode_NID, _encode_NID } from "../TS33128Payloads/NID.ta.mjs";


/**
 * @summary SMFServingNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFServingNetwork ::= SEQUENCE
 * {
 *     pLMNID  [1] PLMNID,
 *     nID     [2] NID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFServingNetwork {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `nID`.
         * @public
         * @readonly
         */
        readonly nID: OPTIONAL<NID>
    ) {}

    /**
     * @summary Restructures an object into a SMFServingNetwork
     * @description
     * 
     * This takes an `object` and converts it to a `SMFServingNetwork`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFServingNetwork`.
     * @returns {SMFServingNetwork}
     */
    public static _from_object (_o: { [_K in keyof (SMFServingNetwork)]: (SMFServingNetwork)[_K] }): SMFServingNetwork {
        return new SMFServingNetwork(_o.pLMNID, _o.nID);
    }


}

/**
 * @summary The Leading Root Component Types of SMFServingNetwork
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFServingNetwork: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SMFServingNetwork
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFServingNetwork: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFServingNetwork
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFServingNetwork: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFServingNetwork: $.ASN1Decoder<SMFServingNetwork> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFServingNetwork
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFServingNetwork (el: _Element): SMFServingNetwork {
    if (!_cached_decoder_for_SMFServingNetwork) { _cached_decoder_for_SMFServingNetwork = function (el: _Element): SMFServingNetwork {
    let pLMNID!: PLMNID;
    let nID: OPTIONAL<NID>;
    const callbacks: $.DecodingMap = {
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "nID": (_el: _Element): void => { nID = $._decode_implicit<NID>(() => _decode_NID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFServingNetwork,
        _extension_additions_list_spec_for_SMFServingNetwork,
        _root_component_type_list_2_spec_for_SMFServingNetwork,
        undefined,
    );
    return new SMFServingNetwork(
        pLMNID,
        nID
    );
}; }
    return _cached_decoder_for_SMFServingNetwork(el);
}

let _cached_encoder_for_SMFServingNetwork: $.ASN1Encoder<SMFServingNetwork> | null = null;

/**
 * @summary Encodes a(n) SMFServingNetwork into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFServingNetwork, encoded as an ASN.1 Element.
 */
export
function _encode_SMFServingNetwork (value: SMFServingNetwork, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFServingNetwork) { _cached_encoder_for_SMFServingNetwork = function (value: SMFServingNetwork, elGetter: $.ASN1Encoder<SMFServingNetwork>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* IF_ABSENT  */ ((value.nID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NID, $.BER)(value.nID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFServingNetwork(value, elGetter);
}


/* eslint-enable */
