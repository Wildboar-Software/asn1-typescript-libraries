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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    BridgeRollArg_Item_bridgeRollOperation,
    _enum_for_BridgeRollArg_Item_bridgeRollOperation,
    BridgeRollArg_Item_bridgeRollOperation_bridge /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bridge /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BridgeRollArg_Item_bridgeRollOperation_roll /* IMPORTED_LONG_ENUMERATION_ITEM */,
    roll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BridgeRollArg_Item_bridgeRollOperation_releaseBridge /* IMPORTED_LONG_ENUMERATION_ITEM */,
    releaseBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_BridgeRollArg_Item_bridgeRollOperation,
    _encode_BridgeRollArg_Item_bridgeRollOperation,
} from '../M3100ASN1TypeModule5/BridgeRollArg-Item-bridgeRollOperation.ta';
export {
    BridgeRollArg_Item_bridgeRollOperation,
    _enum_for_BridgeRollArg_Item_bridgeRollOperation,
    BridgeRollArg_Item_bridgeRollOperation_bridge /* IMPORTED_LONG_ENUMERATION_ITEM */,
    bridge /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BridgeRollArg_Item_bridgeRollOperation_roll /* IMPORTED_LONG_ENUMERATION_ITEM */,
    roll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    BridgeRollArg_Item_bridgeRollOperation_releaseBridge /* IMPORTED_LONG_ENUMERATION_ITEM */,
    releaseBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_BridgeRollArg_Item_bridgeRollOperation,
    _encode_BridgeRollArg_Item_bridgeRollOperation,
} from '../M3100ASN1TypeModule5/BridgeRollArg-Item-bridgeRollOperation.ta';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION BridgeRollArg_Item */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BridgeRollArg_Item */
/**
 * @summary The Leading Root Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('xc', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'bridgeRollFromTp',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bridgeRollToTp',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bridgeRollOperation',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BridgeRollArg_Item */
/**
 * @summary The Trailing Root Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BridgeRollArg_Item */
/**
 * @summary The Extension Addition Component Types of BridgeRollArg_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BridgeRollArg_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg_Item */
let _cached_decoder_for_BridgeRollArg_Item: $.ASN1Decoder<BridgeRollArg_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _decode_BridgeRollArg_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollArg_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollArg_Item} The decoded data structure.
 */
export function _decode_BridgeRollArg_Item(el: _Element) {
    if (!_cached_decoder_for_BridgeRollArg_Item) {
        _cached_decoder_for_BridgeRollArg_Item = function (
            el: _Element
        ): BridgeRollArg_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let xc!: ObjectInstance;
            let bridgeRollFromTp!: ObjectInstance;
            let bridgeRollToTp!: ObjectInstance;
            let bridgeRollOperation!: BridgeRollArg_Item_bridgeRollOperation;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BridgeRollArg_Item,
                _extension_additions_list_spec_for_BridgeRollArg_Item,
                _root_component_type_list_2_spec_for_BridgeRollArg_Item,
                undefined
            );
            return new BridgeRollArg_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg_Item */
let _cached_encoder_for_BridgeRollArg_Item: $.ASN1Encoder<BridgeRollArg_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg_Item */

/* START_OF_SYMBOL_DEFINITION _encode_BridgeRollArg_Item */
/**
 * @summary Encodes a(n) BridgeRollArg_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollArg_Item, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollArg_Item(
    value: BridgeRollArg_Item,
    elGetter: $.ASN1Encoder<BridgeRollArg_Item>
) {
    if (!_cached_encoder_for_BridgeRollArg_Item) {
        _cached_encoder_for_BridgeRollArg_Item = function (
            value: BridgeRollArg_Item,
            elGetter: $.ASN1Encoder<BridgeRollArg_Item>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BridgeRollArg_Item */

/* eslint-enable */
