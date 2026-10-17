/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEAreaIndication
 * @description
 * 
 * NOTE: Either country or internationalAreaIndication shall be present.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEAreaIndication ::= SEQUENCE
 * {
 *     country                      [1] UTF8String (SIZE(2)) OPTIONAL,
 *     internationalAreaIndication  [2] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UEAreaIndication {
    /**
     * @summary `country`.
     * @description
     *
     * Indicates the country or the area of country where the UE is located.
     * Contains the two-letter ISO 3166 country code in capital ASCII letters,
     * e.g., DE or US. Shall be encoded as described in TS 29.572 [24] table
     * 6.1.6.2.42-1.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly country: OPTIONAL<UTF8String>;
    /**
     * @summary `internationalAreaIndication`.
     * @description
     *
     * Indicates international area. Set to true if UE is located in
     * international area and set to false (default) if UE is not located in
     * international area.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.2.
     *
     * @public
     * @readonly
     */
    readonly internationalAreaIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        country: OPTIONAL<UTF8String>,
        internationalAreaIndication: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.country = country;
        this.internationalAreaIndication = internationalAreaIndication;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UEAreaIndication
     * @description
     * 
     * This takes an `object` and converts it to a `UEAreaIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UEAreaIndication`.
     * @returns {UEAreaIndication}
     */
    public static _from_object (_o: { [_K in keyof (UEAreaIndication)]: (UEAreaIndication)[_K] }): UEAreaIndication {
        return new UEAreaIndication(_o.country, _o.internationalAreaIndication, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("country", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("internationalAreaIndication", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UEAreaIndication: $.ASN1Decoder<UEAreaIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEAreaIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEAreaIndication (el: _Element): UEAreaIndication {
    if (!_cached_decoder_for_UEAreaIndication) { _cached_decoder_for_UEAreaIndication = function (el: _Element): UEAreaIndication {
    let country: OPTIONAL<UTF8String>;
    let internationalAreaIndication: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "country": (_el: _Element): void => {
            country = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (country.length < 2 || country.length > 2) {
                throw new ASN1SizeError("UEAreaIndication.country violates SIZE constraint");
            }
        },
        "internationalAreaIndication": (_el: _Element): void => { internationalAreaIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UEAreaIndication,
        _extension_additions_list_spec_for_UEAreaIndication,
        _root_component_type_list_2_spec_for_UEAreaIndication,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UEAreaIndication(
        country,
        internationalAreaIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UEAreaIndication(el);
}

let _cached_encoder_for_UEAreaIndication: $.ASN1Encoder<UEAreaIndication> | null = null;

/**
 * @summary Encodes a(n) UEAreaIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEAreaIndication, encoded as an ASN.1 Element.
 */
export
function _encode_UEAreaIndication (value: UEAreaIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEAreaIndication) { _cached_encoder_for_UEAreaIndication = function (value: UEAreaIndication, elGetter: $.ASN1Encoder<UEAreaIndication>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.country !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.country, $.BER);
    }
    if (value.internationalAreaIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.internationalAreaIndication, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UEAreaIndication(value, elGetter);
}


/* eslint-enable */
