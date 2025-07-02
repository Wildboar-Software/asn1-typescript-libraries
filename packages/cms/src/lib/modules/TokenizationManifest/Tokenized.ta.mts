/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Tokenized
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Tokenized { TOKENIZED:IOSet } ::= SEQUENCE {
 * name  TOKENIZED.&id({IOSet}),
 * parts TOKENIZED.&Type({IOSet}{@name}) OPTIONAL
 * }
 * ```
 *
 */
export class Tokenized {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OBJECT_IDENTIFIER,
        /**
         * @summary `parts`.
         * @public
         * @readonly
         */
        readonly parts: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a Tokenized
     * @description
     *
     * This takes an `object` and converts it to a `Tokenized`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tokenized`.
     * @returns {Tokenized}
     */
    public static _from_object(
        _o: { [_K in keyof Tokenized]: Tokenized[_K] }
    ): Tokenized {
        return new Tokenized(_o.name, _o.parts);
    }
}


/**
 * @summary The Leading Root Component Types of Tokenized
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Tokenized: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "parts",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of Tokenized
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Tokenized: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Tokenized
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Tokenized: $.ComponentSpec[] = [];


let _cached_decoder_for_Tokenized: $.ASN1Decoder<Tokenized> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Tokenized
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Tokenized} The decoded data structure.
 */
export function _decode_Tokenized(el: _Element): Tokenized {
    if (!_cached_decoder_for_Tokenized) {
        _cached_decoder_for_Tokenized = function (el: _Element): Tokenized {
            let name!: OBJECT_IDENTIFIER;
            let parts: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = $._decodeObjectIdentifier(_el);
                },
                parts: (_el: _Element): void => {
                    parts = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Tokenized,
                _extension_additions_list_spec_for_Tokenized,
                _root_component_type_list_2_spec_for_Tokenized,
                undefined
            );
            return new Tokenized (name, parts);
        };
    }
    return _cached_decoder_for_Tokenized(el);
}


let _cached_encoder_for_Tokenized: $.ASN1Encoder<Tokenized> | null = null;


/**
 * @summary Encodes a(n) Tokenized into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tokenized, encoded as an ASN.1 Element.
 */
export function _encode_Tokenized(
    value: Tokenized,
    elGetter: $.ASN1Encoder<Tokenized>
): _Element {
    if (!_cached_encoder_for_Tokenized) {
        _cached_encoder_for_Tokenized = function (
            value: Tokenized        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.name,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.parts === undefined
                            ? undefined
                            : $._encodeAny(value.parts, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Tokenized(value, elGetter);
}


/* eslint-enable */
