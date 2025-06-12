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
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta.js';
export {
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta.js';
import {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.js';
export {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.js';

/* START_OF_SYMBOL_DEFINITION RemoveCapacityFromTopLinkEndResult */
/**
 * @summary RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveCapacityFromTopLinkEndResult ::= SEQUENCE {
 *   resultingCapacity         PointCapacity,
 *   resultingLinkConnections  LinkConnectionList
 * }
 * ```
 *
 * @class
 */
export class RemoveCapacityFromTopLinkEndResult {
    constructor(
        /**
         * @summary `resultingCapacity`.
         * @public
         * @readonly
         */
        readonly resultingCapacity: PointCapacity,
        /**
         * @summary `resultingLinkConnections`.
         * @public
         * @readonly
         */
        readonly resultingLinkConnections: LinkConnectionList
    ) {}

    /**
     * @summary Restructures an object into a RemoveCapacityFromTopLinkEndResult
     * @description
     *
     * This takes an `object` and converts it to a `RemoveCapacityFromTopLinkEndResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveCapacityFromTopLinkEndResult`.
     * @returns {RemoveCapacityFromTopLinkEndResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveCapacityFromTopLinkEndResult]: RemoveCapacityFromTopLinkEndResult[_K];
        }
    ): RemoveCapacityFromTopLinkEndResult {
        return new RemoveCapacityFromTopLinkEndResult(
            _o.resultingCapacity,
            _o.resultingLinkConnections
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveCapacityFromTopLinkEndResult */
/**
 * @summary The Leading Root Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveCapacityFromTopLinkEndResult */
/**
 * @summary The Trailing Root Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveCapacityFromTopLinkEndResult */
/**
 * @summary The Extension Addition Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveCapacityFromTopLinkEndResult */
let _cached_decoder_for_RemoveCapacityFromTopLinkEndResult: $.ASN1Decoder<RemoveCapacityFromTopLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveCapacityFromTopLinkEndResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopLinkEndResult} The decoded data structure.
 */
export function _decode_RemoveCapacityFromTopLinkEndResult(el: _Element) {
    if (!_cached_decoder_for_RemoveCapacityFromTopLinkEndResult) {
        _cached_decoder_for_RemoveCapacityFromTopLinkEndResult = function (
            el: _Element
        ): RemoveCapacityFromTopLinkEndResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RemoveCapacityFromTopLinkEndResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'resultingCapacity';
            sequence[1].name = 'resultingLinkConnections';
            let resultingCapacity!: PointCapacity;
            let resultingLinkConnections!: LinkConnectionList;
            resultingCapacity = _decode_PointCapacity(sequence[0]);
            resultingLinkConnections = _decode_LinkConnectionList(sequence[1]);
            return new RemoveCapacityFromTopLinkEndResult(
                resultingCapacity,
                resultingLinkConnections
            );
        };
    }
    return _cached_decoder_for_RemoveCapacityFromTopLinkEndResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveCapacityFromTopLinkEndResult */
let _cached_encoder_for_RemoveCapacityFromTopLinkEndResult: $.ASN1Encoder<RemoveCapacityFromTopLinkEndResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveCapacityFromTopLinkEndResult */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveCapacityFromTopLinkEndResult */
/**
 * @summary Encodes a(n) RemoveCapacityFromTopLinkEndResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveCapacityFromTopLinkEndResult(
    value: RemoveCapacityFromTopLinkEndResult,
    elGetter: $.ASN1Encoder<RemoveCapacityFromTopLinkEndResult>
) {
    if (!_cached_encoder_for_RemoveCapacityFromTopLinkEndResult) {
        _cached_encoder_for_RemoveCapacityFromTopLinkEndResult = function (
            value: RemoveCapacityFromTopLinkEndResult,
            elGetter: $.ASN1Encoder<RemoveCapacityFromTopLinkEndResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PointCapacity(
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
    return _cached_encoder_for_RemoveCapacityFromTopLinkEndResult(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveCapacityFromTopLinkEndResult */

/* eslint-enable */
