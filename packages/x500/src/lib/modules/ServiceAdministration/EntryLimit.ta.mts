/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EntryLimit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryLimit ::= SEQUENCE {
 *   default  INTEGER,
 *   max      INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class EntryLimit {
    constructor(
        /**
         * @summary `default_`.
         * @public
         * @readonly
         */
        readonly default_: INTEGER,
        /**
         * @summary `max`.
         * @public
         * @readonly
         */
        readonly max: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EntryLimit
     * @description
     *
     * This takes an `object` and converts it to a `EntryLimit`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryLimit`.
     * @returns {EntryLimit}
     */
    public static _from_object(
        _o: { [_K in keyof EntryLimit]: EntryLimit[_K] }
    ): EntryLimit {
        return new EntryLimit(
            _o.default_,
            _o.max,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryLimit: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "default",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "max",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryLimit: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryLimit: $.ComponentSpec[] = [];

let _cached_decoder_for_EntryLimit: $.ASN1Decoder<EntryLimit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryLimit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryLimit} The decoded data structure.
 */
export function _decode_EntryLimit(el: _Element): EntryLimit {
    if (!_cached_decoder_for_EntryLimit) {
        _cached_decoder_for_EntryLimit = function (el: _Element): EntryLimit {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EntryLimit contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "default";
            sequence[1].name = "max";
            let default_!: INTEGER;
            let max!: INTEGER;
            default_ = $._decodeInteger(sequence[0]);
            max = $._decodeInteger(sequence[1]);
            return new EntryLimit(default_, max, sequence.slice(2));
        };
    }
    return _cached_decoder_for_EntryLimit(el);
}

let _cached_encoder_for_EntryLimit: $.ASN1Encoder<EntryLimit> | null = null;

/**
 * @summary Encodes a(n) EntryLimit into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryLimit, encoded as an ASN.1 Element.
 */
export function _encode_EntryLimit(
    value: EntryLimit,
    elGetter: $.ASN1Encoder<EntryLimit>
): _Element {
    if (!_cached_encoder_for_EntryLimit) {
        _cached_encoder_for_EntryLimit = function (
            value: EntryLimit        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.default_,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeInteger(value.max, $.DER),
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
    return _cached_encoder_for_EntryLimit(value, elGetter);
}


/* eslint-enable */
