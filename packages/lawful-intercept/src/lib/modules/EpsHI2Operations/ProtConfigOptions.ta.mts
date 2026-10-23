/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtConfigOptions
 * @description
 * 
 * Protocol configuration options transferred between the UE and the PDN-GW, for
 * example a DHCP address-allocation preference (clause 10.5.2). On bearer
 * activation, provide the options the UE requested. On bearer modification,
 * provide them when available and only for the default bearer (tables
 * 10.5.1.1.3, 10.5.1.2.1, and 10.5.1.3.1). Each direction is octet 3 onward of
 * the protocol configuration options IE in 3GPP TS 24.008; the IEI and length
 * octets are omitted (module comment).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtConfigOptions ::= SEQUENCE
 * {
 *     ueToNetwork                           [1]  OCTET STRING (SIZE(1..251))        OPTIONAL,
 *     -- This shall be coded with octet 3 onwards of the Protocol Configuration Options IE in
 *     -- accordance with 3GPP TS 24.008 [9].
 *      networkToUe                           [2]  OCTET STRING (SIZE(1..251))        OPTIONAL,
 *     -- This shall be coded with octet 3 onwards of the Protocol Configuration Options IE in
 *     -- accordance with 3GPP TS 24.008 [9].
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class ProtConfigOptions {
    /**
     * @summary `ueToNetwork`.
     * @description
     * 
     * Protocol configuration options the UE sent. Octet 3 onward of that
     * information element in 3GPP TS 24.008; the IEI and length are omitted
     * (module comment). Provide the options the UE requested on bearer
     * activation (clause 10.5.2 and the bearer-activation tables).
     * @public
     * @readonly
     */
    readonly ueToNetwork: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `networkToUe`.
     * @description
     * 
     * Protocol configuration options the network sent to the UE. Same
     * octet-3-onward coding from 3GPP TS 24.008 (module comment). Clause 10.5.2
     * describes the options as parameters transferred between the UE and the
     * PDN-GW.
     * @public
     * @readonly
     */
    readonly networkToUe: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * The specification does not define these components.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ueToNetwork?: OPTIONAL<OCTET_STRING>,
        networkToUe?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ueToNetwork = ueToNetwork;
        this.networkToUe = networkToUe;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ProtConfigOptions
     * @description
     * 
     * This takes an `object` and converts it to a `ProtConfigOptions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtConfigOptions`.
     * @returns {ProtConfigOptions}
     */
    public static _from_object (_o: { [_K in keyof (ProtConfigOptions)]: (ProtConfigOptions)[_K] }): ProtConfigOptions {
        return new ProtConfigOptions(_o.ueToNetwork, _o.networkToUe, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProtConfigOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProtConfigOptions: $.ComponentSpec[] = [
    new $.ComponentSpec("ueToNetwork", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkToUe", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProtConfigOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProtConfigOptions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProtConfigOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProtConfigOptions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProtConfigOptions: $.ASN1Decoder<ProtConfigOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtConfigOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtConfigOptions (el: _Element): ProtConfigOptions {
    if (!_cached_decoder_for_ProtConfigOptions) { _cached_decoder_for_ProtConfigOptions = function (el: _Element): ProtConfigOptions {
    let ueToNetwork: OPTIONAL<OCTET_STRING>;
    let networkToUe: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ueToNetwork": (_el: _Element): void => {
            ueToNetwork = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (ueToNetwork.length < 1 || ueToNetwork.length > 251) {
                throw new ASN1SizeError("ProtConfigOptions.ueToNetwork violates SIZE constraint");
            }
        },
        "networkToUe": (_el: _Element): void => {
            networkToUe = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (networkToUe.length < 1 || networkToUe.length > 251) {
                throw new ASN1SizeError("ProtConfigOptions.networkToUe violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProtConfigOptions,
        _extension_additions_list_spec_for_ProtConfigOptions,
        _root_component_type_list_2_spec_for_ProtConfigOptions,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProtConfigOptions(
        ueToNetwork,
        networkToUe,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProtConfigOptions(el);
}

let _cached_encoder_for_ProtConfigOptions: $.ASN1Encoder<ProtConfigOptions> | null = null;

/**
 * @summary Encodes a(n) ProtConfigOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtConfigOptions, encoded as an ASN.1 Element.
 */
export
function _encode_ProtConfigOptions (value: ProtConfigOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtConfigOptions) { _cached_encoder_for_ProtConfigOptions = function (value: ProtConfigOptions, elGetter: $.ASN1Encoder<ProtConfigOptions>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.ueToNetwork !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.ueToNetwork, $.BER);
    }
    if (value.networkToUe !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.networkToUe, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProtConfigOptions(value, elGetter);
}


/* eslint-enable */
