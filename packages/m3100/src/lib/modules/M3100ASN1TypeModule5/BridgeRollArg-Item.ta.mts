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
    BridgeRollArg_Item_bridgeRollOperation,
    _enum_for_BridgeRollArg_Item_bridgeRollOperation,
    _decode_BridgeRollArg_Item_bridgeRollOperation,
    _encode_BridgeRollArg_Item_bridgeRollOperation,
} from '../M3100ASN1TypeModule5/BridgeRollArg-Item-bridgeRollOperation.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/**
 * @summary BridgeRollArg_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollArg-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class BridgeRollArg_Item {
    constructor(
        /**
         * @summary `xc`.
         * @public
         * @readonly
         */
        readonly xc: ObjectInstance,
        /**
         * @summary `bridgeRollFromTp`.
         * @public
         * @readonly
         */
        readonly bridgeRollFromTp: ObjectInstance,
        /**
         * @summary `bridgeRollToTp`.
         * @public
         * @readonly
         */
        readonly bridgeRollToTp: ObjectInstance,
        /**
         * @summary `bridgeRollOperation`.
         * @public
         * @readonly
         */
        readonly bridgeRollOperation: BridgeRollArg_Item_bridgeRollOperation,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a BridgeRollArg_Item
     * @description
     *
     * This takes an `object` and converts it to a `BridgeRollArg_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BridgeRollArg_Item`.
     * @returns {BridgeRollArg_Item}
     */
    public static _from_object(
        _o: { [_K in keyof BridgeRollArg_Item]: BridgeRollArg_Item[_K] }
    ): BridgeRollArg_Item {
        return new BridgeRollArg_Item(
            _o.xc,
            _o.bridgeRollFromTp,
            _o.bridgeRollToTp,
            _o.bridgeRollOperation,
            _o.additionalInfo
        );
    }

    /**
     * @summary The enum used as the type of the component `bridgeRollOperation`
     * @public
     * @static
     */

    public static _enum_for_bridgeRollOperation = _enum_for_BridgeRollArg_Item_bridgeRollOperation;
}


/**
 * @summary The Leading Root Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('xc', false, $.hasAnyTag),
    new $.ComponentSpec(
        'bridgeRollFromTp',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'bridgeRollToTp',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'bridgeRollOperation',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_BridgeRollArg_Item: $.ASN1Decoder<BridgeRollArg_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollArg_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollArg_Item} The decoded data structure.
 */
export function _decode_BridgeRollArg_Item(el: _Element): BridgeRollArg_Item {
    if (!_cached_decoder_for_BridgeRollArg_Item) {
        _cached_decoder_for_BridgeRollArg_Item = function (
            el: _Element
        ): BridgeRollArg_Item {
            let xc!: ObjectInstance;
            let bridgeRollFromTp!: ObjectInstance;
            let bridgeRollToTp!: ObjectInstance;
            let bridgeRollOperation!: BridgeRollArg_Item_bridgeRollOperation;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            const callbacks: $.DecodingMap = {
                xc: (_el: _Element): void => {
                    xc = _decode_ObjectInstance(_el);
                },
                bridgeRollFromTp: (_el: _Element): void => {
                    bridgeRollFromTp = _decode_ObjectInstance(_el);
                },
                bridgeRollToTp: (_el: _Element): void => {
                    bridgeRollToTp = _decode_ObjectInstance(_el);
                },
                bridgeRollOperation: (_el: _Element): void => {
                    bridgeRollOperation = _decode_BridgeRollArg_Item_bridgeRollOperation(
                        _el
                    );
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decodeSetOf<ManagementExtension>(
                        () => _decode_ManagementExtension
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BridgeRollArg_Item,
                _extension_additions_list_spec_for_BridgeRollArg_Item,
                _root_component_type_list_2_spec_for_BridgeRollArg_Item,
                undefined
            );
            return new BridgeRollArg_Item (
                xc,
                bridgeRollFromTp,
                bridgeRollToTp,
                bridgeRollOperation,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_BridgeRollArg_Item(el);
}


let _cached_encoder_for_BridgeRollArg_Item: $.ASN1Encoder<BridgeRollArg_Item> | null = null;


/**
 * @summary Encodes a(n) BridgeRollArg_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollArg_Item, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollArg_Item(
    value: BridgeRollArg_Item,
    elGetter: $.ASN1Encoder<BridgeRollArg_Item>
): _Element {
    if (!_cached_encoder_for_BridgeRollArg_Item) {
        _cached_encoder_for_BridgeRollArg_Item = function (
            value: BridgeRollArg_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.bridgeRollFromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.bridgeRollToTp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BridgeRollArg_Item_bridgeRollOperation(
                            value.bridgeRollOperation,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encodeSetOf<ManagementExtension>(
                                  () => _encode_ManagementExtension,
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BridgeRollArg_Item(value, elGetter);
}


/* eslint-enable */
