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
    TerminationPointInformation,
    _decode_TerminationPointInformation,
    _encode_TerminationPointInformation,
} from '../ASN1DefinedTypesModule/TerminationPointInformation.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary AddTpsToGtpInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AddTpsToGtpInformation_Item {
    constructor(
        /**
         * @summary `tpsAdded`.
         * @public
         * @readonly
         */
        readonly tpsAdded: TerminationPointInformation[],
        /**
         * @summary `gtp`.
         * @public
         * @readonly
         */
        readonly gtp: OPTIONAL<ObjectInstance>
    ) {}

    /**
     * @summary Restructures an object into a AddTpsToGtpInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `AddTpsToGtpInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddTpsToGtpInformation_Item`.
     * @returns {AddTpsToGtpInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddTpsToGtpInformation_Item]: AddTpsToGtpInformation_Item[_K];
        }
    ): AddTpsToGtpInformation_Item {
        return new AddTpsToGtpInformation_Item(_o.tpsAdded, _o.gtp);
    }
}


/**
 * @summary The Leading Root Component Types of AddTpsToGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddTpsToGtpInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'tpsAdded',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec('gtp', true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of AddTpsToGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddTpsToGtpInformation_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddTpsToGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddTpsToGtpInformation_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_AddTpsToGtpInformation_Item: $.ASN1Decoder<AddTpsToGtpInformation_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpInformation_Item} The decoded data structure.
 */
export function _decode_AddTpsToGtpInformation_Item(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpInformation_Item) {
        _cached_decoder_for_AddTpsToGtpInformation_Item = function (
            el: _Element
        ): AddTpsToGtpInformation_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tpsAdded!: TerminationPointInformation[];
            let gtp: OPTIONAL<ObjectInstance>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                tpsAdded: (_el: _Element): void => {
                    tpsAdded = $._decodeSequenceOf<TerminationPointInformation>(
                        () => _decode_TerminationPointInformation
                    )(_el);
                },
                gtp: (_el: _Element): void => {
                    gtp = _decode_ObjectInstance(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddTpsToGtpInformation_Item,
                _extension_additions_list_spec_for_AddTpsToGtpInformation_Item,
                _root_component_type_list_2_spec_for_AddTpsToGtpInformation_Item,
                undefined
            );
            return new AddTpsToGtpInformation_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                tpsAdded,
                gtp
            );
        };
    }
    return _cached_decoder_for_AddTpsToGtpInformation_Item(el);
}


let _cached_encoder_for_AddTpsToGtpInformation_Item: $.ASN1Encoder<AddTpsToGtpInformation_Item> | null = null;


/**
 * @summary Encodes a(n) AddTpsToGtpInformation_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpInformation_Item(
    value: AddTpsToGtpInformation_Item,
    elGetter: $.ASN1Encoder<AddTpsToGtpInformation_Item>
) {
    if (!_cached_encoder_for_AddTpsToGtpInformation_Item) {
        _cached_encoder_for_AddTpsToGtpInformation_Item = function (
            value: AddTpsToGtpInformation_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSequenceOf<TerminationPointInformation>(
                            () => _encode_TerminationPointInformation,
                            $.BER
                        )(value.tpsAdded, $.BER),
                        /* IF_ABSENT  */ value.gtp === undefined
                            ? undefined
                            : _encode_ObjectInstance(value.gtp, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddTpsToGtpInformation_Item(value, elGetter);
}


/* eslint-enable */
