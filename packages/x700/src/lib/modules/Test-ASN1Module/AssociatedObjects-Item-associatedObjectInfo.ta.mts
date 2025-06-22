/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
/**
 * @summary AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjects-Item-associatedObjectInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AssociatedObjects_Item_associatedObjectInfo {
    constructor(
        /**
         * @summary `associatedObjectInfoId`.
         * @public
         * @readonly
         */
        readonly associatedObjectInfoId: OBJECT_IDENTIFIER,
        /**
         * @summary `associatedObjectInform`.
         * @public
         * @readonly
         */
        readonly associatedObjectInform: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a AssociatedObjects_Item_associatedObjectInfo
     * @description
     *
     * This takes an `object` and converts it to a `AssociatedObjects_Item_associatedObjectInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociatedObjects_Item_associatedObjectInfo`.
     * @returns {AssociatedObjects_Item_associatedObjectInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof AssociatedObjects_Item_associatedObjectInfo]: AssociatedObjects_Item_associatedObjectInfo[_K];
        }
    ): AssociatedObjects_Item_associatedObjectInfo {
        return new AssociatedObjects_Item_associatedObjectInfo(
            _o.associatedObjectInfoId,
            _o.associatedObjectInform
        );
    }
}

/**
 * @summary The Leading Root Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'associatedObjectInfoId',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'associatedObjectInform',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AssociatedObjects_Item_associatedObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo: $.ASN1Decoder<AssociatedObjects_Item_associatedObjectInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjects_Item_associatedObjectInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjects_Item_associatedObjectInfo} The decoded data structure.
 */
export function _decode_AssociatedObjects_Item_associatedObjectInfo(
    el: _Element
) {
    if (!_cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo) {
        _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo = function (
            el: _Element
        ): AssociatedObjects_Item_associatedObjectInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let associatedObjectInfoId!: OBJECT_IDENTIFIER;
            let associatedObjectInform: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                associatedObjectInfoId: (_el: _Element): void => {
                    associatedObjectInfoId = $._decodeObjectIdentifier(_el);
                },
                associatedObjectInform: (_el: _Element): void => {
                    associatedObjectInform = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                _extension_additions_list_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                _root_component_type_list_2_spec_for_AssociatedObjects_Item_associatedObjectInfo,
                undefined
            );
            return new AssociatedObjects_Item_associatedObjectInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                associatedObjectInfoId,
                associatedObjectInform
            );
        };
    }
    return _cached_decoder_for_AssociatedObjects_Item_associatedObjectInfo(el);
}

let _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo: $.ASN1Encoder<AssociatedObjects_Item_associatedObjectInfo> | null = null;

/**
 * @summary Encodes a(n) AssociatedObjects_Item_associatedObjectInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjects_Item_associatedObjectInfo, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjects_Item_associatedObjectInfo(
    value: AssociatedObjects_Item_associatedObjectInfo,
    elGetter: $.ASN1Encoder<AssociatedObjects_Item_associatedObjectInfo>
) {
    if (!_cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo) {
        _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo = function (
            value: AssociatedObjects_Item_associatedObjectInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.associatedObjectInfoId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.associatedObjectInform ===
                        undefined
                            ? undefined
                            : $._encodeAny(value.associatedObjectInform, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AssociatedObjects_Item_associatedObjectInfo(
        value,
        elGetter
    );
}


/* eslint-enable */
