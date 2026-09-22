/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { VariantClass, _decode_VariantClass, _encode_VariantClass } from "../RecordSyntax-explain/VariantClass.ta.mjs";
// export { VariantClass, _decode_VariantClass, _encode_VariantClass } from "../RecordSyntax-explain/VariantClass.ta.mjs";


/**
 * @summary VariantSetInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariantSetInfo ::= SEQUENCE {
 *       -- A record in this category describes a variant set definition, i.e.,
 *       -- classes, types, and values, for a specific variant set definition
 *       -- supported by the target. Support by the target of a particular
 *       -- variant set definition does not imply that the definition is
 *       -- supported for any specific database or element. 
 *   commonInfo    [0] IMPLICIT CommonInfo OPTIONAL,
 *    -- Key elements follow:
 *   variantSet    [1] IMPLICIT OBJECT IDENTIFIER,
 *    -- Non-key brief elements follow:
 *   name          [2] IMPLICIT InternationalString,
 *    -- Non-brief elements follow:
 *   variants      [3] IMPLICIT SEQUENCE OF VariantClass OPTIONAL
 *                       -- mandatory in full record
 *                 }
 * ```
 * 
 * @class
 */
export
class VariantSetInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `variantSet`.
         * @public
         * @readonly
         */
        readonly variantSet: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `variants`.
         * @public
         * @readonly
         */
        readonly variants: OPTIONAL<VariantClass[]>
    ) {}

    /**
     * @summary Restructures an object into a VariantSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `VariantSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariantSetInfo`.
     * @returns {VariantSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (VariantSetInfo)]: (VariantSetInfo)[_K] }): VariantSetInfo {
        return new VariantSetInfo(_o.commonInfo, _o.variantSet, _o.name, _o.variants);
    }


}

/**
 * @summary The Leading Root Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("variantSet", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("variants", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariantSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariantSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariantSetInfo: $.ASN1Decoder<VariantSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariantSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariantSetInfo (el: _Element): VariantSetInfo {
    if (!_cached_decoder_for_VariantSetInfo) { _cached_decoder_for_VariantSetInfo = function (el: _Element): VariantSetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let variantSet!: OBJECT_IDENTIFIER;
    let name!: InternationalString;
    let variants: OPTIONAL<VariantClass[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "variantSet": (_el: _Element): void => { variantSet = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "variants": (_el: _Element): void => { variants = $._decode_implicit<VariantClass[]>(() => $._decodeSequenceOf<VariantClass>(() => _decode_VariantClass))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VariantSetInfo,
        _extension_additions_list_spec_for_VariantSetInfo,
        _root_component_type_list_2_spec_for_VariantSetInfo,
        undefined,
    );
    return new VariantSetInfo(
        commonInfo,
        variantSet,
        name,
        variants
    );
}; }
    return _cached_decoder_for_VariantSetInfo(el);
}

let _cached_encoder_for_VariantSetInfo: $.ASN1Encoder<VariantSetInfo> | null = null;

/**
 * @summary Encodes a(n) VariantSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariantSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_VariantSetInfo (value: VariantSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariantSetInfo) { _cached_encoder_for_VariantSetInfo = function (value: VariantSetInfo, elGetter: $.ASN1Encoder<VariantSetInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.variantSet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.variants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<VariantClass>(() => _encode_VariantClass, $.BER), $.BER)(value.variants, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VariantSetInfo(value, elGetter);
}


/* eslint-enable */
