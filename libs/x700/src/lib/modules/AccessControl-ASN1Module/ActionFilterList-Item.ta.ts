/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionTypeId.ta';
export {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionTypeId.ta';
import {
    FilterList,
    _decode_FilterList,
    _encode_FilterList,
} from '../AccessControl-ASN1Module/FilterList.ta';
export {
    FilterList,
    _decode_FilterList,
    _encode_FilterList,
} from '../AccessControl-ASN1Module/FilterList.ta';

/* START_OF_SYMBOL_DEFINITION ActionFilterList_Item */
/**
 * @summary ActionFilterList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionFilterList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ActionFilterList_Item {
    constructor(
        /**
         * @summary `actionTypeId`.
         * @public
         * @readonly
         */
        readonly actionTypeId: ActionTypeId,
        /**
         * @summary `attributeFilterList`.
         * @public
         * @readonly
         */
        readonly attributeFilterList: OPTIONAL<FilterList>
    ) {}

    /**
     * @summary Restructures an object into a ActionFilterList_Item
     * @description
     *
     * This takes an `object` and converts it to a `ActionFilterList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActionFilterList_Item`.
     * @returns {ActionFilterList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ActionFilterList_Item]: ActionFilterList_Item[_K] }
    ): ActionFilterList_Item {
        return new ActionFilterList_Item(
            _o.actionTypeId,
            _o.attributeFilterList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionFilterList_Item */
/**
 * @summary The Leading Root Component Types of ActionFilterList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionFilterList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'actionTypeId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeFilterList',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionFilterList_Item */
/**
 * @summary The Trailing Root Component Types of ActionFilterList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionFilterList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionFilterList_Item */
/**
 * @summary The Extension Addition Component Types of ActionFilterList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionFilterList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionFilterList_Item */
let _cached_decoder_for_ActionFilterList_Item: $.ASN1Decoder<ActionFilterList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ActionFilterList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionFilterList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionFilterList_Item} The decoded data structure.
 */
export function _decode_ActionFilterList_Item(el: _Element) {
    if (!_cached_decoder_for_ActionFilterList_Item) {
        _cached_decoder_for_ActionFilterList_Item = function (
            el: _Element
        ): ActionFilterList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let actionTypeId!: ActionTypeId;
            let attributeFilterList: OPTIONAL<FilterList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                actionTypeId: (_el: _Element): void => {
                    actionTypeId = _decode_ActionTypeId(_el);
                },
                attributeFilterList: (_el: _Element): void => {
                    attributeFilterList = _decode_FilterList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ActionFilterList_Item,
                _extension_additions_list_spec_for_ActionFilterList_Item,
                _root_component_type_list_2_spec_for_ActionFilterList_Item,
                undefined
            );
            return new ActionFilterList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                actionTypeId,
                attributeFilterList
            );
        };
    }
    return _cached_decoder_for_ActionFilterList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionFilterList_Item */
let _cached_encoder_for_ActionFilterList_Item: $.ASN1Encoder<ActionFilterList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionFilterList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ActionFilterList_Item */
/**
 * @summary Encodes a(n) ActionFilterList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionFilterList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ActionFilterList_Item(
    value: ActionFilterList_Item,
    elGetter: $.ASN1Encoder<ActionFilterList_Item>
) {
    if (!_cached_encoder_for_ActionFilterList_Item) {
        _cached_encoder_for_ActionFilterList_Item = function (
            value: ActionFilterList_Item,
            elGetter: $.ASN1Encoder<ActionFilterList_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ActionTypeId(
                            value.actionTypeId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.attributeFilterList === undefined
                            ? undefined
                            : _encode_FilterList(
                                  value.attributeFilterList,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ActionFilterList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionFilterList_Item */

/* eslint-enable */
