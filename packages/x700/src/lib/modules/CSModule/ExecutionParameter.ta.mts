/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
export {
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta.mjs';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ExecutionParameter */
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
/* END_OF_SYMBOL_DEFINITION ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExecutionParameter */
/**
 * @summary The Leading Root Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExecutionParameter: $.ComponentSpec[] = [
    new $.ComponentSpec('scriptId', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'scriptParameters',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExecutionParameter */
/**
 * @summary The Trailing Root Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExecutionParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExecutionParameter */
/**
 * @summary The Extension Addition Component Types of ExecutionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExecutionParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionParameter */
let _cached_decoder_for_ExecutionParameter: $.ASN1Decoder<ExecutionParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ExecutionParameter */
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
/* END_OF_SYMBOL_DEFINITION _decode_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionParameter */
let _cached_encoder_for_ExecutionParameter: $.ASN1Encoder<ExecutionParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ExecutionParameter */
/**
 * @summary Encodes a(n) ExecutionParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionParameter, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionParameter(
    value: ExecutionParameter,
    elGetter: $.ASN1Encoder<ExecutionParameter>
) {
    if (!_cached_encoder_for_ExecutionParameter) {
        _cached_encoder_for_ExecutionParameter = function (
            value: ExecutionParameter,
            elGetter: $.ASN1Encoder<ExecutionParameter>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ExecutionParameter */

/* eslint-enable */
