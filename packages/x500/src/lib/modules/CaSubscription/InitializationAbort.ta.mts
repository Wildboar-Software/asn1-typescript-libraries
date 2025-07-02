/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InitializationAbort_diag,
    _decode_InitializationAbort_diag,
    _encode_InitializationAbort_diag,
    _enum_for_InitializationAbort_diag,
} from "../CaSubscription/InitializationAbort-diag.ta.mjs";
/**
 * @summary InitializationAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort ::= SEQUENCE {
 *   diag        ENUMERATED {
 *     unsupportedVersion       (0),
 *     onlySingleVersionAllowed (1),
 *     ... },
 *   ... }
 * ```
 *
 */
export class InitializationAbort {
    constructor(
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: InitializationAbort_diag,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationAbort
     * @description
     *
     * This takes an `object` and converts it to a `InitializationAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationAbort`.
     * @returns {InitializationAbort}
     */
    public static _from_object(
        _o: { [_K in keyof InitializationAbort]: InitializationAbort[_K] }
    ): InitializationAbort {
        return new InitializationAbort(_o.diag, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_InitializationAbort_diag;
}

/**
 * @summary The Leading Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "diag",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationAbort: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationAbort: $.ComponentSpec[] = [];

let _cached_decoder_for_InitializationAbort: $.ASN1Decoder<InitializationAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAbort} The decoded data structure.
 */
export function _decode_InitializationAbort(el: _Element): InitializationAbort {
    if (!_cached_decoder_for_InitializationAbort) {
        _cached_decoder_for_InitializationAbort = function (
            el: _Element
        ): InitializationAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "diag";
            let diag!: InitializationAbort_diag;
            diag = _decode_InitializationAbort_diag(sequence[0]);
            return new InitializationAbort(diag, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationAbort(el);
}

let _cached_encoder_for_InitializationAbort: $.ASN1Encoder<InitializationAbort> | null = null;

/**
 * @summary Encodes a(n) InitializationAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAbort, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAbort(
    value: InitializationAbort,
    elGetter: $.ASN1Encoder<InitializationAbort>
): _Element {
    if (!_cached_encoder_for_InitializationAbort) {
        _cached_encoder_for_InitializationAbort = function (
            value: InitializationAbort        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InitializationAbort_diag(
                                value.diag,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_InitializationAbort(value, elGetter);
}


/* eslint-enable */
