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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    EntryClass,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    EntryClassErrorParameter_problem,
    _decode_EntryClassErrorParameter_problem,
    _encode_EntryClassErrorParameter_problem,
} from '../MSAbstractService/EntryClassErrorParameter-problem.ta.mjs';
/**
 * @summary EntryClassErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryClassErrorParameter ::= SET {
 *   entry-class  [0]  EntryClass,
 *   problem
 *     [1]  BIT STRING {unsupported-entry-class(0), entry-class-not-subscribed(1),
 *                      inappropriate-entry-class(2)}
 * }
 * ```
 *
 * @class
 */
export class EntryClassErrorParameter {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: EntryClass,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: EntryClassErrorParameter_problem
    ) {}

    /**
     * @summary Restructures an object into a EntryClassErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `EntryClassErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryClassErrorParameter`.
     * @returns {EntryClassErrorParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof EntryClassErrorParameter]: EntryClassErrorParameter[_K];
        }
    ): EntryClassErrorParameter {
        return new EntryClassErrorParameter(_o.entry_class, _o.problem);
    }
}

/**
 * @summary The Leading Root Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_EntryClassErrorParameter: $.ASN1Decoder<EntryClassErrorParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryClassErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryClassErrorParameter} The decoded data structure.
 */
export function _decode_EntryClassErrorParameter(el: _Element) {
    if (!_cached_decoder_for_EntryClassErrorParameter) {
        _cached_decoder_for_EntryClassErrorParameter = function (
            el: _Element
        ): EntryClassErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class!: EntryClass;
            let problem!: EntryClassErrorParameter_problem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<EntryClassErrorParameter_problem>(
                        () => _decode_EntryClassErrorParameter_problem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryClassErrorParameter,
                _extension_additions_list_spec_for_EntryClassErrorParameter,
                _root_component_type_list_2_spec_for_EntryClassErrorParameter,
                undefined
            );
            return new EntryClassErrorParameter /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                problem
            );
        };
    }
    return _cached_decoder_for_EntryClassErrorParameter(el);
}

let _cached_encoder_for_EntryClassErrorParameter: $.ASN1Encoder<EntryClassErrorParameter> | null = null;

/**
 * @summary Encodes a(n) EntryClassErrorParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryClassErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_EntryClassErrorParameter(
    value: EntryClassErrorParameter,
    elGetter: $.ASN1Encoder<EntryClassErrorParameter>
) {
    if (!_cached_encoder_for_EntryClassErrorParameter) {
        _cached_encoder_for_EntryClassErrorParameter = function (
            value: EntryClassErrorParameter        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_EntryClass,
                            $.BER
                        )(value.entry_class, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_EntryClassErrorParameter_problem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EntryClassErrorParameter(value, elGetter);
}


/* eslint-enable */
