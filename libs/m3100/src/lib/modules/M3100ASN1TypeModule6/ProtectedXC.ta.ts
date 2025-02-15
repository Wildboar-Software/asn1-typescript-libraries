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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION ProtectedXC */
/**
 * @summary ProtectedXC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedXC ::= SEQUENCE {
 *   conProtGroup  ObjectInstance,
 *   conProtA      ObjectInstance,
 *   conProtB      ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class ProtectedXC {
    constructor(
        /**
         * @summary `conProtGroup`.
         * @public
         * @readonly
         */
        readonly conProtGroup: ObjectInstance,
        /**
         * @summary `conProtA`.
         * @public
         * @readonly
         */
        readonly conProtA: ObjectInstance,
        /**
         * @summary `conProtB`.
         * @public
         * @readonly
         */
        readonly conProtB: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a ProtectedXC
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedXC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedXC`.
     * @returns {ProtectedXC}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectedXC]: ProtectedXC[_K] }
    ): ProtectedXC {
        return new ProtectedXC(_o.conProtGroup, _o.conProtA, _o.conProtB);
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedXC */
/**
 * @summary The Leading Root Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedXC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'conProtGroup',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('conProtA', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('conProtB', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedXC */
/**
 * @summary The Trailing Root Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedXC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedXC */
/**
 * @summary The Extension Addition Component Types of ProtectedXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedXC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedXC */
let _cached_decoder_for_ProtectedXC: $.ASN1Decoder<ProtectedXC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectedXC */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedXC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedXC} The decoded data structure.
 */
export function _decode_ProtectedXC(el: _Element) {
    if (!_cached_decoder_for_ProtectedXC) {
        _cached_decoder_for_ProtectedXC = function (el: _Element): ProtectedXC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'ProtectedXC contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'conProtGroup';
            sequence[1].name = 'conProtA';
            sequence[2].name = 'conProtB';
            let conProtGroup!: ObjectInstance;
            let conProtA!: ObjectInstance;
            let conProtB!: ObjectInstance;
            conProtGroup = _decode_ObjectInstance(sequence[0]);
            conProtA = _decode_ObjectInstance(sequence[1]);
            conProtB = _decode_ObjectInstance(sequence[2]);
            return new ProtectedXC(conProtGroup, conProtA, conProtB);
        };
    }
    return _cached_decoder_for_ProtectedXC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedXC */
let _cached_encoder_for_ProtectedXC: $.ASN1Encoder<ProtectedXC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedXC */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectedXC */
/**
 * @summary Encodes a(n) ProtectedXC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedXC, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedXC(
    value: ProtectedXC,
    elGetter: $.ASN1Encoder<ProtectedXC>
) {
    if (!_cached_encoder_for_ProtectedXC) {
        _cached_encoder_for_ProtectedXC = function (
            value: ProtectedXC,
            elGetter: $.ASN1Encoder<ProtectedXC>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtGroup,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtA,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.conProtB,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectedXC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectedXC */

/* eslint-enable */
