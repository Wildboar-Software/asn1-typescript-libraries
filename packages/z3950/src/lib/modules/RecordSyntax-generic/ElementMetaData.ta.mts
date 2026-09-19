/* eslint-disable */
import {
    EXTERNAL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Order, _decode_Order, _encode_Order } from "../RecordSyntax-generic/Order.ta.mjs";
// export { Order, _decode_Order, _encode_Order } from "../RecordSyntax-generic/Order.ta.mjs";
import { Usage, _decode_Usage, _encode_Usage } from "../RecordSyntax-generic/Usage.ta.mjs";
// export { Usage, _decode_Usage, _encode_Usage } from "../RecordSyntax-generic/Usage.ta.mjs";
import { HitVector, _decode_HitVector, _encode_HitVector } from "../RecordSyntax-generic/HitVector.ta.mjs";
// export { HitVector, _decode_HitVector, _encode_HitVector } from "../RecordSyntax-generic/HitVector.ta.mjs";
import { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
// export { Variant, _decode_Variant, _encode_Variant } from "../RecordSyntax-generic/Variant.ta.mjs";
import { TagPath, _decode_TagPath, _encode_TagPath } from "../RecordSyntax-generic/TagPath.ta.mjs";
// export { TagPath, _decode_TagPath, _encode_TagPath } from "../RecordSyntax-generic/TagPath.ta.mjs";


/**
 * @summary ElementMetaData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementMetaData ::= SEQUENCE{
 *    seriesOrder        [1]    IMPLICIT Order OPTIONAL, 
 *                                 -- only for a non-leaf node
 *    usageRight         [2]    IMPLICIT Usage OPTIONAL,
 *    hits               [3]    IMPLICIT SEQUENCE OF HitVector OPTIONAL,
 *    displayName        [4]    IMPLICIT InternationalString OPTIONAL, 
 *                                 -- name for element that origin can use for
 *                                 -- display
 *    supportedVariants  [5]    IMPLICIT SEQUENCE OF Variant OPTIONAL,
 *    message            [6]    IMPLICIT InternationalString OPTIONAL,
 *    elementDescriptor  [7]    IMPLICIT OCTET STRING OPTIONAL,
 *    surrogateFor       [8]    IMPLICIT TagPath OPTIONAL,  
 *                                 -- the retrieved element is a surrogate for the
 *                                 -- element given by this path
 *    surrogateElement   [9]    IMPLICIT TagPath OPTIONAL,
 *                                 -- the element given by this path is a
 *                                 -- surrogate for the retrieved element
 *      other            [99]   IMPLICIT EXTERNAL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ElementMetaData {
    constructor (
        /**
         * @summary `seriesOrder`.
         * @public
         * @readonly
         */
        readonly seriesOrder: OPTIONAL<Order>,
        /**
         * @summary `usageRight`.
         * @public
         * @readonly
         */
        readonly usageRight: OPTIONAL<Usage>,
        /**
         * @summary `hits`.
         * @public
         * @readonly
         */
        readonly hits: OPTIONAL<HitVector[]>,
        /**
         * @summary `displayName`.
         * @public
         * @readonly
         */
        readonly displayName: OPTIONAL<InternationalString>,
        /**
         * @summary `supportedVariants`.
         * @public
         * @readonly
         */
        readonly supportedVariants: OPTIONAL<Variant[]>,
        /**
         * @summary `message`.
         * @public
         * @readonly
         */
        readonly message: OPTIONAL<InternationalString>,
        /**
         * @summary `elementDescriptor`.
         * @public
         * @readonly
         */
        readonly elementDescriptor: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `surrogateFor`.
         * @public
         * @readonly
         */
        readonly surrogateFor: OPTIONAL<TagPath>,
        /**
         * @summary `surrogateElement`.
         * @public
         * @readonly
         */
        readonly surrogateElement: OPTIONAL<TagPath>,
        /**
         * @summary `other`.
         * @public
         * @readonly
         */
        readonly other: OPTIONAL<EXTERNAL>
    ) {}

    /**
     * @summary Restructures an object into a ElementMetaData
     * @description
     * 
     * This takes an `object` and converts it to a `ElementMetaData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementMetaData`.
     * @returns {ElementMetaData}
     */
    public static _from_object (_o: { [_K in keyof (ElementMetaData)]: (ElementMetaData)[_K] }): ElementMetaData {
        return new ElementMetaData(_o.seriesOrder, _o.usageRight, _o.hits, _o.displayName, _o.supportedVariants, _o.message, _o.elementDescriptor, _o.surrogateFor, _o.surrogateElement, _o.other);
    }


}

