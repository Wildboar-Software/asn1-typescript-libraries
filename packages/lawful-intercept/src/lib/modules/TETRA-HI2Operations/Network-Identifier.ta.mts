/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../TETRA-HI2Operations/Network-Element-Identifier.ta.mjs";
// export { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../TETRA-HI2Operations/Network-Element-Identifier.ta.mjs";


/**
 * @summary Network_Identifier
 * @description
 * 
 * Network identifier. The operator identifier is mandatory. The network-element
 * identifier is optional. Together they should be internationally unique. An
 * extension marker follows them.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Network-Identifier ::= SEQUENCE
 * {
 *     operator-Identifier                [0] OCTET STRING (SIZE (1..5)),
 *         -- It is a notification of the NWO/AP/SvP in ASCII- characters
 *         -- The parameter is mandatory
 *     network-Element-Identifier        [1] Network-Element-Identifier OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Network_Identifier {
    /**
     * @summary `operator_Identifier`.
     * @description
     *
     * Notification of the network operator, access provider, or service
     * provider, in ASCII characters. It is mandatory. Annex E carries the
     * operator id in the called-party subaddress as 2 to 5 decimal digits,
     * ended by a field separator. Where the octet string is not an imported
     * parameter format, clause D.1 places the most significant half-octet in
     * bits 5 to 8 and the least significant half-octet in bits 1 to 4. An
     * imported format, such as an E.164 number coded as ISUP, keeps the order
     * of that standard.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, annex E, clause D.1,
     * clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly operator_Identifier: OCTET_STRING;
    /**
     * @summary `network_Element_Identifier`.
     * @description
     *
     * Identifies the network element that carries out lawful interception, such
     * as activation or sending of IRI. It is optional. Clause 6.2.1 allows an
     * E.164 international node number, an X.25 address, or an IP address. This
     * module also allows a DNS form and a structured IP address.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly network_Element_Identifier: OPTIONAL<Network_Element_Identifier>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried after the extension marker that were not
     * mapped to a named component. The present document does not define their
     * content.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        operator_Identifier: OCTET_STRING,
        network_Element_Identifier?: OPTIONAL<Network_Element_Identifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.operator_Identifier = operator_Identifier;
        this.network_Element_Identifier = network_Element_Identifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "operator-Identifier": (_el: _Element): void => {
            operator_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (operator_Identifier.length < 1 || operator_Identifier.length > 5) {
                throw new ASN1SizeError("Network_Identifier.operator_Identifier violates SIZE constraint");
            }
        },
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.operator_Identifier, $.BER);
    if (value.network_Element_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Network_Element_Identifier, $.BER)(value.network_Element_Identifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Network_Identifier(value, elGetter);
}


/* eslint-enable */
