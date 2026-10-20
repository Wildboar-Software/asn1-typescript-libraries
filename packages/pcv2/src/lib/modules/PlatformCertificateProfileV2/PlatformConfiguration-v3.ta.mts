/* eslint-disable */
import {
    ASN1SizeError,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ComponentIdentifier, _decode_ComponentIdentifier, _encode_ComponentIdentifier } from "../PlatformCertificateProfileV2/ComponentIdentifier.ta.mjs";
// export { ComponentIdentifier, _decode_ComponentIdentifier, _encode_ComponentIdentifier } from "../PlatformCertificateProfileV2/ComponentIdentifier.ta.mjs";
import { Property, _decode_Property, _encode_Property } from "../PlatformCertificateProfileV2/Property.ta.mjs";
// export { Property, _decode_Property, _encode_Property } from "../PlatformCertificateProfileV2/Property.ta.mjs";


/**
 * @summary PlatformConfiguration_v3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlatformConfiguration-v3 ::= SEQUENCE {
 *     platformComponents [0] IMPLICIT SEQUENCE (SIZE(1..MAX)) OF ComponentIdentifier OPTIONAL,
 *     platformProperties [1] IMPLICIT SEQUENCE (SIZE(1..MAX)) OF Property OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PlatformConfiguration_v3 {
    /**
     * @summary `platformComponents`.
     * @public
     * @readonly
     */
    readonly platformComponents: OPTIONAL<ComponentIdentifier[]>;
    /**
     * @summary `platformProperties`.
     * @public
     * @readonly
     */
    readonly platformProperties: OPTIONAL<Property[]>;

    constructor (
        platformComponents: OPTIONAL<ComponentIdentifier[]>,
        platformProperties: OPTIONAL<Property[]>
    ) {
        this.platformComponents = platformComponents;
        this.platformProperties = platformProperties;
        if (platformComponents !== undefined && platformComponents.length < 1) {
            throw new ASN1SizeError("PlatformConfiguration-v3.platformComponents violates SIZE (1..MAX)");
        }
        if (platformProperties !== undefined && platformProperties.length < 1) {
            throw new ASN1SizeError("PlatformConfiguration-v3.platformProperties violates SIZE (1..MAX)");
        }
    }

    /**
     * @summary Restructures an object into a PlatformConfiguration_v3
     * @description
     * 
     * This takes an `object` and converts it to a `PlatformConfiguration_v3`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlatformConfiguration_v3`.
     * @returns {PlatformConfiguration_v3}
     */
    public static _from_object (_o: { [_K in keyof (PlatformConfiguration_v3)]: (PlatformConfiguration_v3)[_K] }): PlatformConfiguration_v3 {
        return new PlatformConfiguration_v3(_o.platformComponents, _o.platformProperties);
    }


}

/**
 * @summary The Leading Root Component Types of PlatformConfiguration_v3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlatformConfiguration_v3: $.ComponentSpec[] = [
    new $.ComponentSpec("platformComponents", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("platformProperties", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PlatformConfiguration_v3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlatformConfiguration_v3: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlatformConfiguration_v3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlatformConfiguration_v3: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlatformConfiguration_v3: $.ASN1Decoder<PlatformConfiguration_v3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlatformConfiguration_v3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlatformConfiguration_v3 (el: _Element): PlatformConfiguration_v3 {
    if (!_cached_decoder_for_PlatformConfiguration_v3) { _cached_decoder_for_PlatformConfiguration_v3 = function (el: _Element): PlatformConfiguration_v3 {
    let platformComponents: OPTIONAL<ComponentIdentifier[]>;
    let platformProperties: OPTIONAL<Property[]>;
    const callbacks: $.DecodingMap = {
        "platformComponents": (_el: _Element): void => { platformComponents = $._decode_implicit<ComponentIdentifier[]>(() => $._decodeSequenceOf<ComponentIdentifier>(() => _decode_ComponentIdentifier))(_el); },
        "platformProperties": (_el: _Element): void => { platformProperties = $._decode_implicit<Property[]>(() => $._decodeSequenceOf<Property>(() => _decode_Property))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlatformConfiguration_v3,
        _extension_additions_list_spec_for_PlatformConfiguration_v3,
        _root_component_type_list_2_spec_for_PlatformConfiguration_v3,
        undefined,
    );
    return new PlatformConfiguration_v3(
        platformComponents,
        platformProperties
    );
}; }
    return _cached_decoder_for_PlatformConfiguration_v3(el);
}

let _cached_encoder_for_PlatformConfiguration_v3: $.ASN1Encoder<PlatformConfiguration_v3> | null = null;

/**
 * @summary Encodes a(n) PlatformConfiguration_v3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlatformConfiguration_v3, encoded as an ASN.1 Element.
 */
export
function _encode_PlatformConfiguration_v3 (value: PlatformConfiguration_v3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlatformConfiguration_v3) { _cached_encoder_for_PlatformConfiguration_v3 = function (value: PlatformConfiguration_v3, elGetter: $.ASN1Encoder<PlatformConfiguration_v3>): _Element {
    const _components: _Element[] = [];
    if (value.platformComponents !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ComponentIdentifier>(() => _encode_ComponentIdentifier, $.BER), $.BER)(value.platformComponents, $.BER));
    }
    if (value.platformProperties !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Property>(() => _encode_Property, $.BER), $.BER)(value.platformProperties, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PlatformConfiguration_v3(value, elGetter);
}


/* eslint-enable */
