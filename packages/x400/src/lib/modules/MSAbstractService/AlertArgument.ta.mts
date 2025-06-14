/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from '../MSAbstractService/EntryInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlertArgument */
/**
 * @summary AlertArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertArgument ::= SET {
 *   alert-registration-identifier  [0]  INTEGER(1..ub-auto-actions),
 *   new-entry                      [2]  EntryInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlertArgument {
    constructor(
        /**
         * @summary `alert_registration_identifier`.
         * @public
         * @readonly
         */
        readonly alert_registration_identifier: INTEGER,
        /**
         * @summary `new_entry`.
         * @public
         * @readonly
         */
        readonly new_entry: OPTIONAL<EntryInformation>
    ) {}

    /**
     * @summary Restructures an object into a AlertArgument
     * @description
     *
     * This takes an `object` and converts it to a `AlertArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlertArgument`.
     * @returns {AlertArgument}
     */
    public static _from_object(
        _o: { [_K in keyof AlertArgument]: AlertArgument[_K] }
    ): AlertArgument {
        return new AlertArgument(
            _o.alert_registration_identifier,
            _o.new_entry
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AlertArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlertArgument */
/**
 * @summary The Leading Root Component Types of AlertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlertArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'alert-registration-identifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'new-entry',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlertArgument */
/**
 * @summary The Trailing Root Component Types of AlertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlertArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlertArgument */
/**
 * @summary The Extension Addition Component Types of AlertArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlertArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertArgument */
let _cached_decoder_for_AlertArgument: $.ASN1Decoder<AlertArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _decode_AlertArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) AlertArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertArgument} The decoded data structure.
 */
export function _decode_AlertArgument(el: _Element) {
    if (!_cached_decoder_for_AlertArgument) {
        _cached_decoder_for_AlertArgument = function (
            el: _Element
        ): AlertArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let alert_registration_identifier!: INTEGER;
            let new_entry: OPTIONAL<EntryInformation>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'alert-registration-identifier': (_el: _Element): void => {
                    alert_registration_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'new-entry': (_el: _Element): void => {
                    new_entry = $._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlertArgument,
                _extension_additions_list_spec_for_AlertArgument,
                _root_component_type_list_2_spec_for_AlertArgument,
                undefined
            );
            return new AlertArgument /* SET_CONSTRUCTOR_CALL */(
                alert_registration_identifier,
                new_entry
            );
        };
    }
    return _cached_decoder_for_AlertArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertArgument */
let _cached_encoder_for_AlertArgument: $.ASN1Encoder<AlertArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertArgument */

/* START_OF_SYMBOL_DEFINITION _encode_AlertArgument */
/**
 * @summary Encodes a(n) AlertArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertArgument, encoded as an ASN.1 Element.
 */
export function _encode_AlertArgument(
    value: AlertArgument,
    elGetter: $.ASN1Encoder<AlertArgument>
) {
    if (!_cached_encoder_for_AlertArgument) {
        _cached_encoder_for_AlertArgument = function (
            value: AlertArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.alert_registration_identifier, $.BER),
                        /* IF_ABSENT  */ value.new_entry === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EntryInformation,
                                  $.BER
                              )(value.new_entry, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlertArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlertArgument */

/* eslint-enable */
