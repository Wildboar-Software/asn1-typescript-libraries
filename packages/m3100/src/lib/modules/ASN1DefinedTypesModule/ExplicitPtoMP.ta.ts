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
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta.js';
export {
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta.js';

/* START_OF_SYMBOL_DEFINITION ExplicitPtoMP */
/**
 * @summary ExplicitPtoMP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExplicitPtoMP ::= SEQUENCE {fromTp  ExplicitTP,
 *                             toTPs   SET OF ExplicitTP
 * }
 * ```
 *
 * @class
 */
export class ExplicitPtoMP {
    constructor(
        /**
         * @summary `fromTp`.
         * @public
         * @readonly
         */
        readonly fromTp: ExplicitTP,
        /**
         * @summary `toTPs`.
         * @public
         * @readonly
         */
        readonly toTPs: ExplicitTP[]
    ) {}

    /**
     * @summary Restructures an object into a ExplicitPtoMP
     * @description
     *
     * This takes an `object` and converts it to a `ExplicitPtoMP`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExplicitPtoMP`.
     * @returns {ExplicitPtoMP}
     */
    public static _from_object(
        _o: { [_K in keyof ExplicitPtoMP]: ExplicitPtoMP[_K] }
    ): ExplicitPtoMP {
        return new ExplicitPtoMP(_o.fromTp, _o.toTPs);
    }
}
/* END_OF_SYMBOL_DEFINITION ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExplicitPtoMP */
/**
 * @summary The Leading Root Component Types of ExplicitPtoMP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExplicitPtoMP: $.ComponentSpec[] = [
    new $.ComponentSpec('fromTp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'toTPs',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExplicitPtoMP */
/**
 * @summary The Trailing Root Component Types of ExplicitPtoMP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExplicitPtoMP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExplicitPtoMP */
/**
 * @summary The Extension Addition Component Types of ExplicitPtoMP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExplicitPtoMP: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitPtoMP */
let _cached_decoder_for_ExplicitPtoMP: $.ASN1Decoder<ExplicitPtoMP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _decode_ExplicitPtoMP */
/**
 * @summary Decodes an ASN.1 element into a(n) ExplicitPtoMP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExplicitPtoMP} The decoded data structure.
 */
export function _decode_ExplicitPtoMP(el: _Element) {
    if (!_cached_decoder_for_ExplicitPtoMP) {
        _cached_decoder_for_ExplicitPtoMP = function (
            el: _Element
        ): ExplicitPtoMP {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ExplicitPtoMP contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromTp';
            sequence[1].name = 'toTPs';
            let fromTp!: ExplicitTP;
            let toTPs!: ExplicitTP[];
            fromTp = _decode_ExplicitTP(sequence[0]);
            toTPs = $._decodeSetOf<ExplicitTP>(() => _decode_ExplicitTP)(
                sequence[1]
            );
            return new ExplicitPtoMP(fromTp, toTPs);
        };
    }
    return _cached_decoder_for_ExplicitPtoMP(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitPtoMP */
let _cached_encoder_for_ExplicitPtoMP: $.ASN1Encoder<ExplicitPtoMP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExplicitPtoMP */

/* START_OF_SYMBOL_DEFINITION _encode_ExplicitPtoMP */
/**
 * @summary Encodes a(n) ExplicitPtoMP into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExplicitPtoMP, encoded as an ASN.1 Element.
 */
export function _encode_ExplicitPtoMP(
    value: ExplicitPtoMP,
    elGetter: $.ASN1Encoder<ExplicitPtoMP>
) {
    if (!_cached_encoder_for_ExplicitPtoMP) {
        _cached_encoder_for_ExplicitPtoMP = function (
            value: ExplicitPtoMP,
            elGetter: $.ASN1Encoder<ExplicitPtoMP>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExplicitTP(
                            value.fromTp,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ExplicitTP>(
                            () => _encode_ExplicitTP,
                            $.BER
                        )(value.toTPs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExplicitPtoMP(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExplicitPtoMP */

/* eslint-enable */
