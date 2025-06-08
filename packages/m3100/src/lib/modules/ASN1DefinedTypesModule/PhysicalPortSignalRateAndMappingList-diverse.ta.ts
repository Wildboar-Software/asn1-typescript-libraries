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
    SignalRateAndMappingList,
    _decode_SignalRateAndMappingList,
    _encode_SignalRateAndMappingList,
} from '../ASN1DefinedTypesModule/SignalRateAndMappingList.ta';
export {
    SignalRateAndMappingList,
    _decode_SignalRateAndMappingList,
    _encode_SignalRateAndMappingList,
} from '../ASN1DefinedTypesModule/SignalRateAndMappingList.ta';

/* START_OF_SYMBOL_DEFINITION PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary PhysicalPortSignalRateAndMappingList_diverse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalPortSignalRateAndMappingList-diverse ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PhysicalPortSignalRateAndMappingList_diverse {
    constructor(
        /**
         * @summary `downstream`.
         * @public
         * @readonly
         */
        readonly downstream: SignalRateAndMappingList,
        /**
         * @summary `upStream`.
         * @public
         * @readonly
         */
        readonly upStream: SignalRateAndMappingList
    ) {}

    /**
     * @summary Restructures an object into a PhysicalPortSignalRateAndMappingList_diverse
     * @description
     *
     * This takes an `object` and converts it to a `PhysicalPortSignalRateAndMappingList_diverse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PhysicalPortSignalRateAndMappingList_diverse`.
     * @returns {PhysicalPortSignalRateAndMappingList_diverse}
     */
    public static _from_object(
        _o: {
            [_K in keyof PhysicalPortSignalRateAndMappingList_diverse]: PhysicalPortSignalRateAndMappingList_diverse[_K];
        }
    ): PhysicalPortSignalRateAndMappingList_diverse {
        return new PhysicalPortSignalRateAndMappingList_diverse(
            _o.downstream,
            _o.upStream
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary The Leading Root Component Types of PhysicalPortSignalRateAndMappingList_diverse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PhysicalPortSignalRateAndMappingList_diverse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'downstream',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'upStream',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary The Trailing Root Component Types of PhysicalPortSignalRateAndMappingList_diverse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PhysicalPortSignalRateAndMappingList_diverse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary The Extension Addition Component Types of PhysicalPortSignalRateAndMappingList_diverse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PhysicalPortSignalRateAndMappingList_diverse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse */
let _cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse: $.ASN1Decoder<PhysicalPortSignalRateAndMappingList_diverse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalPortSignalRateAndMappingList_diverse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalPortSignalRateAndMappingList_diverse} The decoded data structure.
 */
export function _decode_PhysicalPortSignalRateAndMappingList_diverse(
    el: _Element
) {
    if (!_cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse) {
        _cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse = function (
            el: _Element
        ): PhysicalPortSignalRateAndMappingList_diverse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'PhysicalPortSignalRateAndMappingList-diverse contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'downstream';
            sequence[1].name = 'upStream';
            let downstream!: SignalRateAndMappingList;
            let upStream!: SignalRateAndMappingList;
            downstream = _decode_SignalRateAndMappingList(sequence[0]);
            upStream = _decode_SignalRateAndMappingList(sequence[1]);
            return new PhysicalPortSignalRateAndMappingList_diverse(
                downstream,
                upStream
            );
        };
    }
    return _cached_decoder_for_PhysicalPortSignalRateAndMappingList_diverse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse */
let _cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse: $.ASN1Encoder<PhysicalPortSignalRateAndMappingList_diverse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalPortSignalRateAndMappingList_diverse */
/**
 * @summary Encodes a(n) PhysicalPortSignalRateAndMappingList_diverse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalPortSignalRateAndMappingList_diverse, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalPortSignalRateAndMappingList_diverse(
    value: PhysicalPortSignalRateAndMappingList_diverse,
    elGetter: $.ASN1Encoder<PhysicalPortSignalRateAndMappingList_diverse>
) {
    if (!_cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse) {
        _cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse = function (
            value: PhysicalPortSignalRateAndMappingList_diverse,
            elGetter: $.ASN1Encoder<PhysicalPortSignalRateAndMappingList_diverse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SignalRateAndMappingList(
                            value.downstream,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignalRateAndMappingList(
                            value.upStream,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PhysicalPortSignalRateAndMappingList_diverse(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalPortSignalRateAndMappingList_diverse */

/* eslint-enable */
