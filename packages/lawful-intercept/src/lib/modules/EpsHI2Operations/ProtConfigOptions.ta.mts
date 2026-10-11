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
     * @public
     * @readonly
     */
    readonly ueToNetwork: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `networkToUe`.
     * @public
     * @readonly
     */
    readonly networkToUe: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ueToNetwork: OPTIONAL<OCTET_STRING>,
        networkToUe: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ueToNetwork = ueToNetwork;
        if (this.ueToNetwork !== undefined && (this.ueToNetwork.length < 1 || this.ueToNetwork.length > 251)) {
            throw new ASN1SizeError("ueToNetwork violates the SIZE constraint");
        }
        this.networkToUe = networkToUe;
        if (this.networkToUe !== undefined && (this.networkToUe.length < 1 || this.networkToUe.length > 251)) {
            throw new ASN1SizeError("networkToUe violates the SIZE constraint");
        }
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
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ueToNetwork": (_el: _Element): void => { ueToNetwork = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "networkToUe": (_el: _Element): void => { networkToUe = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
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
