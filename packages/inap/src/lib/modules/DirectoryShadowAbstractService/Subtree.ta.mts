/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { TotalRefresh, _decode_TotalRefresh, _encode_TotalRefresh } from "../DirectoryShadowAbstractService/TotalRefresh.ta.mjs";
import { SDSEContent, _decode_SDSEContent, _encode_SDSEContent } from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
// export { SDSEContent, _decode_SDSEContent, _encode_SDSEContent } from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Subtree
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Subtree ::= SEQUENCE {
 *   rdn  RelativeDistinguishedName,
 *   COMPONENTS OF TotalRefresh
 * }
 * ```
 * 
 * @class
 */
export
class Subtree {
    /**
     * @summary `rdn`.
     * @public
     * @readonly
     */
    readonly rdn: RelativeDistinguishedName;
    /**
     * @summary `sDSE`.
     * @public
     * @readonly
     */
    readonly sDSE: OPTIONAL<SDSEContent> /* REPLICATED_COMPONENT */;
    /**
     * @summary `subtree`.
     * @public
     * @readonly
     */
    readonly subtree: OPTIONAL<Subtree[]> /* REPLICATED_COMPONENT */;

    constructor (
        rdn: RelativeDistinguishedName,
        sDSE: OPTIONAL<SDSEContent> /* REPLICATED_COMPONENT */,
        subtree: OPTIONAL<Subtree[]> /* REPLICATED_COMPONENT */
    ) {
        this.rdn = rdn;
        this.sDSE = sDSE;
        this.subtree = subtree;
    }

    /**
     * @summary Restructures an object into a Subtree
     * @description
     * 
     * This takes an `object` and converts it to a `Subtree`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Subtree`.
     * @returns {Subtree}
     */
    public static _from_object (_o: { [_K in keyof (Subtree)]: (Subtree)[_K] }): Subtree {
        return new Subtree(_o.rdn, _o.sDSE, _o.subtree);
    }


}

/**
 * @summary The Leading Root Component Types of Subtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Subtree: $.ComponentSpec[] = [
    new $.ComponentSpec("rdn", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("sDSE", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("subtree", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Subtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Subtree: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Subtree
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Subtree: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Subtree: $.ASN1Decoder<Subtree> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Subtree
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Subtree (el: _Element): Subtree {
    if (!_cached_decoder_for_Subtree) { _cached_decoder_for_Subtree = function (el: _Element): Subtree {
    let rdn!: RelativeDistinguishedName;
    let sDSE: OPTIONAL<SDSEContent>;
    let subtree: OPTIONAL<Subtree[]>;
    const callbacks: $.DecodingMap = {
        "rdn": (_el: _Element): void => { rdn = _decode_RelativeDistinguishedName(_el); },
        "sDSE": (_el: _Element): void => { sDSE = _decode_SDSEContent(_el); },
        "subtree": (_el: _Element): void => { subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Subtree,
        _extension_additions_list_spec_for_Subtree,
        _root_component_type_list_2_spec_for_Subtree,
        undefined,
    );
    return new Subtree(
        rdn,
        sDSE,
        subtree
    );
}; }
    return _cached_decoder_for_Subtree(el);
}

let _cached_encoder_for_Subtree: $.ASN1Encoder<Subtree> | null = null;

/**
 * @summary Encodes a(n) Subtree into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Subtree, encoded as an ASN.1 Element.
 */
export
function _encode_Subtree (value: Subtree, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Subtree) { _cached_encoder_for_Subtree = function (value: Subtree, elGetter: $.ASN1Encoder<Subtree>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_RelativeDistinguishedName(value.rdn, $.BER));
    if (value.sDSE !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SDSEContent(value.sDSE, $.BER));
    }
    if (value.subtree !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<Subtree>(() => _encode_Subtree, $.BER)(value.subtree, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Subtree(value, elGetter);
}


/* eslint-enable */
