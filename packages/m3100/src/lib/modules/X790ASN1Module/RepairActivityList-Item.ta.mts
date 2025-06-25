/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
    GeneralizedTime,
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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import {
    ActivityCode,
    _decode_ActivityCode,
    _encode_ActivityCode,
} from '../X790ASN1Module/ActivityCode.ta.mjs';

/**
 * @summary RepairActivityList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepairActivityList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RepairActivityList_Item {
    constructor(
        /**
         * @summary `entryTime`.
         * @public
         * @readonly
         */
        readonly entryTime: GeneralizedTime,
        /**
         * @summary `activityInfo`.
         * @public
         * @readonly
         */
        readonly activityInfo: GraphicString,
        /**
         * @summary `activityPerson`.
         * @public
         * @readonly
         */
        readonly activityPerson: OPTIONAL<PersonReach>,
        /**
         * @summary `activityCode`.
         * @public
         * @readonly
         */
        readonly activityCode: OPTIONAL<ActivityCode>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepairActivityList_Item
     * @description
     *
     * This takes an `object` and converts it to a `RepairActivityList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepairActivityList_Item`.
     * @returns {RepairActivityList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof RepairActivityList_Item]: RepairActivityList_Item[_K];
        }
    ): RepairActivityList_Item {
        return new RepairActivityList_Item(
            _o.entryTime,
            _o.activityInfo,
            _o.activityPerson,
            _o.activityCode,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of RepairActivityList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepairActivityList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entryTime',
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'activityInfo',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'activityPerson',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'activityCode',
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of RepairActivityList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepairActivityList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RepairActivityList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepairActivityList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_RepairActivityList_Item: $.ASN1Decoder<RepairActivityList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RepairActivityList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepairActivityList_Item} The decoded data structure.
 */
export function _decode_RepairActivityList_Item(el: _Element): RepairActivityList_Item {
    if (!_cached_decoder_for_RepairActivityList_Item) {
        _cached_decoder_for_RepairActivityList_Item = function (
            el: _Element
        ): RepairActivityList_Item {
            let entryTime!: GeneralizedTime;
            let activityInfo!: GraphicString;
            let activityPerson: OPTIONAL<PersonReach>;
            let activityCode: OPTIONAL<ActivityCode>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                entryTime: (_el: _Element): void => {
                    entryTime = $._decodeGeneralizedTime(_el);
                },
                activityInfo: (_el: _Element): void => {
                    activityInfo = $._decodeGraphicString(_el);
                },
                activityPerson: (_el: _Element): void => {
                    activityPerson = _decode_PersonReach(_el);
                },
                activityCode: (_el: _Element): void => {
                    activityCode = _decode_ActivityCode(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RepairActivityList_Item,
                _extension_additions_list_spec_for_RepairActivityList_Item,
                _root_component_type_list_2_spec_for_RepairActivityList_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RepairActivityList_Item (
                entryTime,
                activityInfo,
                activityPerson,
                activityCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RepairActivityList_Item(el);
}


let _cached_encoder_for_RepairActivityList_Item: $.ASN1Encoder<RepairActivityList_Item> | null = null;


/**
 * @summary Encodes a(n) RepairActivityList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepairActivityList_Item, encoded as an ASN.1 Element.
 */
export function _encode_RepairActivityList_Item(
    value: RepairActivityList_Item,
    elGetter: $.ASN1Encoder<RepairActivityList_Item>
): _Element {
    if (!_cached_encoder_for_RepairActivityList_Item) {
        _cached_encoder_for_RepairActivityList_Item = function (
            value: RepairActivityList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.entryTime,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGraphicString(
                                value.activityInfo,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.activityPerson === undefined
                                ? undefined
                                : _encode_PersonReach(
                                      value.activityPerson,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.activityCode === undefined
                                ? undefined
                                : _encode_ActivityCode(
                                      value.activityCode,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RepairActivityList_Item(value, elGetter);
}


/* eslint-enable */
