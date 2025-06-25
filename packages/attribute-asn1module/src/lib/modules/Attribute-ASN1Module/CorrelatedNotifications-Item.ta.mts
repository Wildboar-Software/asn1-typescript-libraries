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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationIdentifier, _decode_NotificationIdentifier, _encode_NotificationIdentifier } from "../Attribute-ASN1Module/NotificationIdentifier.ta.mjs";
import { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs";
/**
 * @summary CorrelatedNotifications_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedNotifications-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export
class CorrelatedNotifications_Item {
    constructor (
        /**
         * @summary `correlatedNotifications`.
         * @public
         * @readonly
         */
        readonly correlatedNotifications: NotificationIdentifier[],
        /**
         * @summary `sourceObjectInst`.
         * @public
         * @readonly
         */
        readonly sourceObjectInst: OPTIONAL<ObjectInstance>
    ) {}

    /**
     * @summary Restructures an object into a CorrelatedNotifications_Item
     * @description
     *
     * This takes an `object` and converts it to a `CorrelatedNotifications_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorrelatedNotifications_Item`.
     * @returns {CorrelatedNotifications_Item}
     */
    public static _from_object (_o: { [_K in keyof (CorrelatedNotifications_Item)]: (CorrelatedNotifications_Item)[_K] }): CorrelatedNotifications_Item {
        return new CorrelatedNotifications_Item(_o.correlatedNotifications, _o.sourceObjectInst);
    }


}

/**
 * @summary The Leading Root Component Types of CorrelatedNotifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorrelatedNotifications_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("correlatedNotifications", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("sourceObjectInst", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CorrelatedNotifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorrelatedNotifications_Item: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of CorrelatedNotifications_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CorrelatedNotifications_Item: $.ComponentSpec[] = [

];

let _cached_decoder_for_CorrelatedNotifications_Item: $.ASN1Decoder<CorrelatedNotifications_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedNotifications_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedNotifications_Item} The decoded data structure.
 */
export
function _decode_CorrelatedNotifications_Item (el: _Element): CorrelatedNotifications_Item {
    if (!_cached_decoder_for_CorrelatedNotifications_Item) { _cached_decoder_for_CorrelatedNotifications_Item = function (el: _Element): CorrelatedNotifications_Item {
    let correlatedNotifications!: NotificationIdentifier[];
    let sourceObjectInst: OPTIONAL<ObjectInstance>;
    const callbacks: $.DecodingMap = {
        "correlatedNotifications": (_el: _Element): void => { correlatedNotifications = $._decodeSetOf<NotificationIdentifier>(() => _decode_NotificationIdentifier)(_el); },
        "sourceObjectInst": (_el: _Element): void => { sourceObjectInst = _decode_ObjectInstance(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CorrelatedNotifications_Item,
        _extension_additions_list_spec_for_CorrelatedNotifications_Item,
        _root_component_type_list_2_spec_for_CorrelatedNotifications_Item,
        undefined,
    );
    return new CorrelatedNotifications_Item( 
        correlatedNotifications,
        sourceObjectInst
    );
}; }
    return _cached_decoder_for_CorrelatedNotifications_Item(el);
}

let _cached_encoder_for_CorrelatedNotifications_Item: $.ASN1Encoder<CorrelatedNotifications_Item> | null = null;

/**
 * @summary Encodes a(n) CorrelatedNotifications_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedNotifications_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelatedNotifications_Item (value: CorrelatedNotifications_Item, elGetter: $.ASN1Encoder<CorrelatedNotifications_Item>): _Element {
    if (!_cached_encoder_for_CorrelatedNotifications_Item) { _cached_encoder_for_CorrelatedNotifications_Item = function (value: CorrelatedNotifications_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSetOf<NotificationIdentifier>(() => _encode_NotificationIdentifier, $.BER)(value.correlatedNotifications, $.BER),
            /* IF_ABSENT  */ ((value.sourceObjectInst === undefined) ? undefined : _encode_ObjectInstance(value.sourceObjectInst, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorrelatedNotifications_Item(value, elGetter);
}


/* eslint-enable */
