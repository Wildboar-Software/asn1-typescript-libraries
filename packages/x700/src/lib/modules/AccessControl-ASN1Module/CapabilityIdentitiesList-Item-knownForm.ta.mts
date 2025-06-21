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
    InitiatorName,
    _decode_InitiatorName,
    _encode_InitiatorName,
} from '../AccessControl-ASN1Module/InitiatorName.ta.mjs';
import {
    SdaList,
    _decode_SdaList,
    _encode_SdaList,
} from '../AccessControl-ASN1Module/SdaList.ta.mjs';
/**
 * @summary CapabilityIdentitiesList_Item_knownForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CapabilityIdentitiesList-Item-knownForm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CapabilityIdentitiesList_Item_knownForm {
    constructor(
        /**
         * @summary `initiatorName`.
         * @public
         * @readonly
         */
        readonly initiatorName: InitiatorName,
        /**
         * @summary `sdaList`.
         * @public
         * @readonly
         */
        readonly sdaList: OPTIONAL<SdaList>
    ) {}

    /**
     * @summary Restructures an object into a CapabilityIdentitiesList_Item_knownForm
     * @description
     *
     * This takes an `object` and converts it to a `CapabilityIdentitiesList_Item_knownForm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CapabilityIdentitiesList_Item_knownForm`.
     * @returns {CapabilityIdentitiesList_Item_knownForm}
     */
    public static _from_object(
        _o: {
            [_K in keyof CapabilityIdentitiesList_Item_knownForm]: CapabilityIdentitiesList_Item_knownForm[_K];
        }
    ): CapabilityIdentitiesList_Item_knownForm {
        return new CapabilityIdentitiesList_Item_knownForm(
            _o.initiatorName,
            _o.sdaList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CapabilityIdentitiesList_Item_knownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CapabilityIdentitiesList_Item_knownForm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'initiatorName',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'sdaList',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of CapabilityIdentitiesList_Item_knownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CapabilityIdentitiesList_Item_knownForm: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CapabilityIdentitiesList_Item_knownForm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CapabilityIdentitiesList_Item_knownForm: $.ComponentSpec[] = [];

let _cached_decoder_for_CapabilityIdentitiesList_Item_knownForm: $.ASN1Decoder<CapabilityIdentitiesList_Item_knownForm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CapabilityIdentitiesList_Item_knownForm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CapabilityIdentitiesList_Item_knownForm} The decoded data structure.
 */
export function _decode_CapabilityIdentitiesList_Item_knownForm(el: _Element) {
    if (!_cached_decoder_for_CapabilityIdentitiesList_Item_knownForm) {
        _cached_decoder_for_CapabilityIdentitiesList_Item_knownForm = function (
            el: _Element
        ): CapabilityIdentitiesList_Item_knownForm {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let initiatorName!: InitiatorName;
            let sdaList: OPTIONAL<SdaList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                initiatorName: (_el: _Element): void => {
                    initiatorName = _decode_InitiatorName(_el);
                },
                sdaList: (_el: _Element): void => {
                    sdaList = _decode_SdaList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CapabilityIdentitiesList_Item_knownForm,
                _extension_additions_list_spec_for_CapabilityIdentitiesList_Item_knownForm,
                _root_component_type_list_2_spec_for_CapabilityIdentitiesList_Item_knownForm,
                undefined
            );
            return new CapabilityIdentitiesList_Item_knownForm /* SEQUENCE_CONSTRUCTOR_CALL */(
                initiatorName,
                sdaList
            );
        };
    }
    return _cached_decoder_for_CapabilityIdentitiesList_Item_knownForm(el);
}

let _cached_encoder_for_CapabilityIdentitiesList_Item_knownForm: $.ASN1Encoder<CapabilityIdentitiesList_Item_knownForm> | null = null;

/**
 * @summary Encodes a(n) CapabilityIdentitiesList_Item_knownForm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapabilityIdentitiesList_Item_knownForm, encoded as an ASN.1 Element.
 */
export function _encode_CapabilityIdentitiesList_Item_knownForm(
    value: CapabilityIdentitiesList_Item_knownForm,
    elGetter: $.ASN1Encoder<CapabilityIdentitiesList_Item_knownForm>
) {
    if (!_cached_encoder_for_CapabilityIdentitiesList_Item_knownForm) {
        _cached_encoder_for_CapabilityIdentitiesList_Item_knownForm = function (
            value: CapabilityIdentitiesList_Item_knownForm        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_InitiatorName(
                            value.initiatorName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.sdaList === undefined
                            ? undefined
                            : _encode_SdaList(value.sdaList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CapabilityIdentitiesList_Item_knownForm(
        value,
        elGetter
    );
}


/* eslint-enable */
