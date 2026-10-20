/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { MAP_EXTENSION } from "../LCSChargingDataTypes/MAP-EXTENSION.oca.mjs";
// export { ExtensionSet } from "../LCSChargingDataTypes/ExtensionSet.osa.mjs";


/**
 * @summary PrivateExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateExtension ::= SEQUENCE {
 *    extId      MAP-EXTENSION.&extensionId ({ExtensionSet}) ,
 *    extType    MAP-EXTENSION.&ExtensionType ({ExtensionSet}{@extId})  OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PrivateExtension {
    /**
     * @summary `extId`.
     * @public
     * @readonly
     */
    readonly extId: OBJECT_IDENTIFIER;
    /**
     * @summary `extType`.
     * @public
     * @readonly
     */
    readonly extType: OPTIONAL<_Element>;

    constructor (
        extId: OBJECT_IDENTIFIER,
        extType: OPTIONAL<_Element>
    ) {
        this.extId = extId;
        this.extType = extType;
    }

    /**
     * @summary Restructures an object into a PrivateExtension
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateExtension`.
     * @returns {PrivateExtension}
     */
    public static _from_object (_o: { [_K in keyof (PrivateExtension)]: (PrivateExtension)[_K] }): PrivateExtension {
        return new PrivateExtension(_o.extId, _o.extType);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("extId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("extType", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PrivateExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateExtension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateExtension: $.ASN1Decoder<PrivateExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateExtension (el: _Element): PrivateExtension {
    if (!_cached_decoder_for_PrivateExtension) { _cached_decoder_for_PrivateExtension = function (el: _Element): PrivateExtension {
    let extId!: OBJECT_IDENTIFIER;
    let extType: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "extId": (_el: _Element): void => { extId = $._decodeObjectIdentifier(_el); },
        "extType": (_el: _Element): void => { extType = $._decodeAny(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateExtension,
        _extension_additions_list_spec_for_PrivateExtension,
        _root_component_type_list_2_spec_for_PrivateExtension,
        undefined,
    );
    return new PrivateExtension(
        extId,
        extType
    );
}; }
    return _cached_decoder_for_PrivateExtension(el);
}

let _cached_encoder_for_PrivateExtension: $.ASN1Encoder<PrivateExtension> | null = null;

/**
 * @summary Encodes a(n) PrivateExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateExtension, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateExtension (value: PrivateExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateExtension) { _cached_encoder_for_PrivateExtension = function (value: PrivateExtension, elGetter: $.ASN1Encoder<PrivateExtension>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.extId, $.BER));
    if (value.extType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeAny(value.extType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PrivateExtension(value, elGetter);
}


/* eslint-enable */
