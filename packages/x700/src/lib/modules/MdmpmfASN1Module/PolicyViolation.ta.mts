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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PolicyViolation */
/**
 * @summary PolicyViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyViolation ::= SEQUENCE {
 *   violatorName    ObjectInstance,
 *   violatedPolicy  ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class PolicyViolation {
    constructor(
        /**
         * @summary `violatorName`.
         * @public
         * @readonly
         */
        readonly violatorName: ObjectInstance,
        /**
         * @summary `violatedPolicy`.
         * @public
         * @readonly
         */
        readonly violatedPolicy: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PolicyViolation
     * @description
     *
     * This takes an `object` and converts it to a `PolicyViolation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyViolation`.
     * @returns {PolicyViolation}
     */
    public static _from_object(
        _o: { [_K in keyof PolicyViolation]: PolicyViolation[_K] }
    ): PolicyViolation {
        return new PolicyViolation(_o.violatorName, _o.violatedPolicy);
    }
}
/* END_OF_SYMBOL_DEFINITION PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PolicyViolation */
/**
 * @summary The Leading Root Component Types of PolicyViolation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyViolation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'violatorName',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'violatedPolicy',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PolicyViolation */
/**
 * @summary The Trailing Root Component Types of PolicyViolation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyViolation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PolicyViolation */
/**
 * @summary The Extension Addition Component Types of PolicyViolation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyViolation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PolicyViolation */
let _cached_decoder_for_PolicyViolation: $.ASN1Decoder<PolicyViolation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _decode_PolicyViolation */
/**
 * @summary Decodes an ASN.1 element into a(n) PolicyViolation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyViolation} The decoded data structure.
 */
export function _decode_PolicyViolation(el: _Element) {
    if (!_cached_decoder_for_PolicyViolation) {
        _cached_decoder_for_PolicyViolation = function (
            el: _Element
        ): PolicyViolation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PolicyViolation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'violatorName';
            sequence[1].name = 'violatedPolicy';
            let violatorName!: ObjectInstance;
            let violatedPolicy!: ObjectInstance;
            violatorName = _decode_ObjectInstance(sequence[0]);
            violatedPolicy = _decode_ObjectInstance(sequence[1]);
            return new PolicyViolation(violatorName, violatedPolicy);
        };
    }
    return _cached_decoder_for_PolicyViolation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PolicyViolation */
let _cached_encoder_for_PolicyViolation: $.ASN1Encoder<PolicyViolation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PolicyViolation */

/* START_OF_SYMBOL_DEFINITION _encode_PolicyViolation */
/**
 * @summary Encodes a(n) PolicyViolation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyViolation, encoded as an ASN.1 Element.
 */
export function _encode_PolicyViolation(
    value: PolicyViolation,
    elGetter: $.ASN1Encoder<PolicyViolation>
) {
    if (!_cached_encoder_for_PolicyViolation) {
        _cached_encoder_for_PolicyViolation = function (
            value: PolicyViolation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.violatorName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.violatedPolicy,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PolicyViolation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PolicyViolation */

/* eslint-enable */
