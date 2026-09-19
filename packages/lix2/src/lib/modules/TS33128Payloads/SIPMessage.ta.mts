/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";


/**
 * @summary SIPMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPMessage ::= SEQUENCE
 * {
 *     iPSourceAddress       [1] IPAddress,
 *     iPDestinationAddress  [2] IPAddress,
 *     sIPContent            [3] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class SIPMessage {
    constructor (
        /**
         * @summary `iPSourceAddress`.
         * @public
         * @readonly
         */
        readonly iPSourceAddress: IPAddress,
        /**
         * @summary `iPDestinationAddress`.
         * @public
         * @readonly
         */
        readonly iPDestinationAddress: IPAddress,
        /**
         * @summary `sIPContent`.
         * @public
         * @readonly
         */
        readonly sIPContent: OCTET_STRING
    ) {}

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
        return new SIPMessage(_o.iPSourceAddress, _o.iPDestinationAddress, _o.sIPContent);
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
    new $.ComponentSpec("iPSourceAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPDestinationAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sIPContent", false, $.hasTag(_TagClass.context, 3))
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
    let iPSourceAddress!: IPAddress;
    let iPDestinationAddress!: IPAddress;
    let sIPContent!: OCTET_STRING;
    iPSourceAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    iPDestinationAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[1]);
    sIPContent = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new SIPMessage(
        iPSourceAddress,
        iPDestinationAddress,
        sIPContent,

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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.iPSourceAddress, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.iPDestinationAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.sIPContent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPMessage(value, elGetter);
}


/* eslint-enable */
