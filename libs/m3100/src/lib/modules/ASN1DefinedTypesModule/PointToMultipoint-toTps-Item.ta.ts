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

/* START_OF_SYMBOL_DEFINITION PointToMultipoint_toTps_Item */
/**
 * @summary PointToMultipoint_toTps_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointToMultipoint-toTps-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PointToMultipoint_toTps_Item {
    constructor(
        /**
         * @summary `tp`.
         * @public
         * @readonly
         */
        readonly tp: ObjectInstance,
        /**
         * @summary `xConnection`.
         * @public
         * @readonly
         */
        readonly xConnection: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a PointToMultipoint_toTps_Item
     * @description
     *
     * This takes an `object` and converts it to a `PointToMultipoint_toTps_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PointToMultipoint_toTps_Item`.
     * @returns {PointToMultipoint_toTps_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof PointToMultipoint_toTps_Item]: PointToMultipoint_toTps_Item[_K];
        }
    ): PointToMultipoint_toTps_Item {
        return new PointToMultipoint_toTps_Item(_o.tp, _o.xConnection);
    }
}
/* END_OF_SYMBOL_DEFINITION PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PointToMultipoint_toTps_Item */
/**
 * @summary The Leading Root Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('tp', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'xConnection',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PointToMultipoint_toTps_Item */
/**
 * @summary The Trailing Root Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PointToMultipoint_toTps_Item */
/**
 * @summary The Extension Addition Component Types of PointToMultipoint_toTps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PointToMultipoint_toTps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PointToMultipoint_toTps_Item */
let _cached_decoder_for_PointToMultipoint_toTps_Item: $.ASN1Decoder<PointToMultipoint_toTps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _decode_PointToMultipoint_toTps_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) PointToMultipoint_toTps_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointToMultipoint_toTps_Item} The decoded data structure.
 */
export function _decode_PointToMultipoint_toTps_Item(el: _Element) {
    if (!_cached_decoder_for_PointToMultipoint_toTps_Item) {
        _cached_decoder_for_PointToMultipoint_toTps_Item = function (
            el: _Element
        ): PointToMultipoint_toTps_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PointToMultipoint-toTps-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'tp';
            sequence[1].name = 'xConnection';
            let tp!: ObjectInstance;
            let xConnection!: ObjectInstance;
            tp = _decode_ObjectInstance(sequence[0]);
            xConnection = _decode_ObjectInstance(sequence[1]);
            return new PointToMultipoint_toTps_Item(tp, xConnection);
        };
    }
    return _cached_decoder_for_PointToMultipoint_toTps_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PointToMultipoint_toTps_Item */
let _cached_encoder_for_PointToMultipoint_toTps_Item: $.ASN1Encoder<PointToMultipoint_toTps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PointToMultipoint_toTps_Item */

/* START_OF_SYMBOL_DEFINITION _encode_PointToMultipoint_toTps_Item */
/**
 * @summary Encodes a(n) PointToMultipoint_toTps_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointToMultipoint_toTps_Item, encoded as an ASN.1 Element.
 */
export function _encode_PointToMultipoint_toTps_Item(
    value: PointToMultipoint_toTps_Item,
    elGetter: $.ASN1Encoder<PointToMultipoint_toTps_Item>
) {
    if (!_cached_encoder_for_PointToMultipoint_toTps_Item) {
        _cached_encoder_for_PointToMultipoint_toTps_Item = function (
            value: PointToMultipoint_toTps_Item,
            elGetter: $.ASN1Encoder<PointToMultipoint_toTps_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.tp,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xConnection,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PointToMultipoint_toTps_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PointToMultipoint_toTps_Item */

/* eslint-enable */
