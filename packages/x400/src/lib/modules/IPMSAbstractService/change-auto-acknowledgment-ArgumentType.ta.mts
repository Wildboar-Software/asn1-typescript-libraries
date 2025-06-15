/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
/**
 * @summary change_auto_acknowledgment_ArgumentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-auto-acknowledgment-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class change_auto_acknowledgment_ArgumentType {
    constructor(
        /**
         * @summary `auto_acknowledge_IPMs`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_IPMs: BOOLEAN,
        /**
         * @summary `auto_acknowledge_suppl_receipt_info`.
         * @public
         * @readonly
         */
        readonly auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplementaryInformation>
    ) {}

    /**
     * @summary Restructures an object into a change_auto_acknowledgment_ArgumentType
     * @description
     *
     * This takes an `object` and converts it to a `change_auto_acknowledgment_ArgumentType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `change_auto_acknowledgment_ArgumentType`.
     * @returns {change_auto_acknowledgment_ArgumentType}
     */
    public static _from_object(
        _o: {
            [_K in keyof change_auto_acknowledgment_ArgumentType]: change_auto_acknowledgment_ArgumentType[_K];
        }
    ): change_auto_acknowledgment_ArgumentType {
        return new change_auto_acknowledgment_ArgumentType(
            _o.auto_acknowledge_IPMs,
            _o.auto_acknowledge_suppl_receipt_info
        );
    }
}

/**
 * @summary The Leading Root Component Types of change_auto_acknowledgment_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_change_auto_acknowledgment_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'auto-acknowledge-IPMs',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auto-acknowledge-suppl-receipt-info',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of change_auto_acknowledgment_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_change_auto_acknowledgment_ArgumentType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of change_auto_acknowledgment_ArgumentType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_change_auto_acknowledgment_ArgumentType: $.ComponentSpec[] = [];

let _cached_decoder_for_change_auto_acknowledgment_ArgumentType: $.ASN1Decoder<change_auto_acknowledgment_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) change_auto_acknowledgment_ArgumentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {change_auto_acknowledgment_ArgumentType} The decoded data structure.
 */
export function _decode_change_auto_acknowledgment_ArgumentType(el: _Element) {
    if (!_cached_decoder_for_change_auto_acknowledgment_ArgumentType) {
        _cached_decoder_for_change_auto_acknowledgment_ArgumentType = function (
            el: _Element
        ): change_auto_acknowledgment_ArgumentType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let auto_acknowledge_IPMs!: BOOLEAN;
            let auto_acknowledge_suppl_receipt_info: OPTIONAL<SupplementaryInformation>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'auto-acknowledge-IPMs': (_el: _Element): void => {
                    auto_acknowledge_IPMs = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'auto-acknowledge-suppl-receipt-info': (
                    _el: _Element
                ): void => {
                    auto_acknowledge_suppl_receipt_info = $._decode_implicit<SupplementaryInformation>(
                        () => _decode_SupplementaryInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_change_auto_acknowledgment_ArgumentType,
                _extension_additions_list_spec_for_change_auto_acknowledgment_ArgumentType,
                _root_component_type_list_2_spec_for_change_auto_acknowledgment_ArgumentType,
                undefined
            );
            return new change_auto_acknowledgment_ArgumentType /* SET_CONSTRUCTOR_CALL */(
                auto_acknowledge_IPMs,
                auto_acknowledge_suppl_receipt_info
            );
        };
    }
    return _cached_decoder_for_change_auto_acknowledgment_ArgumentType(el);
}

let _cached_encoder_for_change_auto_acknowledgment_ArgumentType: $.ASN1Encoder<change_auto_acknowledgment_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) change_auto_acknowledgment_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The change_auto_acknowledgment_ArgumentType, encoded as an ASN.1 Element.
 */
export function _encode_change_auto_acknowledgment_ArgumentType(
    value: change_auto_acknowledgment_ArgumentType,
    elGetter: $.ASN1Encoder<change_auto_acknowledgment_ArgumentType>
) {
    if (!_cached_encoder_for_change_auto_acknowledgment_ArgumentType) {
        _cached_encoder_for_change_auto_acknowledgment_ArgumentType = function (
            value: change_auto_acknowledgment_ArgumentType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.auto_acknowledge_IPMs, $.BER),
                        /* IF_ABSENT  */ value.auto_acknowledge_suppl_receipt_info ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SupplementaryInformation,
                                  $.BER
                              )(
                                  value.auto_acknowledge_suppl_receipt_info,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_change_auto_acknowledgment_ArgumentType(
        value,
        elGetter
    );
}


/* eslint-enable */
