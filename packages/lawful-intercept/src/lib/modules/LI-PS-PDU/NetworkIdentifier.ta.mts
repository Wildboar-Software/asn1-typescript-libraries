/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as HI2Operations from "../HI2Operations/index.mjs";
// export { Network_Element_Identifier, _decode_Network_Element_Identifier, _encode_Network_Element_Identifier } from "../HI2Operations/Network-Element-Identifier.ta.mjs";


/**
 * @summary NetworkIdentifier
 * @description
 * 
 * Operator identifier, plus an optional network-element identifier. The
 * operator identifier is mandatory and names the CSP performing the intercept.
 * The network identifier has to be unique within the CSP. Use only one of
 * `networkElementIdentifier` and `eTSI671NEID`.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkIdentifier ::= SEQUENCE
 * {
 *     operatorIdentifier          [0] OCTET STRING (SIZE(1..16)),
 *     networkElementIdentifier    [1] OCTET STRING (SIZE(1..16)) OPTIONAL,
 *     ...,
 *     eTSI671NEID                 [2] HI2Operations.Network-Element-Identifier OPTIONAL
 *         -- For network element identifier, use either networkElementIdentifier or eTSI671NEID
 * }
 * ```
 * 
 * @class
 */
export
class NetworkIdentifier {
    /**
     * @summary `operatorIdentifier`.
     * @description
     *
     * CSP performing the intercept. 1 to 16 octets. Mandatory. A padding PDU, a
     * keep-alive, and a CIN-reset all still require a correct operator
     * identifier.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4, clause 6.2.2, clause
     * 6.2.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly operatorIdentifier: OCTET_STRING;
    /**
     * @summary `networkElementIdentifier`.
     * @description
     *
     * Optional, 1 to 16 octets. Identifies the mediation function inside the
     * CSP. When it is present, the mediation-function identifier goes here. The
     * interception-point identifier can then distinguish intercepting elements
     * attached to that mediation function. Mutually exclusive with
     * `eTSI671NEID`.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly networkElementIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eTSI671NEID`.
     * @description
     *
     * Optional network-element identifier imported from ETSI TS 101 671. By
     * national agreement this form identifies the intercepting network element
     * rather than the mediation function. When it is present, that element
     * identifier goes here. Mutually exclusive with `networkElementIdentifier`.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly eTSI671NEID: OPTIONAL<HI2Operations.Network_Element_Identifier>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        operatorIdentifier: OCTET_STRING,
        networkElementIdentifier?: OPTIONAL<OCTET_STRING>,
        eTSI671NEID?: OPTIONAL<HI2Operations.Network_Element_Identifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.operatorIdentifier = operatorIdentifier;
        this.networkElementIdentifier = networkElementIdentifier;
        this.eTSI671NEID = eTSI671NEID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NetworkIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkIdentifier`.
     * @returns {NetworkIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (NetworkIdentifier)]: (NetworkIdentifier)[_K] }): NetworkIdentifier {
        return new NetworkIdentifier(_o.operatorIdentifier, _o.networkElementIdentifier, _o.eTSI671NEID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("operatorIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("networkElementIdentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NetworkIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("eTSI671NEID", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_NetworkIdentifier: $.ASN1Decoder<NetworkIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkIdentifier (el: _Element): NetworkIdentifier {
    if (!_cached_decoder_for_NetworkIdentifier) { _cached_decoder_for_NetworkIdentifier = function (el: _Element): NetworkIdentifier {
    let operatorIdentifier!: OCTET_STRING;
    let networkElementIdentifier: OPTIONAL<OCTET_STRING>;
    let eTSI671NEID: OPTIONAL<HI2Operations.Network_Element_Identifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "operatorIdentifier": (_el: _Element): void => {
            operatorIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (operatorIdentifier.length < 1 || operatorIdentifier.length > 16) {
                throw new ASN1SizeError("NetworkIdentifier.operatorIdentifier violates SIZE constraint");
            }
        },
        "networkElementIdentifier": (_el: _Element): void => {
            networkElementIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (networkElementIdentifier.length < 1 || networkElementIdentifier.length > 16) {
                throw new ASN1SizeError("NetworkIdentifier.networkElementIdentifier violates SIZE constraint");
            }
        },
        "eTSI671NEID": (_el: _Element): void => { eTSI671NEID = $._decode_explicit<HI2Operations.Network_Element_Identifier>(() => HI2Operations._decode_Network_Element_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkIdentifier,
        _extension_additions_list_spec_for_NetworkIdentifier,
        _root_component_type_list_2_spec_for_NetworkIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NetworkIdentifier(
        operatorIdentifier,
        networkElementIdentifier,
        eTSI671NEID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NetworkIdentifier(el);
}

let _cached_encoder_for_NetworkIdentifier: $.ASN1Encoder<NetworkIdentifier> | null = null;

/**
 * @summary Encodes a(n) NetworkIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkIdentifier (value: NetworkIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkIdentifier) { _cached_encoder_for_NetworkIdentifier = function (value: NetworkIdentifier, elGetter: $.ASN1Encoder<NetworkIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.operatorIdentifier, $.BER);
    if (value.networkElementIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.networkElementIdentifier, $.BER);
    }
    if (value.eTSI671NEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => HI2Operations._encode_Network_Element_Identifier, $.BER)(value.eTSI671NEID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NetworkIdentifier(value, elGetter);
}


/* eslint-enable */
