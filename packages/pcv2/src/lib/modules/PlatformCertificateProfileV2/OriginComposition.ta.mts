/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EntityGeoLocation, _decode_EntityGeoLocation, _encode_EntityGeoLocation } from "../PlatformCertificateProfileV2/EntityGeoLocation.ta.mjs";


/**
 * @summary OriginComposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginComposition ::= SEQUENCE {
 *     location            EntityGeoLocation,
 *     hasComponents       [0] BOOLEAN DEFAULT TRUE
 * }
 * ```
 * 
 * @class
 */
export
class OriginComposition {
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: EntityGeoLocation;
    /**
     * @summary `hasComponents`.
     * @public
     * @readonly
     */
    readonly hasComponents: OPTIONAL<BOOLEAN>;

    constructor (
        location: EntityGeoLocation,
        hasComponents: OPTIONAL<BOOLEAN>
    ) {
        this.location = location;
        this.hasComponents = hasComponents;
    }

    /**
     * @summary Restructures an object into a OriginComposition
     * @description
     * 
     * This takes an `object` and converts it to a `OriginComposition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginComposition`.
     * @returns {OriginComposition}
     */
    public static _from_object (_o: { [_K in keyof (OriginComposition)]: (OriginComposition)[_K] }): OriginComposition {
        return new OriginComposition(_o.location, _o.hasComponents);
    }

    /**
     * @summary Getter that returns the default value for `hasComponents`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hasComponents () { return true; }
}

/**
 * @summary The Leading Root Component Types of OriginComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginComposition: $.ComponentSpec[] = [
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hasComponents", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of OriginComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginComposition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginComposition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginComposition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginComposition: $.ASN1Decoder<OriginComposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginComposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginComposition (el: _Element): OriginComposition {
    if (!_cached_decoder_for_OriginComposition) { _cached_decoder_for_OriginComposition = function (el: _Element): OriginComposition {
    let location!: EntityGeoLocation;
    let hasComponents: OPTIONAL<BOOLEAN> = OriginComposition._default_value_for_hasComponents;
    const callbacks: $.DecodingMap = {
        "location": (_el: _Element): void => { location = _decode_EntityGeoLocation(_el); },
        "hasComponents": (_el: _Element): void => { hasComponents = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginComposition,
        _extension_additions_list_spec_for_OriginComposition,
        _root_component_type_list_2_spec_for_OriginComposition,
        undefined,
    );
    return new OriginComposition(
        location,
        hasComponents
    );
}; }
    return _cached_decoder_for_OriginComposition(el);
}

let _cached_encoder_for_OriginComposition: $.ASN1Encoder<OriginComposition> | null = null;

/**
 * @summary Encodes a(n) OriginComposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginComposition, encoded as an ASN.1 Element.
 */
export
function _encode_OriginComposition (value: OriginComposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginComposition) { _cached_encoder_for_OriginComposition = function (value: OriginComposition): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_EntityGeoLocation(value.location, $.BER));
    if (value.hasComponents !== undefined && !$.deepEq(value.hasComponents, OriginComposition._default_value_for_hasComponents)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.hasComponents, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OriginComposition(value, elGetter);
}


/* eslint-enable */
