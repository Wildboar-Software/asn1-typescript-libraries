/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";
// export { EASProfile, _decode_EASProfile, _encode_EASProfile } from "../TS33128Payloads/EASProfile.ta.mjs";


/**
 * @summary DiscoveredEAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiscoveredEAS ::= SEQUENCE
 * {
 *     eASProfile    [1] EASProfile,
 *     lifetime      [2] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DiscoveredEAS {
    /**
     * @summary `eASProfile`.
     * @description
     *
     * Profiles of the discovered EASs. See table 7.14.2.3-5.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASProfile: EASProfile;
    /**
     * @summary `lifetime`.
     * @description
     *
     * Time duration in seconds for which the EAS information is valid and
     * supposed to be cached in the EEC.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly lifetime: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eASProfile: EASProfile,
        lifetime?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eASProfile = eASProfile;
        this.lifetime = lifetime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DiscoveredEAS
     * @description
     * 
     * This takes an `object` and converts it to a `DiscoveredEAS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiscoveredEAS`.
     * @returns {DiscoveredEAS}
     */
    public static _from_object (_o: { [_K in keyof (DiscoveredEAS)]: (DiscoveredEAS)[_K] }): DiscoveredEAS {
        return new DiscoveredEAS(_o.eASProfile, _o.lifetime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    new $.ComponentSpec("eASProfile", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lifetime", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiscoveredEAS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiscoveredEAS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiscoveredEAS: $.ASN1Decoder<DiscoveredEAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiscoveredEAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiscoveredEAS (el: _Element): DiscoveredEAS {
    if (!_cached_decoder_for_DiscoveredEAS) { _cached_decoder_for_DiscoveredEAS = function (el: _Element): DiscoveredEAS {
    let eASProfile!: EASProfile;
    let lifetime: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eASProfile": (_el: _Element): void => { eASProfile = $._decode_implicit<EASProfile>(() => _decode_EASProfile)(_el); },
        "lifetime": (_el: _Element): void => { lifetime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiscoveredEAS,
        _extension_additions_list_spec_for_DiscoveredEAS,
        _root_component_type_list_2_spec_for_DiscoveredEAS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DiscoveredEAS(
        eASProfile,
        lifetime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DiscoveredEAS(el);
}

let _cached_encoder_for_DiscoveredEAS: $.ASN1Encoder<DiscoveredEAS> | null = null;

/**
 * @summary Encodes a(n) DiscoveredEAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscoveredEAS, encoded as an ASN.1 Element.
 */
export
function _encode_DiscoveredEAS (value: DiscoveredEAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiscoveredEAS) { _cached_encoder_for_DiscoveredEAS = function (value: DiscoveredEAS, elGetter: $.ASN1Encoder<DiscoveredEAS>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASProfile, $.BER)(value.eASProfile, $.BER);
    if (value.lifetime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.lifetime, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiscoveredEAS(value, elGetter);
}


/* eslint-enable */
