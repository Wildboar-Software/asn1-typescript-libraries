/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContentChange_rename, _decode_ContentChange_rename, _encode_ContentChange_rename } from "../DirectoryShadowAbstractService/ContentChange-rename.ta.mjs";
// export { ContentChange_rename, _decode_ContentChange_rename, _encode_ContentChange_rename } from "../DirectoryShadowAbstractService/ContentChange-rename.ta.mjs";
import { ContentChange_attributeChanges, _decode_ContentChange_attributeChanges, _encode_ContentChange_attributeChanges } from "../DirectoryShadowAbstractService/ContentChange-attributeChanges.ta.mjs";
// export { ContentChange_attributeChanges, _decode_ContentChange_attributeChanges, _encode_ContentChange_attributeChanges } from "../DirectoryShadowAbstractService/ContentChange-attributeChanges.ta.mjs";
import { SDSEType, _decode_SDSEType, _encode_SDSEType } from "../DirectoryShadowAbstractService/SDSEType.ta.mjs";
// export { SDSEType, _decode_SDSEType, _encode_SDSEType } from "../DirectoryShadowAbstractService/SDSEType.ta.mjs";


/**
 * @summary ContentChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentChange ::= SEQUENCE {
 *   rename
 *     CHOICE {newRDN  RelativeDistinguishedName,
 *             newDN   DistinguishedName} OPTIONAL,
 *   attributeChanges
 *     CHOICE {replace  [0]  SET OF Attribute,
 *             changes  [1]  SEQUENCE OF EntryModification} OPTIONAL,
 *   sDSEType          SDSEType,
 *   subComplete       [2]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [3]  BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ContentChange {
    /**
     * @summary `rename`.
     * @public
     * @readonly
     */
    readonly rename: OPTIONAL<ContentChange_rename>;
    /**
     * @summary `attributeChanges`.
     * @public
     * @readonly
     */
    readonly attributeChanges: OPTIONAL<ContentChange_attributeChanges>;
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

    constructor (
        rename: OPTIONAL<ContentChange_rename>,
        attributeChanges: OPTIONAL<ContentChange_attributeChanges>,
        sDSEType: SDSEType,
        subComplete: OPTIONAL<BOOLEAN>,
        attComplete: OPTIONAL<BOOLEAN>
    ) {
        this.rename = rename;
        this.attributeChanges = attributeChanges;
        this.sDSEType = sDSEType;
        this.subComplete = subComplete;
        this.attComplete = attComplete;
    }

    /**
     * @summary Restructures an object into a ContentChange
     * @description
     * 
     * This takes an `object` and converts it to a `ContentChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentChange`.
     * @returns {ContentChange}
     */
    public static _from_object (_o: { [_K in keyof (ContentChange)]: (ContentChange)[_K] }): ContentChange {
        return new ContentChange(_o.rename, _o.attributeChanges, _o.sDSEType, _o.subComplete, _o.attComplete);
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
 * @summary The Leading Root Component Types of ContentChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContentChange: $.ComponentSpec[] = [
    new $.ComponentSpec("rename", true, $.or($.hasTag(_TagClass.universal, 17), $.hasTag(_TagClass.universal, 16))),
    new $.ComponentSpec("attributeChanges", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    /* FIXME: sDSEType COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("subComplete", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attComplete", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ContentChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContentChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContentChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContentChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContentChange: $.ASN1Decoder<ContentChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContentChange (el: _Element): ContentChange {
    if (!_cached_decoder_for_ContentChange) { _cached_decoder_for_ContentChange = function (el: _Element): ContentChange {
    let rename: OPTIONAL<ContentChange_rename>;
    let attributeChanges: OPTIONAL<ContentChange_attributeChanges>;
    let sDSEType!: SDSEType;
    let subComplete: OPTIONAL<BOOLEAN> = ContentChange._default_value_for_subComplete;
    let attComplete: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "rename": (_el: _Element): void => { rename = _decode_ContentChange_rename(_el); },
        "attributeChanges": (_el: _Element): void => { attributeChanges = _decode_ContentChange_attributeChanges(_el); },
        "sDSEType": (_el: _Element): void => { sDSEType = _decode_SDSEType(_el); },
        "subComplete": (_el: _Element): void => { subComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "attComplete": (_el: _Element): void => { attComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContentChange,
        _extension_additions_list_spec_for_ContentChange,
        _root_component_type_list_2_spec_for_ContentChange,
        undefined,
    );
    return new ContentChange(
        rename,
        attributeChanges,
        sDSEType,
        subComplete,
        attComplete
    );
}; }
    return _cached_decoder_for_ContentChange(el);
}

let _cached_encoder_for_ContentChange: $.ASN1Encoder<ContentChange> | null = null;

/**
 * @summary Encodes a(n) ContentChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange, encoded as an ASN.1 Element.
 */
export
function _encode_ContentChange (value: ContentChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContentChange) { _cached_encoder_for_ContentChange = function (value: ContentChange, elGetter: $.ASN1Encoder<ContentChange>): _Element {
    const _components: _Element[] = [];
    if (value.rename !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ContentChange_rename(value.rename, $.BER));
    }
    if (value.attributeChanges !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ContentChange_attributeChanges(value.attributeChanges, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_SDSEType(value.sDSEType, $.BER));
    if (value.subComplete !== undefined && !$.deepEq(value.subComplete, ContentChange._default_value_for_subComplete)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.subComplete, $.BER));
    }
    if (value.attComplete !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.attComplete, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContentChange(value, elGetter);
}


/* eslint-enable */
