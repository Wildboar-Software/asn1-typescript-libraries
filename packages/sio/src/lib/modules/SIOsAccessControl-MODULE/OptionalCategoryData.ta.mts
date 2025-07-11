/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OptionalCategoryData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalCategoryData ::= SEQUENCE {
 *   optCatDataId  OC-DATA.&id({CatData}),
 *   categorydata  OC-DATA.&Type({CatData}{@optCatDataId})
 * }
 * ```
 *
 */
export class OptionalCategoryData {
    constructor(
        /**
         * @summary `optCatDataId`.
         * @public
         * @readonly
         */
        readonly optCatDataId: OBJECT_IDENTIFIER,
        /**
         * @summary `categorydata`.
         * @public
         * @readonly
         */
        readonly categorydata: _Element
    ) {}

    /**
     * @summary Restructures an object into a OptionalCategoryData
     * @description
     *
     * This takes an `object` and converts it to a `OptionalCategoryData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalCategoryData`.
     * @returns {OptionalCategoryData}
     */
    public static _from_object(
        _o: { [_K in keyof OptionalCategoryData]: OptionalCategoryData[_K] }
    ): OptionalCategoryData {
        return new OptionalCategoryData(_o.optCatDataId, _o.categorydata);
    }
}


/**
 * @summary The Leading Root Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalCategoryData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "optCatDataId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "categorydata",
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalCategoryData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalCategoryData: $.ComponentSpec[] = [];


let _cached_decoder_for_OptionalCategoryData: $.ASN1Decoder<OptionalCategoryData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OptionalCategoryData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalCategoryData} The decoded data structure.
 */
export function _decode_OptionalCategoryData(el: _Element): OptionalCategoryData {
    if (!_cached_decoder_for_OptionalCategoryData) {
        _cached_decoder_for_OptionalCategoryData = function (
            el: _Element
        ): OptionalCategoryData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OptionalCategoryData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "optCatDataId";
            sequence[1].name = "categorydata";
            let optCatDataId!: OBJECT_IDENTIFIER;
            let categorydata!: _Element;
            optCatDataId = $._decodeObjectIdentifier(sequence[0]);
            categorydata = $._decodeAny(sequence[1]);
            return new OptionalCategoryData(optCatDataId, categorydata);
        };
    }
    return _cached_decoder_for_OptionalCategoryData(el);
}


let _cached_encoder_for_OptionalCategoryData: $.ASN1Encoder<OptionalCategoryData> | null = null;


/**
 * @summary Encodes a(n) OptionalCategoryData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalCategoryData, encoded as an ASN.1 Element.
 */
export function _encode_OptionalCategoryData(
    value: OptionalCategoryData,
    elGetter: $.ASN1Encoder<OptionalCategoryData>
): _Element {
    if (!_cached_encoder_for_OptionalCategoryData) {
        _cached_encoder_for_OptionalCategoryData = function (
            value: OptionalCategoryData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.optCatDataId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.categorydata,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OptionalCategoryData(value, elGetter);
}


/* eslint-enable */
