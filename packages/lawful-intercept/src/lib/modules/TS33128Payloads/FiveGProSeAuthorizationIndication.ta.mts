/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_FiveGProSeAuthorizationIndicator, _encode_FiveGProSeAuthorizationIndicator, _enum_for_FiveGProSeAuthorizationIndicator, FiveGProSeAuthorizationIndicator } from "../TS33128Payloads/FiveGProSeAuthorizationIndicator.ta.mjs";
// export { FiveGProSeAuthorizationIndicator, _enum_for_FiveGProSeAuthorizationIndicator, FiveGProSeAuthorizationIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGProSeAuthorizationIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGProSeAuthorizationIndicator, _encode_FiveGProSeAuthorizationIndicator } from "../TS33128Payloads/FiveGProSeAuthorizationIndicator.ta.mjs";


/**
 * @summary FiveGProSeAuthorizationIndication
 * @description
 * 
 * The FiveGProSeAuthorizationIndication provides information on the
 * authorization status of the UE to use the 5G ProSe services. Derived from 5G
 * ProSe Authorized IE defined in TS 38.413 [23] clause 9.3.1.233.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndication ::= SEQUENCE
 * {
 *     fiveGProSeDirectDiscovery     [1] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeDirectCommunication [2] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL2UEToNetworkRelay  [3] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL3UEToNetworkRelay  [4] FiveGProSeAuthorizationIndicator OPTIONAL,
 *     fiveGProSeL2RemoteUE          [5] FiveGProSeAuthorizationIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FiveGProSeAuthorizationIndication {
    /**
     * @summary `fiveGProSeDirectDiscovery`.
     * @description
     *
     * Indicates whether the UE is authorized for 5G ProSe Direct Discovery.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.8.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeDirectDiscovery: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    /**
     * @summary `fiveGProSeDirectCommunication`.
     * @description
     *
     * Indicates whether the UE is authorized for 5G ProSe Direct Communication.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.8.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeDirectCommunication: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    /**
     * @summary `fiveGProSeL2UEToNetworkRelay`.
     * @description
     *
     * Indicates whether the UE is authorized for 5G ProSe Layer-2 UE-to-Network
     * Relay.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.8.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeL2UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    /**
     * @summary `fiveGProSeL3UEToNetworkRelay`.
     * @description
     *
     * Indicates whether the UE is authorized for 5G ProSe Layer-3 UE-to-Network
     * Relay.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.8.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeL3UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    /**
     * @summary `fiveGProSeL2RemoteUE`.
     * @description
     *
     * Indicates whether the UE is authorized for 5G ProSe Layer-2 Remote UE.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.8.
     *
     * @public
     * @readonly
     */
    readonly fiveGProSeL2RemoteUE: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        fiveGProSeDirectDiscovery?: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        fiveGProSeDirectCommunication?: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        fiveGProSeL2UEToNetworkRelay?: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        fiveGProSeL3UEToNetworkRelay?: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        fiveGProSeL2RemoteUE?: OPTIONAL<FiveGProSeAuthorizationIndicator>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.fiveGProSeDirectDiscovery = fiveGProSeDirectDiscovery;
        this.fiveGProSeDirectCommunication = fiveGProSeDirectCommunication;
        this.fiveGProSeL2UEToNetworkRelay = fiveGProSeL2UEToNetworkRelay;
        this.fiveGProSeL3UEToNetworkRelay = fiveGProSeL3UEToNetworkRelay;
        this.fiveGProSeL2RemoteUE = fiveGProSeL2RemoteUE;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGProSeAuthorizationIndication
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGProSeAuthorizationIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGProSeAuthorizationIndication`.
     * @returns {FiveGProSeAuthorizationIndication}
     */
    public static _from_object (_o: { [_K in keyof (FiveGProSeAuthorizationIndication)]: (FiveGProSeAuthorizationIndication)[_K] }): FiveGProSeAuthorizationIndication {
        return new FiveGProSeAuthorizationIndication(_o.fiveGProSeDirectDiscovery, _o.fiveGProSeDirectCommunication, _o.fiveGProSeL2UEToNetworkRelay, _o.fiveGProSeL3UEToNetworkRelay, _o.fiveGProSeL2RemoteUE, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `fiveGProSeDirectDiscovery`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeDirectDiscovery: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeDirectCommunication`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeDirectCommunication: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL2UEToNetworkRelay`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL2UEToNetworkRelay: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL3UEToNetworkRelay`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL3UEToNetworkRelay: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;        /**
         * @summary The enum used as the type of the component `fiveGProSeL2RemoteUE`
         * @public
         * @static
         */

    public static _enum_for_fiveGProSeL2RemoteUE: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;
}

