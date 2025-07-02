/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EntryClass,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    ModifyArgument_entries,
    _decode_ModifyArgument_entries,
    _encode_ModifyArgument_entries,
} from '../MSAbstractService/ModifyArgument-entries.ta.mjs';
import {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from '../MSAbstractService/EntryModification.ta.mjs';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.mjs';
/**
 * @summary ModifyArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyArgument ::= SET {
 *   entry-class        [0]  EntryClass DEFAULT delivery,
 *   entries
 *     CHOICE {selector          [1]  Selector,
 *             specific-entries
 *               [2]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber},
 *   modifications
 *     [3]  SEQUENCE SIZE (1..ub-modifications) OF EntryModification,
 *   modify-extensions  [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 */
export class ModifyArgument {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: OPTIONAL<EntryClass>,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: ModifyArgument_entries,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: EntryModification[],
        /**
         * @summary `modify_extensions`.
         * @public
         * @readonly
         */
        readonly modify_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a ModifyArgument
     * @description
     *
     * This takes an `object` and converts it to a `ModifyArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyArgument`.
     * @returns {ModifyArgument}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyArgument]: ModifyArgument[_K] }
    ): ModifyArgument {
        return new ModifyArgument(
            _o.entry_class,
            _o.entries,
            _o.modifications,
            _o.modify_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `entry_class`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entry_class() {
        return delivery;
    }
}

/**
 * @summary The Leading Root Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec('entries', false, $.hasAnyTag),
    new $.ComponentSpec(
        'modifications',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'modify-extensions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ModifyArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_ModifyArgument: $.ASN1Decoder<ModifyArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyArgument} The decoded data structure.
 */
export function _decode_ModifyArgument(el: _Element): ModifyArgument {
    if (!_cached_decoder_for_ModifyArgument) {
        _cached_decoder_for_ModifyArgument = function (
            el: _Element
        ): ModifyArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class: OPTIONAL<EntryClass> =
                ModifyArgument._default_value_for_entry_class;
            let entries!: ModifyArgument_entries;
            let modifications!: EntryModification[];
            let modify_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                entries: (_el: _Element): void => {
                    entries = _decode_ModifyArgument_entries(_el);
                },
                modifications: (_el: _Element): void => {
                    modifications = $._decode_explicit<EntryModification[]>(
                        () =>
                            $._decodeSequenceOf<EntryModification>(
                                () => _decode_EntryModification
                            )
                    )(_el);
                },
                'modify-extensions': (_el: _Element): void => {
                    modify_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyArgument,
                _extension_additions_list_spec_for_ModifyArgument,
                _root_component_type_list_2_spec_for_ModifyArgument,
                undefined
            );
            return new ModifyArgument /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                entries,
                modifications,
                modify_extensions
            );
        };
    }
    return _cached_decoder_for_ModifyArgument(el);
}

let _cached_encoder_for_ModifyArgument: $.ASN1Encoder<ModifyArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyArgument(
    value: ModifyArgument,
    elGetter: $.ASN1Encoder<ModifyArgument>
): _Element {
    if (!_cached_encoder_for_ModifyArgument) {
        _cached_encoder_for_ModifyArgument = function (
            value: ModifyArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.entry_class === undefined ||
                        $.deepEq(
                            value.entry_class,
                            ModifyArgument._default_value_for_entry_class
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EntryClass,
                                  $.BER
                              )(value.entry_class, $.BER),
                        /* REQUIRED   */ _encode_ModifyArgument_entries(
                            value.entries,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () =>
                                $._encodeSequenceOf<EntryModification>(
                                    () => _encode_EntryModification,
                                    $.BER
                                ),
                            $.BER
                        )(value.modifications, $.BER),
                        /* IF_ABSENT  */ value.modify_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.modify_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyArgument(value, elGetter);
}


/* eslint-enable */
