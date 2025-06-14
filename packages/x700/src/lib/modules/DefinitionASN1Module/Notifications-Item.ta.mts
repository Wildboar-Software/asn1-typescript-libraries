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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Notifications_Item */
/**
 * @summary Notifications_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notifications-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Notifications_Item {
    constructor(
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: TemplateLabel,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a Notifications_Item
     * @description
     *
     * This takes an `object` and converts it to a `Notifications_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Notifications_Item`.
     * @returns {Notifications_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Notifications_Item]: Notifications_Item[_K] }
    ): Notifications_Item {
        return new Notifications_Item(_o.notification, _o.parameter);
    }
}
/* END_OF_SYMBOL_DEFINITION Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Notifications_Item */
/**
 * @summary The Leading Root Component Types of Notifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Notifications_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'notification',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Notifications_Item */
/**
 * @summary The Trailing Root Component Types of Notifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Notifications_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Notifications_Item */
/**
 * @summary The Extension Addition Component Types of Notifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Notifications_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications_Item */
let _cached_decoder_for_Notifications_Item: $.ASN1Decoder<Notifications_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Notifications_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Notifications_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications_Item} The decoded data structure.
 */
export function _decode_Notifications_Item(el: _Element) {
    if (!_cached_decoder_for_Notifications_Item) {
        _cached_decoder_for_Notifications_Item = function (
            el: _Element
        ): Notifications_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notification!: TemplateLabel;
            let parameter: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notification: (_el: _Element): void => {
                    notification = $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    )(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = $._decode_implicit<TemplateList>(
                        () => _decode_TemplateList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Notifications_Item,
                _extension_additions_list_spec_for_Notifications_Item,
                _root_component_type_list_2_spec_for_Notifications_Item,
                undefined
            );
            return new Notifications_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                notification,
                parameter
            );
        };
    }
    return _cached_decoder_for_Notifications_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications_Item */
let _cached_encoder_for_Notifications_Item: $.ASN1Encoder<Notifications_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Notifications_Item */
/**
 * @summary Encodes a(n) Notifications_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications_Item, encoded as an ASN.1 Element.
 */
export function _encode_Notifications_Item(
    value: Notifications_Item,
    elGetter: $.ASN1Encoder<Notifications_Item>
) {
    if (!_cached_encoder_for_Notifications_Item) {
        _cached_encoder_for_Notifications_Item = function (
            value: Notifications_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_TemplateLabel,
                            $.BER
                        )(value.notification, $.BER),
                        /* IF_ABSENT  */ value.parameter === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TemplateList,
                                  $.BER
                              )(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Notifications_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Notifications_Item */

/* eslint-enable */
