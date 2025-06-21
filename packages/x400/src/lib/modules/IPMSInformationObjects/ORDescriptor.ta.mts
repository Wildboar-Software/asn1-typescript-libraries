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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import {
    FreeFormName,
    _decode_FreeFormName,
    _encode_FreeFormName,
} from '../IPMSInformationObjects/FreeFormName.ta.mjs';
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from '../IPMSInformationObjects/TelephoneNumber.ta.mjs';
/**
 * @summary ORDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORDescriptor ::= SET {
 *   formal-name       ORName OPTIONAL,
 *   free-form-name    [0]  FreeFormName OPTIONAL,
 *   telephone-number  [1]  TelephoneNumber OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ORDescriptor {
    constructor(
        /**
         * @summary `formal_name`.
         * @public
         * @readonly
         */
        readonly formal_name: OPTIONAL<ORName>,
        /**
         * @summary `free_form_name`.
         * @public
         * @readonly
         */
        readonly free_form_name: OPTIONAL<FreeFormName>,
        /**
         * @summary `telephone_number`.
         * @public
         * @readonly
         */
        readonly telephone_number: OPTIONAL<TelephoneNumber>
    ) {}

    /**
     * @summary Restructures an object into a ORDescriptor
     * @description
     *
     * This takes an `object` and converts it to a `ORDescriptor`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ORDescriptor`.
     * @returns {ORDescriptor}
     */
    public static _from_object(
        _o: { [_K in keyof ORDescriptor]: ORDescriptor[_K] }
    ): ORDescriptor {
        return new ORDescriptor(
            _o.formal_name,
            _o.free_form_name,
            _o.telephone_number
        );
    }
}

/**
 * @summary The Leading Root Component Types of ORDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ORDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'formal-name',
        true,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'free-form-name',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'telephone-number',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ORDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ORDescriptor: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ORDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ORDescriptor: $.ComponentSpec[] = [];

let _cached_decoder_for_ORDescriptor: $.ASN1Decoder<ORDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORDescriptor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORDescriptor} The decoded data structure.
 */
export function _decode_ORDescriptor(el: _Element) {
    if (!_cached_decoder_for_ORDescriptor) {
        _cached_decoder_for_ORDescriptor = function (
            el: _Element
        ): ORDescriptor {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let formal_name: OPTIONAL<ORName>;
            let free_form_name: OPTIONAL<FreeFormName>;
            let telephone_number: OPTIONAL<TelephoneNumber>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'formal-name': (_el: _Element): void => {
                    formal_name = _decode_ORName(_el);
                },
                'free-form-name': (_el: _Element): void => {
                    free_form_name = $._decode_implicit<FreeFormName>(
                        () => _decode_FreeFormName
                    )(_el);
                },
                'telephone-number': (_el: _Element): void => {
                    telephone_number = $._decode_implicit<TelephoneNumber>(
                        () => _decode_TelephoneNumber
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ORDescriptor,
                _extension_additions_list_spec_for_ORDescriptor,
                _root_component_type_list_2_spec_for_ORDescriptor,
                undefined
            );
            return new ORDescriptor /* SET_CONSTRUCTOR_CALL */(
                formal_name,
                free_form_name,
                telephone_number
            );
        };
    }
    return _cached_decoder_for_ORDescriptor(el);
}

let _cached_encoder_for_ORDescriptor: $.ASN1Encoder<ORDescriptor> | null = null;

/**
 * @summary Encodes a(n) ORDescriptor into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORDescriptor, encoded as an ASN.1 Element.
 */
export function _encode_ORDescriptor(
    value: ORDescriptor,
    elGetter: $.ASN1Encoder<ORDescriptor>
) {
    if (!_cached_encoder_for_ORDescriptor) {
        _cached_encoder_for_ORDescriptor = function (
            value: ORDescriptor        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.formal_name === undefined
                            ? undefined
                            : _encode_ORName(value.formal_name, $.BER),
                        /* IF_ABSENT  */ value.free_form_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_FreeFormName,
                                  $.BER
                              )(value.free_form_name, $.BER),
                        /* IF_ABSENT  */ value.telephone_number === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TelephoneNumber,
                                  $.BER
                              )(value.telephone_number, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ORDescriptor(value, elGetter);
}


/* eslint-enable */
