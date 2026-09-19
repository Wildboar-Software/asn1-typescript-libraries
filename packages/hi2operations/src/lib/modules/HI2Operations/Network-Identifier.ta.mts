/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../HI2Operations/Network-Element-Identifier.ta.mjs";
// export { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../HI2Operations/Network-Element-Identifier.ta.mjs";


/**
 * @summary Network_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Network-Identifier ::= SEQUENCE
 * {
 *     operator-Identifier            [0] OCTET STRING (SIZE (1..5)),
 *         -- It is a notification of the NWO/AP/SvP in ASCII- characters.
 *         -- For subaddress option only "0"..."9" shall be used.
 *         -- The parameter is mandatory.
 *     network-Element-Identifier    [1] Network-Element-Identifier OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Network_Identifier {
    constructor (
        /**
         * @summary `operator_Identifier`.
         * @public
         * @readonly
         */
        readonly operator_Identifier: OCTET_STRING,
        /**
         * @summary `network_Element_Identifier`.
         * @public
         * @readonly
         */
        readonly network_Element_Identifier: OPTIONAL<Network_Element_Identifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Network_Identifier
     * @description
     * 
     * This takes an `object` and converts it to a `Network_Identifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Network_Identifier`.
     * @returns {Network_Identifier}
     */
    public static _from_object (_o: { [_K in keyof (Network_Identifier)]: (Network_Identifier)[_K] }): Network_Identifier {
        return new Network_Identifier(_o.operator_Identifier, _o.network_Element_Identifier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Network_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Network_Identifier: $.ComponentSpec[] = [
    new $.ComponentSpec("operator-Identifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("network-Element-Identifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Network_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Network_Identifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Network_Identifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Network_Identifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Network_Identifier: $.ASN1Decoder<Network_Identifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Network_Identifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Network_Identifier (el: _Element): Network_Identifier {
    if (!_cached_decoder_for_Network_Identifier) { _cached_decoder_for_Network_Identifier = function (el: _Element): Network_Identifier {
    let operator_Identifier!: OCTET_STRING;
    let network_Element_Identifier: OPTIONAL<Network_Element_Identifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "operator-Identifier": (_el: _Element): void => { operator_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "network-Element-Identifier": (_el: _Element): void => { network_Element_Identifier = $._decode_explicit<Network_Element_Identifier>(() => _decode_Network_Element_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Network_Identifier,
        _extension_additions_list_spec_for_Network_Identifier,
        _root_component_type_list_2_spec_for_Network_Identifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Network_Identifier(
        operator_Identifier,
        network_Element_Identifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Network_Identifier(el);
}

let _cached_encoder_for_Network_Identifier: $.ASN1Encoder<Network_Identifier> | null = null;

/**
 * @summary Encodes a(n) Network_Identifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Network_Identifier, encoded as an ASN.1 Element.
 */
export
function _encode_Network_Identifier (value: Network_Identifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Network_Identifier) { _cached_encoder_for_Network_Identifier = function (value: Network_Identifier, elGetter: $.ASN1Encoder<Network_Identifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.operator_Identifier, $.BER),
            /* IF_ABSENT  */ ((value.network_Element_Identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Network_Element_Identifier, $.BER)(value.network_Element_Identifier, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Network_Identifier(value, elGetter);
}


/* eslint-enable */
