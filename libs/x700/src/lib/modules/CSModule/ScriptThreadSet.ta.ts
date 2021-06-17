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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta';
export {
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta';
import {
    ThreadId,
    _decode_ThreadId,
    _encode_ThreadId,
} from '../CSModule/ThreadId.ta';
export {
    ThreadId,
    _decode_ThreadId,
    _encode_ThreadId,
} from '../CSModule/ThreadId.ta';

/* START_OF_SYMBOL_DEFINITION ScriptThreadSet */
/**
 * @summary ScriptThreadSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptThreadSet ::= SEQUENCE {scriptId  ScriptId,
 *                               threadId  ThreadId
 * }
 * ```
 *
 * @class
 */
export class ScriptThreadSet {
    constructor(
        /**
         * @summary `scriptId`.
         * @public
         * @readonly
         */
        readonly scriptId: ScriptId,
        /**
         * @summary `threadId`.
         * @public
         * @readonly
         */
        readonly threadId: ThreadId
    ) {}

    /**
     * @summary Restructures an object into a ScriptThreadSet
     * @description
     *
     * This takes an `object` and converts it to a `ScriptThreadSet`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScriptThreadSet`.
     * @returns {ScriptThreadSet}
     */
    public static _from_object(
        _o: { [_K in keyof ScriptThreadSet]: ScriptThreadSet[_K] }
    ): ScriptThreadSet {
        return new ScriptThreadSet(_o.scriptId, _o.threadId);
    }
}
/* END_OF_SYMBOL_DEFINITION ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ScriptThreadSet */
/**
 * @summary The Leading Root Component Types of ScriptThreadSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ScriptThreadSet: $.ComponentSpec[] = [
    new $.ComponentSpec('scriptId', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('threadId', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ScriptThreadSet */
/**
 * @summary The Trailing Root Component Types of ScriptThreadSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ScriptThreadSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ScriptThreadSet */
/**
 * @summary The Extension Addition Component Types of ScriptThreadSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ScriptThreadSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptThreadSet */
let _cached_decoder_for_ScriptThreadSet: $.ASN1Decoder<ScriptThreadSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _decode_ScriptThreadSet */
/**
 * @summary Decodes an ASN.1 element into a(n) ScriptThreadSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptThreadSet} The decoded data structure.
 */
export function _decode_ScriptThreadSet(el: _Element) {
    if (!_cached_decoder_for_ScriptThreadSet) {
        _cached_decoder_for_ScriptThreadSet = function (
            el: _Element
        ): ScriptThreadSet {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ScriptThreadSet contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'scriptId';
            sequence[1].name = 'threadId';
            let scriptId!: ScriptId;
            let threadId!: ThreadId;
            scriptId = _decode_ScriptId(sequence[0]);
            threadId = _decode_ThreadId(sequence[1]);
            return new ScriptThreadSet(scriptId, threadId);
        };
    }
    return _cached_decoder_for_ScriptThreadSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptThreadSet */
let _cached_encoder_for_ScriptThreadSet: $.ASN1Encoder<ScriptThreadSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptThreadSet */

/* START_OF_SYMBOL_DEFINITION _encode_ScriptThreadSet */
/**
 * @summary Encodes a(n) ScriptThreadSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptThreadSet, encoded as an ASN.1 Element.
 */
export function _encode_ScriptThreadSet(
    value: ScriptThreadSet,
    elGetter: $.ASN1Encoder<ScriptThreadSet>
) {
    if (!_cached_encoder_for_ScriptThreadSet) {
        _cached_encoder_for_ScriptThreadSet = function (
            value: ScriptThreadSet,
            elGetter: $.ASN1Encoder<ScriptThreadSet>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ScriptId(
                            value.scriptId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ThreadId(
                            value.threadId,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ScriptThreadSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScriptThreadSet */

/* eslint-enable */