/**
 * @summary The Leading Root Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGProSeDirectDiscovery", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGProSeDirectCommunication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGProSeL2UEToNetworkRelay", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGProSeL3UEToNetworkRelay", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("fiveGProSeL2RemoteUE", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGProSeAuthorizationIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGProSeAuthorizationIndication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGProSeAuthorizationIndication: $.ASN1Decoder<FiveGProSeAuthorizationIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGProSeAuthorizationIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGProSeAuthorizationIndication (el: _Element): FiveGProSeAuthorizationIndication {
    if (!_cached_decoder_for_FiveGProSeAuthorizationIndication) { _cached_decoder_for_FiveGProSeAuthorizationIndication = function (el: _Element): FiveGProSeAuthorizationIndication {
    let fiveGProSeDirectDiscovery: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeDirectCommunication: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL2UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL3UEToNetworkRelay: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    let fiveGProSeL2RemoteUE: OPTIONAL<FiveGProSeAuthorizationIndicator>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "fiveGProSeDirectDiscovery": (_el: _Element): void => { fiveGProSeDirectDiscovery = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeDirectCommunication": (_el: _Element): void => { fiveGProSeDirectCommunication = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL2UEToNetworkRelay": (_el: _Element): void => { fiveGProSeL2UEToNetworkRelay = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL3UEToNetworkRelay": (_el: _Element): void => { fiveGProSeL3UEToNetworkRelay = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); },
        "fiveGProSeL2RemoteUE": (_el: _Element): void => { fiveGProSeL2RemoteUE = $._decode_implicit<FiveGProSeAuthorizationIndicator>(() => _decode_FiveGProSeAuthorizationIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGProSeAuthorizationIndication,
        _extension_additions_list_spec_for_FiveGProSeAuthorizationIndication,
        _root_component_type_list_2_spec_for_FiveGProSeAuthorizationIndication,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGProSeAuthorizationIndication(
        fiveGProSeDirectDiscovery,
        fiveGProSeDirectCommunication,
        fiveGProSeL2UEToNetworkRelay,
        fiveGProSeL3UEToNetworkRelay,
        fiveGProSeL2RemoteUE,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FiveGProSeAuthorizationIndication(el);
}

let _cached_encoder_for_FiveGProSeAuthorizationIndication: $.ASN1Encoder<FiveGProSeAuthorizationIndication> | null = null;

/**
 * @summary Encodes a(n) FiveGProSeAuthorizationIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGProSeAuthorizationIndication, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGProSeAuthorizationIndication (value: FiveGProSeAuthorizationIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGProSeAuthorizationIndication) { _cached_encoder_for_FiveGProSeAuthorizationIndication = function (value: FiveGProSeAuthorizationIndication, elGetter: $.ASN1Encoder<FiveGProSeAuthorizationIndication>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.fiveGProSeDirectDiscovery !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeDirectDiscovery, $.BER);
    }
    if (value.fiveGProSeDirectCommunication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeDirectCommunication, $.BER);
    }
    if (value.fiveGProSeL2UEToNetworkRelay !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL2UEToNetworkRelay, $.BER);
    }
    if (value.fiveGProSeL3UEToNetworkRelay !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL3UEToNetworkRelay, $.BER);
    }
    if (value.fiveGProSeL2RemoteUE !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGProSeAuthorizationIndicator, $.BER)(value.fiveGProSeL2RemoteUE, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGProSeAuthorizationIndication(value, elGetter);
}


/* eslint-enable */
