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
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta.mjs';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';
/**
 * @summary ExecutionParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionParameter ::= SEQUENCE {
 *   scriptId          ScriptId,
 *   scriptParameters  SEQUENCE OF Attribute
 * }
 * ```
 *
 * @class
 */
export class ExecutionParameter {
    constructor(
        /**
         * @summary `scriptId`.
         * @public
         * @readonly
         */
        readonly scriptId: ScriptId,
        /**
         * @summary `scriptParameters`.
         * @public
         * @readonly
         */
        readonly scriptParameters: Attribute[]
    ) {}

    /**
     * @summary Restructures an object into a ExecutionParameter
     * @description
     *
     * This takes an `object` and converts it to a `ExecutionParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecutionParameter`.
     * @returns {ExecutionParameter}
     */
    public static _from_object(
        _o: { [_K in keyof ExecutionParameter]: ExecutionParameter[_K] }
    ): ExecutionParameter {
        return new ExecutionParameter(_o.scriptId, _o.scriptParameters);
    }
}

/**
 * @summary The Leading Root Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExecutionParameter: $.ComponentSpec[] = [
    new $.ComponentSpec('scriptId', false, $.hasAnyTag),
    new $.ComponentSpec(
        'scriptParameters',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExecutionParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExecutionParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_ExecutionParameter: $.ASN1Decoder<ExecutionParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecutionParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecutionParameter} The decoded data structure.
 */
export function _decode_ExecutionParameter(el: _Element) {
    if (!_cached_decoder_for_ExecutionParameter) {
        _cached_decoder_for_ExecutionParameter = function (
            el: _Element
        ): ExecutionParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ExecutionParameter contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'scriptId';
            sequence[1].name = 'scriptParameters';
            let scriptId!: ScriptId;
            let scriptParameters!: Attribute[];
            scriptId = _decode_ScriptId(sequence[0]);
            scriptParameters = $._decodeSequenceOf<Attribute>(
                () => _decode_Attribute
            )(sequence[1]);
            return new ExecutionParameter(scriptId, scriptParameters);
        };
    }
    return _cached_decoder_for_ExecutionParameter(el);
}

let _cached_encoder_for_ExecutionParameter: $.ASN1Encoder<ExecutionParameter> | null = null;

/**
 * @summary Encodes a(n) ExecutionParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionParameter, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionParameter(
    value: ExecutionParameter,
    elGetter: $.ASN1Encoder<ExecutionParameter>
) {
    if (!_cached_encoder_for_ExecutionParameter) {
        _cached_encoder_for_ExecutionParameter = function (
            value: ExecutionParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ScriptId(
                            value.scriptId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        )(value.scriptParameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExecutionParameter(value, elGetter);
}


/* eslint-enable */
