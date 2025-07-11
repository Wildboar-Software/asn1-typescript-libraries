/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TeletexString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TeletexPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexPersonalName ::= SET {
 *   surname               [0]  TeletexString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  TeletexString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  TeletexString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  TeletexString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 */
export class TeletexPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: TeletexString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<TeletexString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<TeletexString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<TeletexString>
    ) {}

    /**
     * @summary Restructures an object into a TeletexPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `TeletexPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexPersonalName`.
     * @returns {TeletexPersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof TeletexPersonalName]: TeletexPersonalName[_K] }
    ): TeletexPersonalName {
        return new TeletexPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexPersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexPersonalName: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexPersonalName: $.ASN1Decoder<TeletexPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexPersonalName} The decoded data structure.
 */
export function _decode_TeletexPersonalName(el: _Element): TeletexPersonalName {
    if (!_cached_decoder_for_TeletexPersonalName) {
        _cached_decoder_for_TeletexPersonalName = function (
            el: _Element
        ): TeletexPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: TeletexString;
            let given_name: OPTIONAL<TeletexString>;
            let initials: OPTIONAL<TeletexString>;
            let generation_qualifier: OPTIONAL<TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TeletexPersonalName,
                _extension_additions_list_spec_for_TeletexPersonalName,
                _root_component_type_list_2_spec_for_TeletexPersonalName,
                undefined
            );
            return new TeletexPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_TeletexPersonalName(el);
}

let _cached_encoder_for_TeletexPersonalName: $.ASN1Encoder<TeletexPersonalName> | null = null;

/**
 * @summary Encodes a(n) TeletexPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexPersonalName(
    value: TeletexPersonalName,
    elGetter: $.ASN1Encoder<TeletexPersonalName>
): _Element {
    if (!_cached_encoder_for_TeletexPersonalName) {
        _cached_encoder_for_TeletexPersonalName = function (
            value: TeletexPersonalName        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeTeletexString,
                            $.DER
                        )(value.surname, $.DER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.given_name, $.DER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.initials, $.DER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeTeletexString,
                                  $.DER
                              )(value.generation_qualifier, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TeletexPersonalName(value, elGetter);
}


/* eslint-enable */
