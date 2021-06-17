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

/* START_OF_SYMBOL_DEFINITION CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary CoincidentUnprotectedUnidirectionalConnections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoincidentUnprotectedUnidirectionalConnections ::= SEQUENCE {
 *   xcA  ObjectInstance,
 *   xcB  ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class CoincidentUnprotectedUnidirectionalConnections {
    constructor(
        /**
         * @summary `xcA`.
         * @public
         * @readonly
         */
        readonly xcA: ObjectInstance,
        /**
         * @summary `xcB`.
         * @public
         * @readonly
         */
        readonly xcB: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a CoincidentUnprotectedUnidirectionalConnections
     * @description
     *
     * This takes an `object` and converts it to a `CoincidentUnprotectedUnidirectionalConnections`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoincidentUnprotectedUnidirectionalConnections`.
     * @returns {CoincidentUnprotectedUnidirectionalConnections}
     */
    public static _from_object(
        _o: {
            [_K in keyof CoincidentUnprotectedUnidirectionalConnections]: CoincidentUnprotectedUnidirectionalConnections[_K];
        }
    ): CoincidentUnprotectedUnidirectionalConnections {
        return new CoincidentUnprotectedUnidirectionalConnections(
            _o.xcA,
            _o.xcB
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary The Leading Root Component Types of CoincidentUnprotectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoincidentUnprotectedUnidirectionalConnections: $.ComponentSpec[] = [
    new $.ComponentSpec('xcA', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xcB', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary The Trailing Root Component Types of CoincidentUnprotectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoincidentUnprotectedUnidirectionalConnections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary The Extension Addition Component Types of CoincidentUnprotectedUnidirectionalConnections
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoincidentUnprotectedUnidirectionalConnections: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections */
let _cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections: $.ASN1Decoder<CoincidentUnprotectedUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _decode_CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary Decodes an ASN.1 element into a(n) CoincidentUnprotectedUnidirectionalConnections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoincidentUnprotectedUnidirectionalConnections} The decoded data structure.
 */
export function _decode_CoincidentUnprotectedUnidirectionalConnections(
    el: _Element
) {
    if (!_cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections) {
        _cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections = function (
            el: _Element
        ): CoincidentUnprotectedUnidirectionalConnections {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CoincidentUnprotectedUnidirectionalConnections contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'xcA';
            sequence[1].name = 'xcB';
            let xcA!: ObjectInstance;
            let xcB!: ObjectInstance;
            xcA = _decode_ObjectInstance(sequence[0]);
            xcB = _decode_ObjectInstance(sequence[1]);
            return new CoincidentUnprotectedUnidirectionalConnections(xcA, xcB);
        };
    }
    return _cached_decoder_for_CoincidentUnprotectedUnidirectionalConnections(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections */
let _cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections: $.ASN1Encoder<CoincidentUnprotectedUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _encode_CoincidentUnprotectedUnidirectionalConnections */
/**
 * @summary Encodes a(n) CoincidentUnprotectedUnidirectionalConnections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoincidentUnprotectedUnidirectionalConnections, encoded as an ASN.1 Element.
 */
export function _encode_CoincidentUnprotectedUnidirectionalConnections(
    value: CoincidentUnprotectedUnidirectionalConnections,
    elGetter: $.ASN1Encoder<CoincidentUnprotectedUnidirectionalConnections>
) {
    if (!_cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections) {
        _cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections = function (
            value: CoincidentUnprotectedUnidirectionalConnections,
            elGetter: $.ASN1Encoder<CoincidentUnprotectedUnidirectionalConnections>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xcA,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.xcB,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CoincidentUnprotectedUnidirectionalConnections(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CoincidentUnprotectedUnidirectionalConnections */

/* eslint-enable */
