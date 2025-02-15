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
    Capacity,
    _decode_Capacity,
    _encode_Capacity,
} from '../M3100ASN1TypeModule2/Capacity.ta';
export {
    Capacity,
    _decode_Capacity,
    _encode_Capacity,
} from '../M3100ASN1TypeModule2/Capacity.ta';
import {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta';
export {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta';

/* START_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkResult */
/**
 * @summary AddCapacityToTopologicalLinkResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkResult ::= SEQUENCE {
 *   resultingCapacity         Capacity,
 *   resultingLinkConnections  LinkConnectionList
 * }
 * ```
 *
 * @class
 */
export class AddCapacityToTopologicalLinkResult {
    constructor(
        /**
         * @summary `resultingCapacity`.
         * @public
         * @readonly
         */
        readonly resultingCapacity: Capacity,
        /**
         * @summary `resultingLinkConnections`.
         * @public
         * @readonly
         */
        readonly resultingLinkConnections: LinkConnectionList
    ) {}

    /**
     * @summary Restructures an object into a AddCapacityToTopologicalLinkResult
     * @description
     *
     * This takes an `object` and converts it to a `AddCapacityToTopologicalLinkResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddCapacityToTopologicalLinkResult`.
     * @returns {AddCapacityToTopologicalLinkResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddCapacityToTopologicalLinkResult]: AddCapacityToTopologicalLinkResult[_K];
        }
    ): AddCapacityToTopologicalLinkResult {
        return new AddCapacityToTopologicalLinkResult(
            _o.resultingCapacity,
            _o.resultingLinkConnections
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkResult */
/**
 * @summary The Leading Root Component Types of AddCapacityToTopologicalLinkResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'resultingCapacity',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'resultingLinkConnections',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkResult */
/**
 * @summary The Trailing Root Component Types of AddCapacityToTopologicalLinkResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddCapacityToTopologicalLinkResult */
/**
 * @summary The Extension Addition Component Types of AddCapacityToTopologicalLinkResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddCapacityToTopologicalLinkResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkResult */
let _cached_decoder_for_AddCapacityToTopologicalLinkResult: $.ASN1Decoder<AddCapacityToTopologicalLinkResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkResult} The decoded data structure.
 */
export function _decode_AddCapacityToTopologicalLinkResult(el: _Element) {
    if (!_cached_decoder_for_AddCapacityToTopologicalLinkResult) {
        _cached_decoder_for_AddCapacityToTopologicalLinkResult = function (
            el: _Element
        ): AddCapacityToTopologicalLinkResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddCapacityToTopologicalLinkResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'resultingCapacity';
            sequence[1].name = 'resultingLinkConnections';
            let resultingCapacity!: Capacity;
            let resultingLinkConnections!: LinkConnectionList;
            resultingCapacity = _decode_Capacity(sequence[0]);
            resultingLinkConnections = _decode_LinkConnectionList(sequence[1]);
            return new AddCapacityToTopologicalLinkResult(
                resultingCapacity,
                resultingLinkConnections
            );
        };
    }
    return _cached_decoder_for_AddCapacityToTopologicalLinkResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkResult */
let _cached_encoder_for_AddCapacityToTopologicalLinkResult: $.ASN1Encoder<AddCapacityToTopologicalLinkResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkResult */
/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkResult, encoded as an ASN.1 Element.
 */
export function _encode_AddCapacityToTopologicalLinkResult(
    value: AddCapacityToTopologicalLinkResult,
    elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkResult>
) {
    if (!_cached_encoder_for_AddCapacityToTopologicalLinkResult) {
        _cached_encoder_for_AddCapacityToTopologicalLinkResult = function (
            value: AddCapacityToTopologicalLinkResult,
            elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Capacity(
                            value.resultingCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LinkConnectionList(
                            value.resultingLinkConnections,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddCapacityToTopologicalLinkResult(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkResult */

/* eslint-enable */
