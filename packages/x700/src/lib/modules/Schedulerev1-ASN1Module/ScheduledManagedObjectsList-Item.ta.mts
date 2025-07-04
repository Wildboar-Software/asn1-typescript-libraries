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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/**
 * @summary ScheduledManagedObjectsList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScheduledManagedObjectsList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class ScheduledManagedObjectsList_Item {
    constructor(
        /**
         * @summary `objectInstance`.
         * @public
         * @readonly
         */
        readonly objectInstance: ObjectInstance,
        /**
         * @summary `activity`.
         * @public
         * @readonly
         */
        readonly activity: OPTIONAL<AttributeId>
    ) {}

    /**
     * @summary Restructures an object into a ScheduledManagedObjectsList_Item
     * @description
     *
     * This takes an `object` and converts it to a `ScheduledManagedObjectsList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScheduledManagedObjectsList_Item`.
     * @returns {ScheduledManagedObjectsList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof ScheduledManagedObjectsList_Item]: ScheduledManagedObjectsList_Item[_K];
        }
    ): ScheduledManagedObjectsList_Item {
        return new ScheduledManagedObjectsList_Item(
            _o.objectInstance,
            _o.activity
        );
    }
}

/**
 * @summary The Leading Root Component Types of ScheduledManagedObjectsList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ScheduledManagedObjectsList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectInstance',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec('activity', true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of ScheduledManagedObjectsList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ScheduledManagedObjectsList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ScheduledManagedObjectsList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ScheduledManagedObjectsList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_ScheduledManagedObjectsList_Item: $.ASN1Decoder<ScheduledManagedObjectsList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledManagedObjectsList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScheduledManagedObjectsList_Item} The decoded data structure.
 */
export function _decode_ScheduledManagedObjectsList_Item(el: _Element): ScheduledManagedObjectsList_Item {
    if (!_cached_decoder_for_ScheduledManagedObjectsList_Item) {
        _cached_decoder_for_ScheduledManagedObjectsList_Item = function (
            el: _Element
        ): ScheduledManagedObjectsList_Item {
            let objectInstance!: ObjectInstance;
            let activity: OPTIONAL<AttributeId>;
            const callbacks: $.DecodingMap = {
                objectInstance: (_el: _Element): void => {
                    objectInstance = _decode_ObjectInstance(_el);
                },
                activity: (_el: _Element): void => {
                    activity = _decode_AttributeId(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ScheduledManagedObjectsList_Item,
                _extension_additions_list_spec_for_ScheduledManagedObjectsList_Item,
                _root_component_type_list_2_spec_for_ScheduledManagedObjectsList_Item,
                undefined
            );
            return new ScheduledManagedObjectsList_Item (
                objectInstance,
                activity
            );
        };
    }
    return _cached_decoder_for_ScheduledManagedObjectsList_Item(el);
}

let _cached_encoder_for_ScheduledManagedObjectsList_Item: $.ASN1Encoder<ScheduledManagedObjectsList_Item> | null = null;

/**
 * @summary Encodes a(n) ScheduledManagedObjectsList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledManagedObjectsList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ScheduledManagedObjectsList_Item(
    value: ScheduledManagedObjectsList_Item,
    elGetter: $.ASN1Encoder<ScheduledManagedObjectsList_Item>
): _Element {
    if (!_cached_encoder_for_ScheduledManagedObjectsList_Item) {
        _cached_encoder_for_ScheduledManagedObjectsList_Item = function (
            value: ScheduledManagedObjectsList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.objectInstance,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.activity === undefined
                            ? undefined
                            : _encode_AttributeId(value.activity, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ScheduledManagedObjectsList_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
