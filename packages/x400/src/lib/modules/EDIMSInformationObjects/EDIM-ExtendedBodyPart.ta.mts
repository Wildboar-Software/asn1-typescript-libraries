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
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../EDIMSInformationObjects/BodyPartReference.ta.mjs';
import {
    ExtendedBodyPart,
    _decode_ExtendedBodyPart,
    _encode_ExtendedBodyPart,
} from '../IPMSInformationObjects/ExtendedBodyPart.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EDIM_ExtendedBodyPart */
/**
 * @summary EDIM_ExtendedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIM-ExtendedBodyPart ::= SEQUENCE {
 *   body-part-reference  [0]  BodyPartReference OPTIONAL,
 *   extended-body-part
 *     [1]  ExtendedBodyPart{{IPMBodyPartTable}}-- from IPMS --
 * }
 * ```
 *
 * @class
 */
export class EDIM_ExtendedBodyPart {
    constructor(
        /**
         * @summary `body_part_reference`.
         * @public
         * @readonly
         */
        readonly body_part_reference: OPTIONAL<BodyPartReference>,
        /**
         * @summary `extended_body_part`.
         * @public
         * @readonly
         */
        readonly extended_body_part: ExtendedBodyPart
    ) {}

    /**
     * @summary Restructures an object into a EDIM_ExtendedBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `EDIM_ExtendedBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIM_ExtendedBodyPart`.
     * @returns {EDIM_ExtendedBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof EDIM_ExtendedBodyPart]: EDIM_ExtendedBodyPart[_K] }
    ): EDIM_ExtendedBodyPart {
        return new EDIM_ExtendedBodyPart(
            _o.body_part_reference,
            _o.extended_body_part
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIM_ExtendedBodyPart */
/**
 * @summary The Leading Root Component Types of EDIM_ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIM_ExtendedBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'body-part-reference',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extended-body-part',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIM_ExtendedBodyPart */
/**
 * @summary The Trailing Root Component Types of EDIM_ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIM_ExtendedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIM_ExtendedBodyPart */
/**
 * @summary The Extension Addition Component Types of EDIM_ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIM_ExtendedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIM_ExtendedBodyPart */
let _cached_decoder_for_EDIM_ExtendedBodyPart: $.ASN1Decoder<EDIM_ExtendedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_EDIM_ExtendedBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIM_ExtendedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIM_ExtendedBodyPart} The decoded data structure.
 */
export function _decode_EDIM_ExtendedBodyPart(el: _Element) {
    if (!_cached_decoder_for_EDIM_ExtendedBodyPart) {
        _cached_decoder_for_EDIM_ExtendedBodyPart = function (
            el: _Element
        ): EDIM_ExtendedBodyPart {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let body_part_reference: OPTIONAL<BodyPartReference>;
            let extended_body_part!: ExtendedBodyPart;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'body-part-reference': (_el: _Element): void => {
                    body_part_reference = $._decode_implicit<BodyPartReference>(
                        () => _decode_BodyPartReference
                    )(_el);
                },
                'extended-body-part': (_el: _Element): void => {
                    extended_body_part = $._decode_implicit<ExtendedBodyPart>(
                        () => _decode_ExtendedBodyPart
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIM_ExtendedBodyPart,
                _extension_additions_list_spec_for_EDIM_ExtendedBodyPart,
                _root_component_type_list_2_spec_for_EDIM_ExtendedBodyPart,
                undefined
            );
            return new EDIM_ExtendedBodyPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                body_part_reference,
                extended_body_part
            );
        };
    }
    return _cached_decoder_for_EDIM_ExtendedBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIM_ExtendedBodyPart */
let _cached_encoder_for_EDIM_ExtendedBodyPart: $.ASN1Encoder<EDIM_ExtendedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIM_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_EDIM_ExtendedBodyPart */
/**
 * @summary Encodes a(n) EDIM_ExtendedBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIM_ExtendedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_EDIM_ExtendedBodyPart(
    value: EDIM_ExtendedBodyPart,
    elGetter: $.ASN1Encoder<EDIM_ExtendedBodyPart>
) {
    if (!_cached_encoder_for_EDIM_ExtendedBodyPart) {
        _cached_encoder_for_EDIM_ExtendedBodyPart = function (
            value: EDIM_ExtendedBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.body_part_reference === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_BodyPartReference,
                                  $.BER
                              )(value.body_part_reference, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ExtendedBodyPart,
                            $.BER
                        )(value.extended_body_part, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIM_ExtendedBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIM_ExtendedBodyPart */

/* eslint-enable */
