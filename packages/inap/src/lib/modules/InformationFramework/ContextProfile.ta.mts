/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
// export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa.mjs";


/**
 * @summary ContextProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextProfile ::= SEQUENCE {
 *   contextType   CONTEXT.&id({SupportedContexts}),
 *   contextValue
 *     SEQUENCE SIZE (1..MAX) OF
 *       CONTEXT.&Assertion({SupportedContexts}{@contextType}) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ContextProfile {
    /**
     * @summary `contextType`.
     * @public
     * @readonly
     */
    readonly contextType: OBJECT_IDENTIFIER;
    /**
     * @summary `contextValue`.
     * @public
     * @readonly
     */
    readonly contextValue: OPTIONAL<_Element[]>;

    constructor (
        contextType: OBJECT_IDENTIFIER,
        contextValue: OPTIONAL<_Element[]>
    ) {
        this.contextType = contextType;
        this.contextValue = contextValue;
    }

    /**
     * @summary Restructures an object into a ContextProfile
     * @description
     * 
     * This takes an `object` and converts it to a `ContextProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextProfile`.
     * @returns {ContextProfile}
     */
    public static _from_object (_o: { [_K in keyof (ContextProfile)]: (ContextProfile)[_K] }): ContextProfile {
        return new ContextProfile(_o.contextType, _o.contextValue);
    }


}

/**
 * @summary The Leading Root Component Types of ContextProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContextProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("contextType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("contextValue", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ContextProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContextProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContextProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContextProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContextProfile: $.ASN1Decoder<ContextProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextProfile (el: _Element): ContextProfile {
    if (!_cached_decoder_for_ContextProfile) { _cached_decoder_for_ContextProfile = function (el: _Element): ContextProfile {
    let contextType!: OBJECT_IDENTIFIER;
    let contextValue: OPTIONAL<_Element[]>;
    const callbacks: $.DecodingMap = {
        "contextType": (_el: _Element): void => { contextType = $._decodeObjectIdentifier(_el); },
        "contextValue": (_el: _Element): void => { contextValue = $._decodeSequenceOf<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContextProfile,
        _extension_additions_list_spec_for_ContextProfile,
        _root_component_type_list_2_spec_for_ContextProfile,
        undefined,
    );
    return new ContextProfile(
        contextType,
        contextValue
    );
}; }
    return _cached_decoder_for_ContextProfile(el);
}

let _cached_encoder_for_ContextProfile: $.ASN1Encoder<ContextProfile> | null = null;

/**
 * @summary Encodes a(n) ContextProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextProfile, encoded as an ASN.1 Element.
 */
export
function _encode_ContextProfile (value: ContextProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextProfile) { _cached_encoder_for_ContextProfile = function (value: ContextProfile, elGetter: $.ASN1Encoder<ContextProfile>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.contextType, $.BER));
    if (value.contextValue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSequenceOf<_Element>(() => $._encodeAny, $.BER)(value.contextValue, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContextProfile(value, elGetter);
}


/* eslint-enable */
