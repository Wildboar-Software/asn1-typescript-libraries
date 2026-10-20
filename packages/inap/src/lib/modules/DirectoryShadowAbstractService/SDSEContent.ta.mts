/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDSEType, _decode_SDSEType, _encode_SDSEType } from "../DirectoryShadowAbstractService/SDSEType.ta.mjs";
// export { SDSEType, _decode_SDSEType, _encode_SDSEType } from "../DirectoryShadowAbstractService/SDSEType.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary SDSEContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDSEContent ::= SEQUENCE {
 *   sDSEType     SDSEType,
 *   subComplete  [0]  BOOLEAN DEFAULT FALSE,
 *   attComplete  [1]  BOOLEAN OPTIONAL,
 *   attributes   SET OF Attribute
 * }
 * ```
 * 
 * @class
 */
export
class SDSEContent {
    /**
     * @summary `sDSEType`.
     * @public
     * @readonly
     */
    readonly sDSEType: SDSEType;
    /**
     * @summary `subComplete`.
     * @public
     * @readonly
     */
    readonly subComplete: OPTIONAL<BOOLEAN>;
    /**
     * @summary `attComplete`.
     * @public
     * @readonly
     */
    readonly attComplete: OPTIONAL<BOOLEAN>;
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: Attribute[];

    constructor (
        sDSEType: SDSEType,
        subComplete: OPTIONAL<BOOLEAN>,
        attComplete: OPTIONAL<BOOLEAN>,
        attributes: Attribute[]
    ) {
        this.sDSEType = sDSEType;
        this.subComplete = subComplete;
        this.attComplete = attComplete;
        this.attributes = attributes;
    }

    /**
     * @summary Restructures an object into a SDSEContent
     * @description
     * 
     * This takes an `object` and converts it to a `SDSEContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDSEContent`.
     * @returns {SDSEContent}
     */
    public static _from_object (_o: { [_K in keyof (SDSEContent)]: (SDSEContent)[_K] }): SDSEContent {
        return new SDSEContent(_o.sDSEType, _o.subComplete, _o.attComplete, _o.attributes);
    }

    /**
     * @summary Getter that returns the default value for `subComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subComplete () { return false; }
}

/**
 * @summary The Leading Root Component Types of SDSEContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SDSEContent: $.ComponentSpec[] = [
    /* FIXME: sDSEType COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("subComplete", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attComplete", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of SDSEContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SDSEContent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SDSEContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SDSEContent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SDSEContent: $.ASN1Decoder<SDSEContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDSEContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDSEContent (el: _Element): SDSEContent {
    if (!_cached_decoder_for_SDSEContent) { _cached_decoder_for_SDSEContent = function (el: _Element): SDSEContent {
    let sDSEType!: SDSEType;
    let subComplete: OPTIONAL<BOOLEAN> = SDSEContent._default_value_for_subComplete;
    let attComplete: OPTIONAL<BOOLEAN>;
    let attributes!: Attribute[];
    const callbacks: $.DecodingMap = {
        "sDSEType": (_el: _Element): void => { sDSEType = _decode_SDSEType(_el); },
        "subComplete": (_el: _Element): void => { subComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "attComplete": (_el: _Element): void => { attComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decodeSetOf<Attribute>(() => _decode_Attribute)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SDSEContent,
        _extension_additions_list_spec_for_SDSEContent,
        _root_component_type_list_2_spec_for_SDSEContent,
        undefined,
    );
    return new SDSEContent(
        sDSEType,
        subComplete,
        attComplete,
        attributes
    );
}; }
    return _cached_decoder_for_SDSEContent(el);
}

let _cached_encoder_for_SDSEContent: $.ASN1Encoder<SDSEContent> | null = null;

/**
 * @summary Encodes a(n) SDSEContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEContent, encoded as an ASN.1 Element.
 */
export
function _encode_SDSEContent (value: SDSEContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDSEContent) { _cached_encoder_for_SDSEContent = function (value: SDSEContent, elGetter: $.ASN1Encoder<SDSEContent>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_SDSEType(value.sDSEType, $.BER));
    if (value.subComplete !== undefined && !$.deepEq(value.subComplete, SDSEContent._default_value_for_subComplete)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.subComplete, $.BER));
    }
    if (value.attComplete !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.attComplete, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER)(value.attributes, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SDSEContent(value, elGetter);
}


/* eslint-enable */
