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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ChangeOfAddressAdvice */
/**
 * @summary ChangeOfAddressAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeOfAddressAdvice ::= SEQUENCE {
 *   new-address
 *     [0]  ORDescriptor(WITH COMPONENTS {
 *                         ...,
 *                         formal-name  PRESENT
 *                       }),
 *   effective-from  [1]  Time OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ChangeOfAddressAdvice {
    constructor(
        /**
         * @summary `new_address`.
         * @public
         * @readonly
         */
        readonly new_address: ORDescriptor,
        /**
         * @summary `effective_from`.
         * @public
         * @readonly
         */
        readonly effective_from: OPTIONAL<Time>
    ) {}

    /**
     * @summary Restructures an object into a ChangeOfAddressAdvice
     * @description
     *
     * This takes an `object` and converts it to a `ChangeOfAddressAdvice`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfAddressAdvice`.
     * @returns {ChangeOfAddressAdvice}
     */
    public static _from_object(
        _o: { [_K in keyof ChangeOfAddressAdvice]: ChangeOfAddressAdvice[_K] }
    ): ChangeOfAddressAdvice {
        return new ChangeOfAddressAdvice(_o.new_address, _o.effective_from);
    }
}
/* END_OF_SYMBOL_DEFINITION ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChangeOfAddressAdvice */
/**
 * @summary The Leading Root Component Types of ChangeOfAddressAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangeOfAddressAdvice: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'new-address',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'effective-from',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChangeOfAddressAdvice */
/**
 * @summary The Trailing Root Component Types of ChangeOfAddressAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangeOfAddressAdvice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChangeOfAddressAdvice */
/**
 * @summary The Extension Addition Component Types of ChangeOfAddressAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangeOfAddressAdvice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeOfAddressAdvice */
let _cached_decoder_for_ChangeOfAddressAdvice: $.ASN1Decoder<ChangeOfAddressAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _decode_ChangeOfAddressAdvice */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfAddressAdvice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeOfAddressAdvice} The decoded data structure.
 */
export function _decode_ChangeOfAddressAdvice(el: _Element) {
    if (!_cached_decoder_for_ChangeOfAddressAdvice) {
        _cached_decoder_for_ChangeOfAddressAdvice = function (
            el: _Element
        ): ChangeOfAddressAdvice {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let new_address!: ORDescriptor;
            let effective_from: OPTIONAL<Time>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'new-address': (_el: _Element): void => {
                    new_address = $._decode_implicit<ORDescriptor>(
                        () => _decode_ORDescriptor
                    )(_el);
                },
                'effective-from': (_el: _Element): void => {
                    effective_from = $._decode_implicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChangeOfAddressAdvice,
                _extension_additions_list_spec_for_ChangeOfAddressAdvice,
                _root_component_type_list_2_spec_for_ChangeOfAddressAdvice,
                undefined
            );
            return new ChangeOfAddressAdvice /* SEQUENCE_CONSTRUCTOR_CALL */(
                new_address,
                effective_from
            );
        };
    }
    return _cached_decoder_for_ChangeOfAddressAdvice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeOfAddressAdvice */
let _cached_encoder_for_ChangeOfAddressAdvice: $.ASN1Encoder<ChangeOfAddressAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeOfAddressAdvice */

/* START_OF_SYMBOL_DEFINITION _encode_ChangeOfAddressAdvice */
/**
 * @summary Encodes a(n) ChangeOfAddressAdvice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfAddressAdvice, encoded as an ASN.1 Element.
 */
export function _encode_ChangeOfAddressAdvice(
    value: ChangeOfAddressAdvice,
    elGetter: $.ASN1Encoder<ChangeOfAddressAdvice>
) {
    if (!_cached_encoder_for_ChangeOfAddressAdvice) {
        _cached_encoder_for_ChangeOfAddressAdvice = function (
            value: ChangeOfAddressAdvice        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ORDescriptor,
                            $.BER
                        )(value.new_address, $.BER),
                        /* IF_ABSENT  */ value.effective_from === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Time,
                                  $.BER
                              )(value.effective_from, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ChangeOfAddressAdvice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangeOfAddressAdvice */

/* eslint-enable */
