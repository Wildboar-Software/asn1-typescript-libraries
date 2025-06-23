/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Signcrypted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signcrypted{SIGNCRYPTED:IOSet} ::= SEQUENCE {
 * name    SIGNCRYPTED.&id({IOSet}),
 * parts    SIGNCRYPTED.&Type({IOSet}{@name}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Signcrypted {
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
     * @summary Restructures an object into a Signcrypted
     * @description
     *
     * This takes an `object` and converts it to a `Signcrypted`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signcrypted`.
     * @returns {Signcrypted}
     */
    public static _from_object(
        _o: { [_K in keyof Signcrypted]: Signcrypted[_K] }
    ): Signcrypted {
        return new Signcrypted(_o.name, _o.parts);
    }
}


/**
 * @summary The Leading Root Component Types of Signcrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signcrypted: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of Signcrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signcrypted: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Signcrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signcrypted: $.ComponentSpec[] = [];


let _cached_decoder_for_Signcrypted: $.ASN1Decoder<Signcrypted> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Signcrypted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signcrypted} The decoded data structure.
 */
export function _decode_Signcrypted(el: _Element) {
    if (!_cached_decoder_for_Signcrypted) {
        _cached_decoder_for_Signcrypted = function (el: _Element): Signcrypted {
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
                _root_component_type_list_1_spec_for_Signcrypted,
                _extension_additions_list_spec_for_Signcrypted,
                _root_component_type_list_2_spec_for_Signcrypted,
                undefined
            );
            return new Signcrypted (name, parts);
        };
    }
    return _cached_decoder_for_Signcrypted(el);
}


let _cached_encoder_for_Signcrypted: $.ASN1Encoder<Signcrypted> | null = null;


/**
 * @summary Encodes a(n) Signcrypted into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signcrypted, encoded as an ASN.1 Element.
 */
export function _encode_Signcrypted(
    value: Signcrypted,
    elGetter: $.ASN1Encoder<Signcrypted>
) {
    if (!_cached_encoder_for_Signcrypted) {
        _cached_encoder_for_Signcrypted = function (
            value: Signcrypted        ): _Element {
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
    return _cached_encoder_for_Signcrypted(value, elGetter);
}


/* eslint-enable */
