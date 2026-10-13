/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";


/**
 * @summary CommunicationIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationIdentifier ::= SEQUENCE
 * {
 *     communication-Identity-Number    [0] OCTET STRING (SIZE (1..8)) OPTIONAL,
 *         -- Temporary Identifier of an intercepted call to uniquely identify an intercepted call
 *         -- within the node. This parameter is mandatory if there is associated
 *         -- information sent over HI3interface (CClink, data,..) or when
 *         -- CommunicationIdentifier is used for IRI other than IRI-Report-record
 *         -- This parameter was called "call-Identity-Number" in V1.1.1 of ES 201 671 [i.5]
 *         -- The individual digits of the communication-Identity-Number shall be represented in
 *         -- ASCII format, e.g. "12345678" = 8 octets 0x31 0x32 0x33 0x34 0x35 0x36 0x37 0x38.
 *         -- For subaddress option only "0"..."9" shall be used.
 *     network-Identifier                [1] Network-Identifier,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CommunicationIdentifier {
    /**
     * @summary `communication_Identity_Number`.
     * @public
     * @readonly
     */
    readonly communication_Identity_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `network_Identifier`.
     * @public
     * @readonly
     */
    readonly network_Identifier: Network_Identifier;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        communication_Identity_Number: OPTIONAL<OCTET_STRING>,
        network_Identifier: Network_Identifier,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.communication_Identity_Number = communication_Identity_Number;
        this.network_Identifier = network_Identifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CommunicationIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationIdentifier`.
     * @returns {CommunicationIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationIdentifier)]: (CommunicationIdentifier)[_K] }): CommunicationIdentifier {
        return new CommunicationIdentifier(_o.communication_Identity_Number, _o.network_Identifier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("communication-Identity-Number", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("network-Identifier", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommunicationIdentifier: $.ASN1Decoder<CommunicationIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationIdentifier (el: _Element): CommunicationIdentifier {
    if (!_cached_decoder_for_CommunicationIdentifier) { _cached_decoder_for_CommunicationIdentifier = function (el: _Element): CommunicationIdentifier {
    let communication_Identity_Number: OPTIONAL<OCTET_STRING>;
    let network_Identifier!: Network_Identifier;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "communication-Identity-Number": (_el: _Element): void => {
            communication_Identity_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (communication_Identity_Number.length < 1 || communication_Identity_Number.length > 8) {
                throw new ASN1SizeError("CommunicationIdentifier.communication_Identity_Number violates SIZE constraint");
            }
        },
        "network-Identifier": (_el: _Element): void => { network_Identifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommunicationIdentifier,
        _extension_additions_list_spec_for_CommunicationIdentifier,
        _root_component_type_list_2_spec_for_CommunicationIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommunicationIdentifier(
        communication_Identity_Number,
        network_Identifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommunicationIdentifier(el);
}

let _cached_encoder_for_CommunicationIdentifier: $.ASN1Encoder<CommunicationIdentifier> | null = null;

/**
 * @summary Encodes a(n) CommunicationIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationIdentifier (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationIdentifier) { _cached_encoder_for_CommunicationIdentifier = function (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<CommunicationIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.communication_Identity_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.communication_Identity_Number, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Network_Identifier, $.BER)(value.network_Identifier, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommunicationIdentifier(value, elGetter);
}


/* eslint-enable */
