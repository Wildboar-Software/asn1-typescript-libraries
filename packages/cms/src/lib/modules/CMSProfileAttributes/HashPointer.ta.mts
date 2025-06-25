/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Pointers,
    _decode_Pointers,
    _encode_Pointers,
} from "../CMSProfileAttributes/Pointers.ta.mjs";
import {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../CryptographicMessageSyntax-2010/DigestedData.ta.mjs";

/**
 * @summary HashPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashPointer ::= SEQUENCE {
 * hash        DigestedData     OPTIONAL,
 * pointers    Pointers    OPTIONAL
 * } ((WITH COMPONENTS {...,hash PRESENT}) |
 *    (WITH COMPONENTS {...,pointers PRESENT}))
 * ```
 *
 * @class
 */
export class HashPointer {
    constructor(
        /**
         * @summary `hash`.
         * @public
         * @readonly
         */
        readonly hash: OPTIONAL<DigestedData>,
        /**
         * @summary `pointers`.
         * @public
         * @readonly
         */
        readonly pointers: OPTIONAL<Pointers>
    ) {}

    /**
     * @summary Restructures an object into a HashPointer
     * @description
     *
     * This takes an `object` and converts it to a `HashPointer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HashPointer`.
     * @returns {HashPointer}
     */
    public static _from_object(
        _o: { [_K in keyof HashPointer]: HashPointer[_K] }
    ): HashPointer {
        return new HashPointer(_o.hash, _o.pointers);
    }
}


/**
 * @summary The Leading Root Component Types of HashPointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HashPointer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hash",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "pointers",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of HashPointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HashPointer: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of HashPointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HashPointer: $.ComponentSpec[] = [];


let _cached_decoder_for_HashPointer: $.ASN1Decoder<HashPointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HashPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashPointer} The decoded data structure.
 */
export function _decode_HashPointer(el: _Element): HashPointer {
    if (!_cached_decoder_for_HashPointer) {
        _cached_decoder_for_HashPointer = function (el: _Element): HashPointer {
            let hash: OPTIONAL<DigestedData>;
            let pointers: OPTIONAL<Pointers>;
            const callbacks: $.DecodingMap = {
                hash: (_el: _Element): void => {
                    hash = _decode_DigestedData(_el);
                },
                pointers: (_el: _Element): void => {
                    pointers = _decode_Pointers(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HashPointer,
                _extension_additions_list_spec_for_HashPointer,
                _root_component_type_list_2_spec_for_HashPointer,
                undefined
            );
            return new HashPointer (
                hash,
                pointers
            );
        };
    }
    return _cached_decoder_for_HashPointer(el);
}


let _cached_encoder_for_HashPointer: $.ASN1Encoder<HashPointer> | null = null;


/**
 * @summary Encodes a(n) HashPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashPointer, encoded as an ASN.1 Element.
 */
export function _encode_HashPointer(
    value: HashPointer,
    elGetter: $.ASN1Encoder<HashPointer>
): _Element {
    if (!_cached_encoder_for_HashPointer) {
        _cached_encoder_for_HashPointer = function (
            value: HashPointer        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.hash === undefined
                            ? undefined
                            : _encode_DigestedData(value.hash, $.DER),
                        /* IF_ABSENT  */ value.pointers === undefined
                            ? undefined
                            : _encode_Pointers(value.pointers, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_HashPointer(value, elGetter);
}


/* eslint-enable */
