/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";
// export { DataNodeAddress, _decode_DataNodeAddress, _encode_DataNodeAddress } from "../HI2Operations/DataNodeAddress.ta.mjs";


/**
 * @summary GPRS_parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-parameters ::= SEQUENCE
 * {
 *  pDP-address-allocated-to-the-target [1] DataNodeAddress OPTIONAL,
 *  aPN [2] OCTET STRING (SIZE(1..100)) OPTIONAL,
 *  -- The Access Point Name (APN) is coded in accordance with
 *  -- 3GPP TS 24.008 [9] without the APN IEI (only the last 100 octets are used).
 *  -- Octets are coded according to 3GPP TS 23.003 [25].
 *  pDP-type [3] OCTET STRING (SIZE(2)) OPTIONAL,
 *  -- Include either Octets 3 and 4 of the Packet Data Protocol Address information element
 *  -- of 3GPP TS 24.008 [9] or Octets 4 and 5 of the End User Address IE of 3GPP TS 29.060 [17].
 *  -- when PDP-type is IPv4 or IPv6, the IP address is carried by parameter
 *  -- pDP-address-allocated-to-the-target
 *  -- when PDP-type is IPv4v6, the additional IP address is carried by parameter
 *  -- additionalIPaddress
 *  ...,
 *  nSAPI [4] OCTET STRING (SIZE (1)) OPTIONAL,
 *  -- Include either Octet 2 of the NSAPI IE of 3GPP TS 24.008 [9]
 *  -- or Octet 2 of the NSAPI IE of 3GPP TS 29.060 [17].
 *  additionalIPaddress [5] DataNodeAddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GPRS_parameters {
    constructor (
        /**
         * @summary `pDP_address_allocated_to_the_target`.
         * @public
         * @readonly
         */
        readonly pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `pDP_type`.
         * @public
         * @readonly
         */
        readonly pDP_type: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nSAPI`.
         * @public
         * @readonly
         */
        readonly nSAPI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `additionalIPaddress`.
         * @public
         * @readonly
         */
        readonly additionalIPaddress: OPTIONAL<DataNodeAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GPRS_parameters
     * @description
     * 
     * This takes an `object` and converts it to a `GPRS_parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRS_parameters`.
     * @returns {GPRS_parameters}
     */
    public static _from_object (_o: { [_K in keyof (GPRS_parameters)]: (GPRS_parameters)[_K] }): GPRS_parameters {
        return new GPRS_parameters(_o.pDP_address_allocated_to_the_target, _o.aPN, _o.pDP_type, _o.nSAPI, _o.additionalIPaddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("pDP-address-allocated-to-the-target", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aPN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDP-type", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRS_parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRS_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("nSAPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalIPaddress", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_GPRS_parameters: $.ASN1Decoder<GPRS_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_parameters (el: _Element): GPRS_parameters {
    if (!_cached_decoder_for_GPRS_parameters) { _cached_decoder_for_GPRS_parameters = function (el: _Element): GPRS_parameters {
    let pDP_address_allocated_to_the_target: OPTIONAL<DataNodeAddress>;
    let aPN: OPTIONAL<OCTET_STRING>;
    let pDP_type: OPTIONAL<OCTET_STRING>;
    let nSAPI: OPTIONAL<OCTET_STRING>;
    let additionalIPaddress: OPTIONAL<DataNodeAddress>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pDP-address-allocated-to-the-target": (_el: _Element): void => { pDP_address_allocated_to_the_target = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDP-type": (_el: _Element): void => { pDP_type = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "nSAPI": (_el: _Element): void => { nSAPI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "additionalIPaddress": (_el: _Element): void => { additionalIPaddress = $._decode_explicit<DataNodeAddress>(() => _decode_DataNodeAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_parameters,
        _extension_additions_list_spec_for_GPRS_parameters,
        _root_component_type_list_2_spec_for_GPRS_parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_parameters(
        pDP_address_allocated_to_the_target,
        aPN,
        pDP_type,
        nSAPI,
        additionalIPaddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRS_parameters(el);
}

let _cached_encoder_for_GPRS_parameters: $.ASN1Encoder<GPRS_parameters> | null = null;

/**
 * @summary Encodes a(n) GPRS_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_parameters (value: GPRS_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_parameters) { _cached_encoder_for_GPRS_parameters = function (value: GPRS_parameters, elGetter: $.ASN1Encoder<GPRS_parameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pDP_address_allocated_to_the_target === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DataNodeAddress, $.BER)(value.pDP_address_allocated_to_the_target, $.BER)),
            /* IF_ABSENT  */ ((value.aPN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.aPN, $.BER)),
            /* IF_ABSENT  */ ((value.pDP_type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pDP_type, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.nSAPI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.nSAPI, $.BER)),
            /* IF_ABSENT  */ ((value.additionalIPaddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_DataNodeAddress, $.BER)(value.additionalIPaddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GPRS_parameters(value, elGetter);
}


/* eslint-enable */
