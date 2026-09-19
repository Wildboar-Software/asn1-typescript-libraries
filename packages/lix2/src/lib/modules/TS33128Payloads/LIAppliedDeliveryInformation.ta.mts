/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary LIAppliedDeliveryInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIAppliedDeliveryInformation ::= SEQUENCE
 * {
 *     hI2DeliveryIPAddress                [1] IPAddress OPTIONAL,
 *     hI2DeliveryPortNumber               [2] PortNumber OPTIONAL,
 *     hI3DeliveryIPAddress                [3] IPAddress OPTIONAL,
 *     hI3DeliveryPortNumber               [4] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LIAppliedDeliveryInformation {
    constructor (
        /**
         * @summary `hI2DeliveryIPAddress`.
         * @public
         * @readonly
         */
        readonly hI2DeliveryIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `hI2DeliveryPortNumber`.
         * @public
         * @readonly
         */
        readonly hI2DeliveryPortNumber: OPTIONAL<PortNumber>,
        /**
         * @summary `hI3DeliveryIPAddress`.
         * @public
         * @readonly
         */
        readonly hI3DeliveryIPAddress: OPTIONAL<IPAddress>,
        /**
         * @summary `hI3DeliveryPortNumber`.
         * @public
         * @readonly
         */
        readonly hI3DeliveryPortNumber: OPTIONAL<PortNumber>
    ) {}

    /**
     * @summary Restructures an object into a LIAppliedDeliveryInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LIAppliedDeliveryInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIAppliedDeliveryInformation`.
     * @returns {LIAppliedDeliveryInformation}
     */
    public static _from_object (_o: { [_K in keyof (LIAppliedDeliveryInformation)]: (LIAppliedDeliveryInformation)[_K] }): LIAppliedDeliveryInformation {
        return new LIAppliedDeliveryInformation(_o.hI2DeliveryIPAddress, _o.hI2DeliveryPortNumber, _o.hI3DeliveryIPAddress, _o.hI3DeliveryPortNumber);
    }


}

/**
 * @summary The Leading Root Component Types of LIAppliedDeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIAppliedDeliveryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("hI2DeliveryIPAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("hI2DeliveryPortNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hI3DeliveryIPAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("hI3DeliveryPortNumber", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of LIAppliedDeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIAppliedDeliveryInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIAppliedDeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIAppliedDeliveryInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIAppliedDeliveryInformation: $.ASN1Decoder<LIAppliedDeliveryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIAppliedDeliveryInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIAppliedDeliveryInformation (el: _Element): LIAppliedDeliveryInformation {
    if (!_cached_decoder_for_LIAppliedDeliveryInformation) { _cached_decoder_for_LIAppliedDeliveryInformation = function (el: _Element): LIAppliedDeliveryInformation {
    let hI2DeliveryIPAddress: OPTIONAL<IPAddress>;
    let hI2DeliveryPortNumber: OPTIONAL<PortNumber>;
    let hI3DeliveryIPAddress: OPTIONAL<IPAddress>;
    let hI3DeliveryPortNumber: OPTIONAL<PortNumber>;
    const callbacks: $.DecodingMap = {
        "hI2DeliveryIPAddress": (_el: _Element): void => { hI2DeliveryIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "hI2DeliveryPortNumber": (_el: _Element): void => { hI2DeliveryPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "hI3DeliveryIPAddress": (_el: _Element): void => { hI3DeliveryIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "hI3DeliveryPortNumber": (_el: _Element): void => { hI3DeliveryPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LIAppliedDeliveryInformation,
        _extension_additions_list_spec_for_LIAppliedDeliveryInformation,
        _root_component_type_list_2_spec_for_LIAppliedDeliveryInformation,
        undefined,
    );
    return new LIAppliedDeliveryInformation(
        hI2DeliveryIPAddress,
        hI2DeliveryPortNumber,
        hI3DeliveryIPAddress,
        hI3DeliveryPortNumber
    );
}; }
    return _cached_decoder_for_LIAppliedDeliveryInformation(el);
}

let _cached_encoder_for_LIAppliedDeliveryInformation: $.ASN1Encoder<LIAppliedDeliveryInformation> | null = null;

/**
 * @summary Encodes a(n) LIAppliedDeliveryInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIAppliedDeliveryInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LIAppliedDeliveryInformation (value: LIAppliedDeliveryInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIAppliedDeliveryInformation) { _cached_encoder_for_LIAppliedDeliveryInformation = function (value: LIAppliedDeliveryInformation, elGetter: $.ASN1Encoder<LIAppliedDeliveryInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.hI2DeliveryIPAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.hI2DeliveryIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.hI2DeliveryPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.hI2DeliveryPortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.hI3DeliveryIPAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_IPAddress, $.BER)(value.hI3DeliveryIPAddress, $.BER)),
            /* IF_ABSENT  */ ((value.hI3DeliveryPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PortNumber, $.BER)(value.hI3DeliveryPortNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LIAppliedDeliveryInformation(value, elGetter);
}


/* eslint-enable */