/**
 * @summary The Leading Root Component Types of ElementMetaData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementMetaData: $.ComponentSpec[] = [
    new $.ComponentSpec("seriesOrder", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("usageRight", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hits", true, $.hasTag(_TagClass.context, 3)),
    /* FIXME: displayName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("supportedVariants", true, $.hasTag(_TagClass.context, 5)),
    /* FIXME: message COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("elementDescriptor", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("surrogateFor", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("surrogateElement", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("other", true, $.hasTag(_TagClass.context, 99))
];

/**
 * @summary The Trailing Root Component Types of ElementMetaData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementMetaData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementMetaData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementMetaData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementMetaData: $.ASN1Decoder<ElementMetaData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementMetaData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementMetaData (el: _Element): ElementMetaData {
    if (!_cached_decoder_for_ElementMetaData) { _cached_decoder_for_ElementMetaData = function (el: _Element): ElementMetaData {
    let seriesOrder: OPTIONAL<Order>;
    let usageRight: OPTIONAL<Usage>;
    let hits: OPTIONAL<HitVector[]>;
    let displayName: OPTIONAL<InternationalString>;
    let supportedVariants: OPTIONAL<Variant[]>;
    let message: OPTIONAL<InternationalString>;
    let elementDescriptor: OPTIONAL<OCTET_STRING>;
    let surrogateFor: OPTIONAL<TagPath>;
    let surrogateElement: OPTIONAL<TagPath>;
    let other: OPTIONAL<EXTERNAL>;
    const callbacks: $.DecodingMap = {
        "seriesOrder": (_el: _Element): void => { seriesOrder = $._decode_implicit<Order>(() => _decode_Order)(_el); },
        "usageRight": (_el: _Element): void => { usageRight = $._decode_implicit<Usage>(() => _decode_Usage)(_el); },
        "hits": (_el: _Element): void => { hits = $._decode_implicit<HitVector[]>(() => $._decodeSequenceOf<HitVector>(() => _decode_HitVector))(_el); },
        "displayName": (_el: _Element): void => { displayName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "supportedVariants": (_el: _Element): void => { supportedVariants = $._decode_implicit<Variant[]>(() => $._decodeSequenceOf<Variant>(() => _decode_Variant))(_el); },
        "message": (_el: _Element): void => { message = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "elementDescriptor": (_el: _Element): void => { elementDescriptor = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "surrogateFor": (_el: _Element): void => { surrogateFor = $._decode_implicit<TagPath>(() => _decode_TagPath)(_el); },
        "surrogateElement": (_el: _Element): void => { surrogateElement = $._decode_implicit<TagPath>(() => _decode_TagPath)(_el); },
        "other": (_el: _Element): void => { other = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementMetaData,
        _extension_additions_list_spec_for_ElementMetaData,
        _root_component_type_list_2_spec_for_ElementMetaData,
        undefined,
    );
    return new ElementMetaData(
        seriesOrder,
        usageRight,
        hits,
        displayName,
        supportedVariants,
        message,
        elementDescriptor,
        surrogateFor,
        surrogateElement,
        other
    );
}; }
    return _cached_decoder_for_ElementMetaData(el);
}

let _cached_encoder_for_ElementMetaData: $.ASN1Encoder<ElementMetaData> | null = null;

/**
 * @summary Encodes a(n) ElementMetaData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementMetaData, encoded as an ASN.1 Element.
 */
export
function _encode_ElementMetaData (value: ElementMetaData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementMetaData) { _cached_encoder_for_ElementMetaData = function (value: ElementMetaData, elGetter: $.ASN1Encoder<ElementMetaData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.seriesOrder === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Order, $.BER)(value.seriesOrder, $.BER)),
            /* IF_ABSENT  */ ((value.usageRight === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Usage, $.BER)(value.usageRight, $.BER)),
            /* IF_ABSENT  */ ((value.hits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<HitVector>(() => _encode_HitVector, $.BER), $.BER)(value.hits, $.BER)),
            /* IF_ABSENT  */ ((value.displayName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.displayName, $.BER)),
            /* IF_ABSENT  */ ((value.supportedVariants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Variant>(() => _encode_Variant, $.BER), $.BER)(value.supportedVariants, $.BER)),
            /* IF_ABSENT  */ ((value.message === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_InternationalString, $.BER)(value.message, $.BER)),
            /* IF_ABSENT  */ ((value.elementDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.elementDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.surrogateFor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TagPath, $.BER)(value.surrogateFor, $.BER)),
            /* IF_ABSENT  */ ((value.surrogateElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TagPath, $.BER)(value.surrogateElement, $.BER)),
            /* IF_ABSENT  */ ((value.other === undefined) ? undefined : $._encode_implicit(_TagClass.context, 99, () => $._encodeExternal, $.BER)(value.other, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ElementMetaData(value, elGetter);
}


/* eslint-enable */
