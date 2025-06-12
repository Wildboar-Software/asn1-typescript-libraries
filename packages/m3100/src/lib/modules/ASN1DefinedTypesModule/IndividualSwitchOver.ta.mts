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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IndividualSwitchOver */
/**
 * @summary IndividualSwitchOver
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndividualSwitchOver ::= SEQUENCE {
 *   connection   ObjectInstance,
 *   -- crossConnection of connectionProtection (defined in Recommendation G.774.04)
 *   unchangedTP  ObjectInstance,
 *   newTP        ObjectInstance
 *   -- designates the newTP to which the unchanged TP has to be connected with
 * }
 * ```
 *
 * @class
 */
export class IndividualSwitchOver {
    constructor(
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ObjectInstance,
        /**
         * @summary `unchangedTP`.
         * @public
         * @readonly
         */
        readonly unchangedTP: ObjectInstance,
        /**
         * @summary `newTP`.
         * @public
         * @readonly
         */
        readonly newTP: ObjectInstance
    ) {}

    /**
     * @summary Restructures an object into a IndividualSwitchOver
     * @description
     *
     * This takes an `object` and converts it to a `IndividualSwitchOver`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndividualSwitchOver`.
     * @returns {IndividualSwitchOver}
     */
    public static _from_object(
        _o: { [_K in keyof IndividualSwitchOver]: IndividualSwitchOver[_K] }
    ): IndividualSwitchOver {
        return new IndividualSwitchOver(
            _o.connection,
            _o.unchangedTP,
            _o.newTP
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IndividualSwitchOver */
/**
 * @summary The Leading Root Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [
    new $.ComponentSpec('connection', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'unchangedTP',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('newTP', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IndividualSwitchOver */
/**
 * @summary The Trailing Root Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IndividualSwitchOver */
/**
 * @summary The Extension Addition Component Types of IndividualSwitchOver
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IndividualSwitchOver: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndividualSwitchOver */
let _cached_decoder_for_IndividualSwitchOver: $.ASN1Decoder<IndividualSwitchOver> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _decode_IndividualSwitchOver */
/**
 * @summary Decodes an ASN.1 element into a(n) IndividualSwitchOver
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndividualSwitchOver} The decoded data structure.
 */
export function _decode_IndividualSwitchOver(el: _Element) {
    if (!_cached_decoder_for_IndividualSwitchOver) {
        _cached_decoder_for_IndividualSwitchOver = function (
            el: _Element
        ): IndividualSwitchOver {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'IndividualSwitchOver contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'connection';
            sequence[1].name = 'unchangedTP';
            sequence[2].name = 'newTP';
            let connection!: ObjectInstance;
            let unchangedTP!: ObjectInstance;
            let newTP!: ObjectInstance;
            connection = _decode_ObjectInstance(sequence[0]);
            unchangedTP = _decode_ObjectInstance(sequence[1]);
            newTP = _decode_ObjectInstance(sequence[2]);
            return new IndividualSwitchOver(connection, unchangedTP, newTP);
        };
    }
    return _cached_decoder_for_IndividualSwitchOver(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndividualSwitchOver */
let _cached_encoder_for_IndividualSwitchOver: $.ASN1Encoder<IndividualSwitchOver> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndividualSwitchOver */

/* START_OF_SYMBOL_DEFINITION _encode_IndividualSwitchOver */
/**
 * @summary Encodes a(n) IndividualSwitchOver into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndividualSwitchOver, encoded as an ASN.1 Element.
 */
export function _encode_IndividualSwitchOver(
    value: IndividualSwitchOver,
    elGetter: $.ASN1Encoder<IndividualSwitchOver>
) {
    if (!_cached_encoder_for_IndividualSwitchOver) {
        _cached_encoder_for_IndividualSwitchOver = function (
            value: IndividualSwitchOver,
            elGetter: $.ASN1Encoder<IndividualSwitchOver>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.connection,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.unchangedTP,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.newTP,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IndividualSwitchOver(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndividualSwitchOver */

/* eslint-enable */
