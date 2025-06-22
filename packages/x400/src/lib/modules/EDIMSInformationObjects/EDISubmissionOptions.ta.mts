/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    BodyPartSpecifiers,
    _decode_BodyPartSpecifiers,
    _encode_BodyPartSpecifiers,
} from '../EDIMSInformationObjects/BodyPartSpecifiers.ta.mjs';
/**
 * @summary EDISubmissionOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDISubmissionOptions ::= SET {assembly-instructions  [0]  BodyPartSpecifiers
 * }
 * ```
 *
 * @class
 */
export class EDISubmissionOptions {
    constructor(
        /**
         * @summary `assembly_instructions`.
         * @public
         * @readonly
         */
        readonly assembly_instructions: BodyPartSpecifiers
    ) {}

    /**
     * @summary Restructures an object into a EDISubmissionOptions
     * @description
     *
     * This takes an `object` and converts it to a `EDISubmissionOptions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDISubmissionOptions`.
     * @returns {EDISubmissionOptions}
     */
    public static _from_object(
        _o: { [_K in keyof EDISubmissionOptions]: EDISubmissionOptions[_K] }
    ): EDISubmissionOptions {
        return new EDISubmissionOptions(_o.assembly_instructions);
    }
}

/**
 * @summary The Leading Root Component Types of EDISubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDISubmissionOptions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'assembly-instructions',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDISubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDISubmissionOptions: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDISubmissionOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDISubmissionOptions: $.ComponentSpec[] = [];

let _cached_decoder_for_EDISubmissionOptions: $.ASN1Decoder<EDISubmissionOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDISubmissionOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDISubmissionOptions} The decoded data structure.
 */
export function _decode_EDISubmissionOptions(el: _Element) {
    if (!_cached_decoder_for_EDISubmissionOptions) {
        _cached_decoder_for_EDISubmissionOptions = function (
            el: _Element
        ): EDISubmissionOptions {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let assembly_instructions!: BodyPartSpecifiers;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'assembly-instructions': (_el: _Element): void => {
                    assembly_instructions = $._decode_implicit<BodyPartSpecifiers>(
                        () => _decode_BodyPartSpecifiers
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDISubmissionOptions,
                _extension_additions_list_spec_for_EDISubmissionOptions,
                _root_component_type_list_2_spec_for_EDISubmissionOptions,
                undefined
            );
            return new EDISubmissionOptions /* SET_CONSTRUCTOR_CALL */(
                assembly_instructions
            );
        };
    }
    return _cached_decoder_for_EDISubmissionOptions(el);
}

let _cached_encoder_for_EDISubmissionOptions: $.ASN1Encoder<EDISubmissionOptions> | null = null;

/**
 * @summary Encodes a(n) EDISubmissionOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDISubmissionOptions, encoded as an ASN.1 Element.
 */
export function _encode_EDISubmissionOptions(
    value: EDISubmissionOptions,
    elGetter: $.ASN1Encoder<EDISubmissionOptions>
) {
    if (!_cached_encoder_for_EDISubmissionOptions) {
        _cached_encoder_for_EDISubmissionOptions = function (
            value: EDISubmissionOptions        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_BodyPartSpecifiers,
                            $.BER
                        )(value.assembly_instructions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDISubmissionOptions(value, elGetter);
}


/* eslint-enable */
