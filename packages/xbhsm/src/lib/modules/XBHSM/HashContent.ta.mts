/* eslint-disable */
import {
    BIT_STRING,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HashContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashContent ::= SEQUENCE {
 *         bR        PrintableString,
 *         randomNum    BIT STRING
 *         }
 * ```
 *
 * @class
 */
export class HashContent {
    constructor(
        /**
         * @summary `bR`.
         * @public
         * @readonly
         */
        readonly bR: PrintableString,
        /**
         * @summary `randomNum`.
         * @public
         * @readonly
         */
        readonly randomNum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a HashContent
     * @description
     *
     * This takes an `object` and converts it to a `HashContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HashContent`.
     * @returns {HashContent}
     */
    public static _from_object(
        _o: { [_K in keyof HashContent]: HashContent[_K] }
    ): HashContent {
        return new HashContent(_o.bR, _o.randomNum);
    }
}

/**
 * @summary The Leading Root Component Types of HashContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HashContent: $.ComponentSpec[] =
    [
        new $.ComponentSpec("bR", false, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("randomNum", false, $.hasTag(_TagClass.context, 1)),
    ];

/**
 * @summary The Trailing Root Component Types of HashContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HashContent: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of HashContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HashContent: $.ComponentSpec[] =
    [];

let _cached_decoder_for_HashContent: $.ASN1Decoder<HashContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export function _decode_HashContent(el: _Element): HashContent {
    if (!_cached_decoder_for_HashContent) {
        _cached_decoder_for_HashContent = function (
            el: _Element
        ): HashContent {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "HashContent contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "bR";
            sequence[1].name = "randomNum";
            const bR: PrintableString = $._decodePrintableString(sequence[0]);
            const randomNum: BIT_STRING = $._decodeBitString(sequence[1]);
            return new HashContent(bR, randomNum);
        };
    }
    return _cached_decoder_for_HashContent(el);
}

let _cached_encoder_for_HashContent: $.ASN1Encoder<HashContent> | null = null;

/**
 * @summary Encodes a(n) HashContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashContent, encoded as an ASN.1 Element.
 */
export function _encode_HashContent(
    value: HashContent,
    elGetter: $.ASN1Encoder<HashContent>
): _Element {
    if (!_cached_encoder_for_HashContent) {
        _cached_encoder_for_HashContent = function (
            value: HashContent
        ): _Element {
            return $._encodeSequence(
                (
                    [
                        /* REQUIRED   */ $._encodePrintableString(
                            value.bR,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.randomNum,
                            $.BER
                        ),
                    ] as (_Element | undefined)[]
                ).filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_HashContent(value, elGetter);
}

/* eslint-enable */
