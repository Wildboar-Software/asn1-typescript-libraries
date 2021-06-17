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

/* START_OF_SYMBOL_DEFINITION TpsAddedToTpPool */
/**
 * @summary TpsAddedToTpPool
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TpsAddedToTpPool ::= SEQUENCE {
 *   tpPool  ObjectInstance,
 *   tps     SET OF ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class TpsAddedToTpPool {
    constructor(
        /**
         * @summary `tpPool`.
         * @public
         * @readonly
         */
        readonly tpPool: ObjectInstance,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a TpsAddedToTpPool
     * @description
     *
     * This takes an `object` and converts it to a `TpsAddedToTpPool`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TpsAddedToTpPool`.
     * @returns {TpsAddedToTpPool}
     */
    public static _from_object(
        _o: { [_K in keyof TpsAddedToTpPool]: TpsAddedToTpPool[_K] }
    ): TpsAddedToTpPool {
        return new TpsAddedToTpPool(_o.tpPool, _o.tps);
    }
}
/* END_OF_SYMBOL_DEFINITION TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TpsAddedToTpPool */
/**
 * @summary The Leading Root Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [
    new $.ComponentSpec('tpPool', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TpsAddedToTpPool */
/**
 * @summary The Trailing Root Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TpsAddedToTpPool */
/**
 * @summary The Extension Addition Component Types of TpsAddedToTpPool
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TpsAddedToTpPool: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TpsAddedToTpPool */
let _cached_decoder_for_TpsAddedToTpPool: $.ASN1Decoder<TpsAddedToTpPool> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _decode_TpsAddedToTpPool */
/**
 * @summary Decodes an ASN.1 element into a(n) TpsAddedToTpPool
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TpsAddedToTpPool} The decoded data structure.
 */
export function _decode_TpsAddedToTpPool(el: _Element) {
    if (!_cached_decoder_for_TpsAddedToTpPool) {
        _cached_decoder_for_TpsAddedToTpPool = function (
            el: _Element
        ): TpsAddedToTpPool {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TpsAddedToTpPool contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tpPool';
            sequence[1].name = 'tps';
            let tpPool!: ObjectInstance;
            let tps!: ObjectInstance[];
            tpPool = _decode_ObjectInstance(sequence[0]);
            tps = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance)(
                sequence[1]
            );
            return new TpsAddedToTpPool(tpPool, tps);
        };
    }
    return _cached_decoder_for_TpsAddedToTpPool(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TpsAddedToTpPool */
let _cached_encoder_for_TpsAddedToTpPool: $.ASN1Encoder<TpsAddedToTpPool> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TpsAddedToTpPool */

/* START_OF_SYMBOL_DEFINITION _encode_TpsAddedToTpPool */
/**
 * @summary Encodes a(n) TpsAddedToTpPool into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TpsAddedToTpPool, encoded as an ASN.1 Element.
 */
export function _encode_TpsAddedToTpPool(
    value: TpsAddedToTpPool,
    elGetter: $.ASN1Encoder<TpsAddedToTpPool>
) {
    if (!_cached_encoder_for_TpsAddedToTpPool) {
        _cached_encoder_for_TpsAddedToTpPool = function (
            value: TpsAddedToTpPool,
            elGetter: $.ASN1Encoder<TpsAddedToTpPool>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.tpPool,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tps, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TpsAddedToTpPool(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TpsAddedToTpPool */

/* eslint-enable */
