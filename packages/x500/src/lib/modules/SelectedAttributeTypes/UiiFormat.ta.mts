/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UiiFormat_next,
    _decode_UiiFormat_next,
    _encode_UiiFormat_next,
} from "../SelectedAttributeTypes/UiiFormat-next.ta.mjs";
import {
    UiiFormat_subset,
    UiiFormat_subset_baseObject /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_UiiFormat_subset,
    _encode_UiiFormat_subset,
    _enum_for_UiiFormat_subset,
} from "../SelectedAttributeTypes/UiiFormat-subset.ta.mjs";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta.mjs";
/**
 * @summary UiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat ::= SEQUENCE {
 *   baseObject  URI  OPTIONAL,
 *   subset      ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2) } DEFAULT baseObject,
 *   next        CHOICE {
 *     length      INTEGER,
 *     filter      UiiFilter } }
 * ```
 *
 */
export class UiiFormat {
    constructor(
        /**
         * @summary `baseObject`.
         * @public
         * @readonly
         */
        readonly baseObject: OPTIONAL<URI>,
        /**
         * @summary `subset`.
         * @public
         * @readonly
         */
        readonly subset: OPTIONAL<UiiFormat_subset>,
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: UiiFormat_next
    ) {}

    /**
     * @summary Restructures an object into a UiiFormat
     * @description
     *
     * This takes an `object` and converts it to a `UiiFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UiiFormat`.
     * @returns {UiiFormat}
     */
    public static _from_object(
        _o: { [_K in keyof UiiFormat]: UiiFormat[_K] }
    ): UiiFormat {
        return new UiiFormat(_o.baseObject, _o.subset, _o.next);
    }

    /**
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset(): UiiFormat_subset {
        return UiiFormat_subset_baseObject;
    }
    /**
     * @summary The enum used as the type of the component `subset`
     * @public
     * @static
     */

    public static _enum_for_subset = _enum_for_UiiFormat_subset;
}

/**
 * @summary The Leading Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UiiFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseObject",
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
    new $.ComponentSpec(
        "subset",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec("next", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UiiFormat: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UiiFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UiiFormat: $.ComponentSpec[] = [];

let _cached_decoder_for_UiiFormat: $.ASN1Decoder<UiiFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat} The decoded data structure.
 */
export function _decode_UiiFormat(el: _Element): UiiFormat {
    if (!_cached_decoder_for_UiiFormat) {
        _cached_decoder_for_UiiFormat = function (el: _Element): UiiFormat {
            let baseObject: OPTIONAL<URI>;
            let subset: OPTIONAL<UiiFormat_subset> =
                UiiFormat._default_value_for_subset;
            let next!: UiiFormat_next;
            const callbacks: $.DecodingMap = {
                baseObject: (_el: _Element): void => {
                    baseObject = _decode_URI(_el);
                },
                subset: (_el: _Element): void => {
                    subset = _decode_UiiFormat_subset(_el);
                },
                next: (_el: _Element): void => {
                    next = _decode_UiiFormat_next(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UiiFormat,
                _extension_additions_list_spec_for_UiiFormat,
                _root_component_type_list_2_spec_for_UiiFormat,
                undefined
            );
            return new UiiFormat(
                baseObject,
                subset,
                next
            );
        };
    }
    return _cached_decoder_for_UiiFormat(el);
}

let _cached_encoder_for_UiiFormat: $.ASN1Encoder<UiiFormat> | null = null;

/**
 * @summary Encodes a(n) UiiFormat into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat(
    value: UiiFormat,
    elGetter: $.ASN1Encoder<UiiFormat>
): _Element {
    if (!_cached_encoder_for_UiiFormat) {
        _cached_encoder_for_UiiFormat = function (
            value: UiiFormat        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseObject === undefined
                            ? undefined
                            : _encode_URI(value.baseObject, $.DER),
                        /* IF_DEFAULT */ value.subset === undefined ||
                        $.deepEq(
                            value.subset,
                            UiiFormat._default_value_for_subset
                        )
                            ? undefined
                            : _encode_UiiFormat_subset(value.subset, $.DER),
                        /* REQUIRED   */ _encode_UiiFormat_next(
                            value.next,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UiiFormat(value, elGetter);
}


/* eslint-enable */
