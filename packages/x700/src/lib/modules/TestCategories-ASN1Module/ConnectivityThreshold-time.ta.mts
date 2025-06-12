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
    UnitsType,
    _decode_UnitsType,
    _encode_UnitsType,
} from '../TestCategories-ASN1Module/UnitsType.ta.mjs';
export {
    UnitsType,
    _decode_UnitsType,
    _encode_UnitsType,
} from '../TestCategories-ASN1Module/UnitsType.ta.mjs';
import {
    UnitsTotal,
    _decode_UnitsTotal,
    _encode_UnitsTotal,
} from '../TestCategories-ASN1Module/UnitsTotal.ta.mjs';
export {
    UnitsTotal,
    _decode_UnitsTotal,
    _encode_UnitsTotal,
} from '../TestCategories-ASN1Module/UnitsTotal.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ConnectivityThreshold_time */
/**
 * @summary ConnectivityThreshold_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityThreshold-time ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ConnectivityThreshold_time {
    constructor(
        /**
         * @summary `unitsType`.
         * @public
         * @readonly
         */
        readonly unitsType: UnitsType,
        /**
         * @summary `unitsTotal`.
         * @public
         * @readonly
         */
        readonly unitsTotal: UnitsTotal
    ) {}

    /**
     * @summary Restructures an object into a ConnectivityThreshold_time
     * @description
     *
     * This takes an `object` and converts it to a `ConnectivityThreshold_time`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectivityThreshold_time`.
     * @returns {ConnectivityThreshold_time}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConnectivityThreshold_time]: ConnectivityThreshold_time[_K];
        }
    ): ConnectivityThreshold_time {
        return new ConnectivityThreshold_time(_o.unitsType, _o.unitsTotal);
    }
}
/* END_OF_SYMBOL_DEFINITION ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectivityThreshold_time */
/**
 * @summary The Leading Root Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'unitsType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'unitsTotal',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectivityThreshold_time */
/**
 * @summary The Trailing Root Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectivityThreshold_time */
/**
 * @summary The Extension Addition Component Types of ConnectivityThreshold_time
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectivityThreshold_time: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityThreshold_time */
let _cached_decoder_for_ConnectivityThreshold_time: $.ASN1Decoder<ConnectivityThreshold_time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityThreshold_time */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityThreshold_time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityThreshold_time} The decoded data structure.
 */
export function _decode_ConnectivityThreshold_time(el: _Element) {
    if (!_cached_decoder_for_ConnectivityThreshold_time) {
        _cached_decoder_for_ConnectivityThreshold_time = function (
            el: _Element
        ): ConnectivityThreshold_time {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConnectivityThreshold-time contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'unitsType';
            sequence[1].name = 'unitsTotal';
            let unitsType!: UnitsType;
            let unitsTotal!: UnitsTotal;
            unitsType = _decode_UnitsType(sequence[0]);
            unitsTotal = _decode_UnitsTotal(sequence[1]);
            return new ConnectivityThreshold_time(unitsType, unitsTotal);
        };
    }
    return _cached_decoder_for_ConnectivityThreshold_time(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityThreshold_time */
let _cached_encoder_for_ConnectivityThreshold_time: $.ASN1Encoder<ConnectivityThreshold_time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityThreshold_time */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityThreshold_time */
/**
 * @summary Encodes a(n) ConnectivityThreshold_time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityThreshold_time, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityThreshold_time(
    value: ConnectivityThreshold_time,
    elGetter: $.ASN1Encoder<ConnectivityThreshold_time>
) {
    if (!_cached_encoder_for_ConnectivityThreshold_time) {
        _cached_encoder_for_ConnectivityThreshold_time = function (
            value: ConnectivityThreshold_time,
            elGetter: $.ASN1Encoder<ConnectivityThreshold_time>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UnitsType(
                            value.unitsType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_UnitsTotal(
                            value.unitsTotal,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectivityThreshold_time(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityThreshold_time */

/* eslint-enable */
