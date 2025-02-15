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

/* START_OF_SYMBOL_DEFINITION MulticastXC */
/**
 * @summary MulticastXC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MulticastXC ::= SEQUENCE {
 *   mpXC  ObjectInstance,
 *   xcA   ObjectInstance,
 *   xcB   ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class MulticastXC {
    constructor(
        /**
         * @summary `mpXC`.
         * @public
         * @readonly
         */
        readonly mpXC: ObjectInstance,
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
     * @summary Restructures an object into a MulticastXC
     * @description
     *
     * This takes an `object` and converts it to a `MulticastXC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MulticastXC`.
     * @returns {MulticastXC}
     */
    public static _from_object(
        _o: { [_K in keyof MulticastXC]: MulticastXC[_K] }
    ): MulticastXC {
        return new MulticastXC(_o.mpXC, _o.xcA, _o.xcB);
    }
}
/* END_OF_SYMBOL_DEFINITION MulticastXC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MulticastXC */
/**
 * @summary The Leading Root Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MulticastXC: $.ComponentSpec[] = [
    new $.ComponentSpec('mpXC', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xcA', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('xcB', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MulticastXC */
/**
 * @summary The Trailing Root Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MulticastXC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MulticastXC */
/**
 * @summary The Extension Addition Component Types of MulticastXC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MulticastXC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MulticastXC */
let _cached_decoder_for_MulticastXC: $.ASN1Decoder<MulticastXC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _decode_MulticastXC */
/**
 * @summary Decodes an ASN.1 element into a(n) MulticastXC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MulticastXC} The decoded data structure.
 */
export function _decode_MulticastXC(el: _Element) {
    if (!_cached_decoder_for_MulticastXC) {
        _cached_decoder_for_MulticastXC = function (el: _Element): MulticastXC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'MulticastXC contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpXC';
            sequence[1].name = 'xcA';
            sequence[2].name = 'xcB';
            let mpXC!: ObjectInstance;
            let xcA!: ObjectInstance;
            let xcB!: ObjectInstance;
            mpXC = _decode_ObjectInstance(sequence[0]);
            xcA = _decode_ObjectInstance(sequence[1]);
            xcB = _decode_ObjectInstance(sequence[2]);
            return new MulticastXC(mpXC, xcA, xcB);
        };
    }
    return _cached_decoder_for_MulticastXC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MulticastXC */
let _cached_encoder_for_MulticastXC: $.ASN1Encoder<MulticastXC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MulticastXC */

/* START_OF_SYMBOL_DEFINITION _encode_MulticastXC */
/**
 * @summary Encodes a(n) MulticastXC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MulticastXC, encoded as an ASN.1 Element.
 */
export function _encode_MulticastXC(
    value: MulticastXC,
    elGetter: $.ASN1Encoder<MulticastXC>
) {
    if (!_cached_encoder_for_MulticastXC) {
        _cached_encoder_for_MulticastXC = function (
            value: MulticastXC,
            elGetter: $.ASN1Encoder<MulticastXC>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpXC,
                            $.BER
                        ),
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
    return _cached_encoder_for_MulticastXC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MulticastXC */

/* eslint-enable */
