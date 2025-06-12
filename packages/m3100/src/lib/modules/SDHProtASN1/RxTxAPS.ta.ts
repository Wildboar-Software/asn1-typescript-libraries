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

/* START_OF_SYMBOL_DEFINITION RxTxAPS */
/**
 * @summary RxTxAPS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RxTxAPS ::= SEQUENCE {rxAPSvalue  [0]  INTEGER,
 *                       txAPSvalue  [1]  INTEGER
 * }
 * ```
 *
 * @class
 */
export class RxTxAPS {
    constructor(
        /**
         * @summary `rxAPSvalue`.
         * @public
         * @readonly
         */
        readonly rxAPSvalue: INTEGER,
        /**
         * @summary `txAPSvalue`.
         * @public
         * @readonly
         */
        readonly txAPSvalue: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a RxTxAPS
     * @description
     *
     * This takes an `object` and converts it to a `RxTxAPS`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RxTxAPS`.
     * @returns {RxTxAPS}
     */
    public static _from_object(
        _o: { [_K in keyof RxTxAPS]: RxTxAPS[_K] }
    ): RxTxAPS {
        return new RxTxAPS(_o.rxAPSvalue, _o.txAPSvalue);
    }
}
/* END_OF_SYMBOL_DEFINITION RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RxTxAPS */
/**
 * @summary The Leading Root Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RxTxAPS: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'rxAPSvalue',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'txAPSvalue',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RxTxAPS */
/**
 * @summary The Trailing Root Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RxTxAPS: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RxTxAPS */
/**
 * @summary The Extension Addition Component Types of RxTxAPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RxTxAPS: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RxTxAPS */
let _cached_decoder_for_RxTxAPS: $.ASN1Decoder<RxTxAPS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _decode_RxTxAPS */
/**
 * @summary Decodes an ASN.1 element into a(n) RxTxAPS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RxTxAPS} The decoded data structure.
 */
export function _decode_RxTxAPS(el: _Element) {
    if (!_cached_decoder_for_RxTxAPS) {
        _cached_decoder_for_RxTxAPS = function (el: _Element): RxTxAPS {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RxTxAPS contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'rxAPSvalue';
            sequence[1].name = 'txAPSvalue';
            let rxAPSvalue!: INTEGER;
            let txAPSvalue!: INTEGER;
            rxAPSvalue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[0]
            );
            txAPSvalue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new RxTxAPS(rxAPSvalue, txAPSvalue);
        };
    }
    return _cached_decoder_for_RxTxAPS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RxTxAPS */
let _cached_encoder_for_RxTxAPS: $.ASN1Encoder<RxTxAPS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RxTxAPS */

/* START_OF_SYMBOL_DEFINITION _encode_RxTxAPS */
/**
 * @summary Encodes a(n) RxTxAPS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RxTxAPS, encoded as an ASN.1 Element.
 */
export function _encode_RxTxAPS(
    value: RxTxAPS,
    elGetter: $.ASN1Encoder<RxTxAPS>
) {
    if (!_cached_encoder_for_RxTxAPS) {
        _cached_encoder_for_RxTxAPS = function (
            value: RxTxAPS,
            elGetter: $.ASN1Encoder<RxTxAPS>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.rxAPSvalue, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.txAPSvalue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RxTxAPS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RxTxAPS */

/* eslint-enable */
