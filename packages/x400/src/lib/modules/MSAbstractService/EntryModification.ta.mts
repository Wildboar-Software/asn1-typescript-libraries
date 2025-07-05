/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    EntryModification_modification,
    _decode_EntryModification_modification,
    _encode_EntryModification_modification,
} from '../MSAbstractService/EntryModification-modification.ta.mjs';
/**
 * @summary EntryModification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryModification ::= SET {
 *   strict        [0]  BOOLEAN DEFAULT FALSE,
 *   modification
 *     CHOICE {add-attribute     [1]  Attribute,
 *             remove-attribute  [2]  X413ATTRIBUTE.&id({AttributeTable}),
 *             add-values        [3]  OrderedAttribute,
 *             remove-values     [4]  OrderedAttribute}
 * }
 * ```
 *
 */
export class EntryModification {
    constructor(
        /**
         * @summary `strict`.
         * @public
         * @readonly
         */
        readonly strict: OPTIONAL<BOOLEAN>,
        /**
         * @summary `modification`.
         * @public
         * @readonly
         */
        readonly modification: EntryModification_modification
    ) {}

    /**
     * @summary Restructures an object into a EntryModification
     * @description
     *
     * This takes an `object` and converts it to a `EntryModification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryModification`.
     * @returns {EntryModification}
     */
    public static _from_object(
        _o: { [_K in keyof EntryModification]: EntryModification[_K] }
    ): EntryModification {
        return new EntryModification(_o.strict, _o.modification);
    }

    /**
     * @summary Getter that returns the default value for `strict`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_strict(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of EntryModification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryModification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'strict',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'modification',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of EntryModification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryModification: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EntryModification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryModification: $.ComponentSpec[] = [];

let _cached_decoder_for_EntryModification: $.ASN1Decoder<EntryModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryModification} The decoded data structure.
 */
export function _decode_EntryModification(el: _Element): EntryModification {
    if (!_cached_decoder_for_EntryModification) {
        _cached_decoder_for_EntryModification = function (
            el: _Element
        ): EntryModification {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let strict: OPTIONAL<BOOLEAN> =
                EntryModification._default_value_for_strict;
            let modification!: EntryModification_modification;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                strict: (_el: _Element): void => {
                    strict = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                modification: (_el: _Element): void => {
                    modification = _decode_EntryModification_modification(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryModification,
                _extension_additions_list_spec_for_EntryModification,
                _root_component_type_list_2_spec_for_EntryModification,
                undefined
            );
            return new EntryModification /* SET_CONSTRUCTOR_CALL */(
                strict,
                modification
            );
        };
    }
    return _cached_decoder_for_EntryModification(el);
}

let _cached_encoder_for_EntryModification: $.ASN1Encoder<EntryModification> | null = null;

/**
 * @summary Encodes a(n) EntryModification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification, encoded as an ASN.1 Element.
 */
export function _encode_EntryModification(
    value: EntryModification,
    elGetter: $.ASN1Encoder<EntryModification>
): _Element {
    if (!_cached_encoder_for_EntryModification) {
        _cached_encoder_for_EntryModification = function (
            value: EntryModification        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.strict === undefined ||
                        $.deepEq(
                            value.strict,
                            EntryModification._default_value_for_strict
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.strict, $.BER),
                        /* REQUIRED   */ _encode_EntryModification_modification(
                            value.modification,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EntryModification(value, elGetter);
}


/* eslint-enable */
